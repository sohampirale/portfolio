/**
 * Chat API Route — Soham Pirale AI Assistant
 *
 * Server-side endpoint that powers the portfolio chatbot.
 * Uses Fireworks AI (DeepSeek) with the full Soham profile
 * as system context. Falls back to Exa AI for live web
 * lookups when the user asks about current/live information.
 *
 * API keys stay server-side only — never exposed to the browser.
 *
 * POST /api/chat
 * Body: { message: string, history: { role: string, content: string }[] }
 * Response: { reply: string, usedExa: boolean }
 */

export const prerender = false;

import type { APIRoute } from 'astro';
import OpenAI from 'openai';
import Exa from 'exa-js';
import fs from 'node:fs';
import path from 'node:path';

// ─── Model config ───────────────────────────────────────────────────────────
// Fireworks AI OpenAI-compatible endpoint
// Model: DeepSeek V4 Flash on Fireworks AI
const FIREWORKS_BASE_URL = 'https://api.fireworks.ai/inference/v1';
const MODEL = 'accounts/fireworks/models/deepseek-v4-flash';

// Max conversation turns to keep in context (avoid token bloat)
const MAX_HISTORY_TURNS = 6;

// ─── Load knowledge base once at startup ────────────────────────────────────
const profilePath = path.join(process.cwd(), 'src/data/soham-profile.md');
const SOHAM_PROFILE = fs.readFileSync(profilePath, 'utf-8');

// ─── System prompt ───────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are Soham Pirale's AI assistant embedded on his personal portfolio website.

Your job is to answer any question visitors have about Soham — his background, projects, skills, products, achievements, engineering philosophy, and career.

RULES:
1. Answer based on the profile knowledge base provided below. Be specific, accurate, and confident.
2. If asked about something that might have changed recently (e.g. "Is he still working on X?", "What is his latest project?", "Is his GitHub active?"), use the exa_search tool to look it up.
3. Only use exa_search when genuinely needed for live/current information. Don't use it for static facts already in the profile.
4. NEVER make up facts about Soham. If you genuinely don't know something, say so honestly and suggest the visitor contact him directly.
5. Be friendly, concise, and technical when appropriate. Soham is a builder — answer like a knowledgeable colleague, not a corporate bot.
6. If someone asks how to reach Soham, provide his email (sohampirale20504@gmail.com) and LinkedIn (https://linkedin.com/in/soham-pirale).
7. Keep answers reasonably concise unless the question needs depth.

===== SOHAM PIRALE — COMPLETE PROFILE =====

${SOHAM_PROFILE}

==========================================`;

// ─── Tool definition for Exa search ────────────────────────────────────────
const EXA_TOOL: OpenAI.Chat.Completions.ChatCompletionTool = {
  type: 'function',
  function: {
    name: 'exa_search',
    description:
      'Search the web for live/current information about Soham Pirale, his projects, or his work. Use ONLY when the profile context is insufficient or the user asks about something recent.',
    parameters: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'A concise search query, e.g. "Soham Pirale RopMitra latest update"',
        },
      },
      required: ['query'],
    },
  },
};

// ─── Exa search executor ─────────────────────────────────────────────────────
async function runExaSearch(query: string, exaApiKey: string): Promise<string> {
  const exa = new Exa(exaApiKey);
  const results = await exa.search(query, {
    numResults: 3,
    type: 'auto',
    useAutoprompt: true,
  });
  if (!results.results || results.results.length === 0) {
    return 'No relevant web results found.';
  }
  return results.results
    .map((r, i: number) => 
      `[Result ${i + 1}] ${r.title ?? 'Untitled'}\nURL: ${r.url ?? 'N/A'}\n${(r as any).snippet ?? r.text ?? 'No content'}`)
    .join('\n\n');
}

// ─── Route handler ───────────────────────────────────────────────────────────
export const POST: APIRoute = async ({ request }) => {
  // ── Validate env keys ──
  const fireworksKey = process.env.FIREWORKS_API_KEY;
  const exaKey = process.env.EXA_API_KEY;

  if (!fireworksKey) {
    return new Response(
      JSON.stringify({ error: 'Chat is not configured yet. API key missing.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // ── Parse body ──
  let body: { message: string; history?: { role: string; content: string }[] };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { message, history = [] } = body;
  if (!message?.trim()) {
    return new Response(JSON.stringify({ error: 'Message cannot be empty.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // ── Build Fireworks client ──
  const client = new OpenAI({
    apiKey: fireworksKey,
    baseURL: FIREWORKS_BASE_URL,
  });

  // ── Trim history to MAX_HISTORY_TURNS ──
  const trimmedHistory = history.slice(-MAX_HISTORY_TURNS * 2);

  // ── Build messages ──
  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...trimmedHistory.map((m) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    })),
    { role: 'user', content: message },
  ];

  let usedExa = false;
  let finalReply = '';

  try {
    // ── Phase 1: LLM call with tool support (non-streaming) ──
    const firstResponse = await client.chat.completions.create({
      model: MODEL,
      messages,
      tools: exaKey ? [EXA_TOOL] : undefined,
      tool_choice: exaKey ? 'auto' : undefined,
      temperature: 0.4,
      max_tokens: 1024,
    });

    const firstChoice = firstResponse.choices[0];

    // ── Phase 2: Handle tool call (Exa search) if requested ──
    if (firstChoice.finish_reason === 'tool_calls' && firstChoice.message.tool_calls && exaKey) {
      usedExa = true;
      const toolCall = firstChoice.message.tool_calls[0];
      const fnArgs = (toolCall as any).function?.arguments ?? '{}';
      const { query } = JSON.parse(fnArgs);

      let exaResult = 'Exa search failed.';
      try {
        exaResult = await runExaSearch(query, exaKey);
      } catch (e) {
        exaResult = 'Web search temporarily unavailable.';
      }

      // Add tool result to messages and call LLM again
      const updatedMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        ...messages,
        firstChoice.message,
        {
          role: 'tool',
          tool_call_id: toolCall.id,
          content: exaResult,
        },
      ];

      const secondResponse = await client.chat.completions.create({
        model: MODEL,
        messages: updatedMessages,
        temperature: 0.4,
        max_tokens: 1024,
      });
      finalReply = secondResponse.choices[0].message.content || 'Sorry, I could not generate a response.';
    } else {
      // No tool call needed — use direct response
      finalReply = firstChoice.message.content || 'Sorry, I could not generate a response.';
    }

    return new Response(JSON.stringify({ reply: finalReply, usedExa }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: unknown) {
    console.error('[chat/api] LLM error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ error: `LLM error: ${msg}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
