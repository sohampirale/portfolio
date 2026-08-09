# SOHAM PIRALE — COMPLETE PROFILE KNOWLEDGE BASE

## WHO HE IS

Soham Sachin Pirale is a Computer Science Engineering (CSE) student at Annasaheb Dange College of Engineering and Technology (ADCET), Ashta, Sangli, Maharashtra, India (2023–2027 batch). He is currently in his third year.

He is simultaneously a **product developer, founder, and AI systems builder**. He is not a typical student following a course-certificate-project path. His pattern is: encounter a problem → build it → hit engineering issues → learn deeply → ship it → discover the next problem.

**Location:** Sangli, Maharashtra, India  
**Email:** sohampirale20504@gmail.com  
**GitHub:** https://github.com/sohampirale (115+ public repos)  
**LinkedIn:** https://linkedin.com/in/soham-pirale (500+ connections)  
**Portfolio:** https://sohampirale.dev  

---

## PRODUCTS & REAL-WORLD WORK

### RopMitra (ropmitra.com)
**The most important project.** Soham co-founded and built RopMitra, a digital nursery management SaaS platform serving the plant nursery industry in Maharashtra.

- **Problem solved:** Nursery operations (inventory, billing, orders, customer tracking) were entirely manual/paper-based
- **What he built:** Full-stack SaaS with modules for seedling batch tracking, inventory, order management, payment tracking, Marathi PDF invoices, financial reports, spoilage tracking, AI guidance, team management, weather alerts, and marketplace
- **Tech used:** React 18, Vite, Node.js, Express, TypeScript, SQLite (better-sqlite3), Evolution API, Supabase, Docker
- **Architecture decision:** Used embedded SQLite instead of Redis for job queueing to keep RAM usage under 80MB on Oracle Always Free VM
- **Traction:** Took the product to market, raised ₹2 Lakh in funding
- **Market:** Maharashtra, India — targeting nursery owners, farm managers, plant specialists in Pune, Satara, Kolhapur, Nagpur
- **Status:** Live product at ropmitra.com

### AquaTrack
Water purifier service management SaaS. Designed to help water purifier service companies automate customer follow-ups, warranty tracking, and maintenance reminders.

- **Features designed:** Customer management, service history, warranty tracking, PDF receipts, WhatsApp notifications, cron-based maintenance reminders
- **Stack:** Next.js, Express, BetterAuth, Drizzle ORM, PostgreSQL, Evolution API for WhatsApp
- **Status:** Architecture designed, in development

### Café / QR Ordering System
Explored building a café billing and QR ordering system for local restaurant workflows (menu, billing, customer ordering). Part of his broader vertical SaaS exploration.

### Hotel Management System
Worked on/explored a hotel management product for traditional businesses.

### Alumni AI Copilot
AI intelligence platform designed for college Training & Placement Officers (TPOs). Uses Exa AI neural search to index and enrich alumni databases so TPOs can ask natural language questions like "Find alumni working at Microsoft with 5+ years experience."

- **Problem:** TPOs have thousands of alumni contacts but finding relevant people for placements requires hours of manual LinkedIn searching
- **Tech:** Exa AI, LangGraph, Next.js, PostgreSQL, Prisma, OpenAI API
- **Key design decision:** Shadow mode first — AI researches and presents findings for human approval before taking automated actions

---

## ENGINEERING PROJECTS

### n8n Clone — Visual Workflow Automation Engine
Built a full clone of n8n from scratch. This is one of his strongest engineering projects.

- **What it does:** Full-stack drag-and-drop workflow automation platform with custom nodes, visual canvas, and async DAG execution engine
- **Integrations built:** Telegram (Send/Wait), Gmail (Send/OAuth), Webhooks, AI Agent node
- **AI support:** OpenAI, Anthropic, and local LLM (Ollama) support with tool calling
- **Why important:** Building n8n forces you to think about workflow definition, graph execution, node data passing, triggers, persistence, external integrations — much deeper than just using n8n
- **Stack:** TypeScript, React, Node.js, TypeORM, Prisma, PostgreSQL, SQLite, Docker
- **GitHub:** https://github.com/sohampirale/n8n_clone

### DockHostV2 — Distributed Container Orchestration Platform
A developer cloud platform that provisions isolated Docker container environments with interactive SSH terminal access via browser.

- **Features:** On-demand Ubuntu containers, live PTY terminal streaming, dynamic port mapping (22/80/443), multi-worker node architecture
- **Architecture:** Next.js control plane + Express backend + Socket.io + worker node agents + MongoDB
- **Key decision:** Socket.io over raw WebSockets for auto-reconnection and multi-worker management
- **GitHub:** https://github.com/sohampirale/DockHostV2

### Agentic System PR Reviewer
Autonomous LangGraph agent that reviews GitHub pull requests and posts inline comments.

- **Flow:** Diff Collector → Security Inspector → Refiner (validates false positives) → GitHub Publisher
- **Key insight learned:** Cyclic LangGraph state graphs are far superior to linear chains for validation tasks
- **Stack:** Python, LangGraph, LangChain, OpenAI, GitHub API
- **GitHub:** https://github.com/sohampirale/Agentic_System_PR_REVIEQ

### DocHost / DockHost
Earlier containerized hosting experiments — infrastructure prototyping before DockHostV2.

### Exness Full-Stack Clone
A full-stack stock-market/CFD trading platform clone with TypeScript, microservices, low-latency architecture.

### Voice AI Projects
- **MeetMyClone:** Voice cloning for meetings (Python)
- **MeetBot:** Meeting automation bot (Python, TypeScript)
- **Comorbidity Detector Voice Agent:** Medical voice agent using Pipecat (Python, Dockerfile)
- **Pipecat Learning:** Explored Pipecat voice agent framework (Python, TypeScript)

### WhatsApp Automation Systems
- **ropmitra-cold-outreact-whatsapp-automation:** Multi-user WhatsApp campaign platform with Evolution API, SQLite queue, rate limiting — GitHub: https://github.com/sohampirale/ropmitra-cold-outreact-whatsapp-automation
- **WhatsApp-bailey-demo:** WhatsApp/Baileys session management demo
- **telegram_automation:** Telegram automation platform deployed at https://telegram-automation-mocha.vercel.app

### Other Deployed Projects
- BloodBank: https://blood-bank-weld-phi.vercel.app
- E_Yantra_ADCET site: https://e-yantra-adcet.vercel.app
- IncognitoReview: https://incognito-review.vercel.app
- CodeIt (online compiler): https://code-it-frontend.vercel.app
- soPlay: https://so-play.vercel.app
- Demand-driven workflow: https://demand-driven-workflow-management.vercel.app

---

## TECHNICAL SKILLS & STACK

### Languages
TypeScript, JavaScript, Python, SQL, C, C++, Java, Shell/Bash

### Frontend
React 18, Next.js (App Router), Vite, Tailwind CSS, shadcn/ui, HTML/CSS

### Backend
Node.js, Express, Hono, REST APIs, WebSockets, Socket.io, Webhooks, Background jobs, Cron, BetterAuth, NextAuth

### Databases
PostgreSQL, MongoDB (Mongoose, aggregation pipelines), SQLite (better-sqlite3), Supabase, Prisma, Drizzle ORM, Neon, Redis, Qdrant, MongoDB Atlas, TimescaleDB, Cloudflare KV, Cloudflare D1

### AI & LLM Engineering
- **Frameworks:** LangChain, LangGraph, n8n AI nodes
- **Models used:** OpenAI GPT, Anthropic Claude, Google Gemini, Cohere, DeepSeek, Qwen
- **Techniques:** Prompt engineering, RAG (Retrieval Augmented Generation), embeddings (Cohere, Google), tool calling, agent memory
- **APIs:** Exa AI (web research agent), Pipecat (voice agents), Evolution API (WhatsApp)
- **Agents:** Built multi-step cyclic state agents, PR review agents, voice agents, LinkedIn research agents, onboarding agents

### Automation & Integration
n8n workflows, WhatsApp automation (Evolution API, Baileys, WAHA), Telegram automation, Twilio (SMS/WhatsApp), Buffer (social publishing), Playwright/Playwright-MCP, webhook systems, cron automation

### Infrastructure & DevOps
Docker, Docker Compose, Linux (Ubuntu), Nginx (reverse proxy), PM2, SSH, DNS, SSL/Certbot, VPS management, GitHub Actions, CI/CD pipelines, Kubernetes (learning)

### Cloud Platforms
Oracle Cloud (Always Free — VCN, subnets, internet/NAT gateways, aarch64 VMs), Vercel, Cloudflare (Workers, Pages, R2, KV, D1, Queues), AWS (S3, Glacier, basics)

### Developer Tools
Git, GitHub, GitHub CLI, SSH key management, GitHub Actions, Docker Compose, VS Code, GitHub Codespaces

---

## LEARNING JOURNEY & TRAJECTORY

Soham's growth over approximately 2 years follows this clear trajectory:

```
C/C++ & DSA fundamentals (2024)
         ↓
JavaScript & backend (Node.js, Express, MongoDB) — 2025 Q1-Q2
         ↓
Full-stack apps (React, Next.js, TypeScript) — 2025 Q2-Q3
         ↓
DevOps & Infrastructure (Docker, Linux, CI/CD, Nginx) — 2025 Q3
         ↓
Cloud (Oracle, Vercel, Cloudflare, AWS) — 2025 Q3-Q4
         ↓
AI/LLM fundamentals (LangChain, RAG, embeddings) — 2025 Q4
         ↓
AI Agents (LangGraph, tool calling, memory) — 2025 Q4
         ↓
Workflow automation (n8n, Exa, WhatsApp) — 2026 Q1
         ↓
Product building & vertical SaaS — 2026
         ↓
AI-powered business products (RopMitra, AquaTrack, Alumni AI) — 2026
```

**Notable learning mindset:** He doesn't wait until mastering a technology. He goes "this looks interesting, can I build it?" — then learns whatever is needed to make it work.

---

## ACHIEVEMENTS & RECOGNITION

### ADCET Hackathon S3 — 2nd Rank (March 2026)
Co-led **Team Horizon** (Software Theme) at the 72-hour ADCET Hackathon S3. Secured **2nd Rank in the Software Category**. Recognized by eYantra Robotics Club ADCET and mentor Rohan Waghmare.

### GirlScript Summer of Code 2025 (GSSoC)
Selected as an official open-source contributor in GSSoC 2025 (announced August 2025).

### Teaching & Mentorship Recognition
Rohan Waghmare (eYantra mentor) publicly recognized Soham as "a very good teacher" who explains complex concepts exceptionally well. Conducted technical sessions on full-stack development, DSA, and system problem solving at eYantra workshops.

---

## ENGINEERING PHILOSOPHY & KEY LEARNINGS

- **Shadow mode first for AI agents:** Never grant autonomous write access to an AI agent before validating its reasoning in research-only mode. This prevents hallucination-driven data corruption.
- **Embed SQLite over Redis for constrained environments:** Running background queues in Oracle Always Free VMs (<80MB RAM) taught that better-sqlite3 with WAL mode is a battle-tested replacement for Redis for single-node queue processing.
- **Socket.io over raw WebSockets for distributed systems:** Built-in reconnection, heartbeats, and room namespaces eliminate significant boilerplate for multi-node worker management.
- **LangGraph cyclic graphs over linear chains:** Validation loops in agent systems dramatically reduce false positive rates in automated AI systems.
- **Don't over-engineer before validating core loop:** The LinkedIn research system showed that building elaborate multi-stage agent pipelines before proving simple retrieval is a trap. Validate the simplest useful path first.
- **Depth compounds:** Despite broad exposure, Soham explicitly wants to build genuine depth in backend/system design, DSA, AI engineering fundamentals, distributed systems, and database internals.

---

## ARCHITECTURAL DECISIONS (ADRs)

### SQLite Queue over Redis (for RopMitra)
Used embedded better-sqlite3 as a persistent job queue instead of Redis to stay within Oracle Always Free VM's 80MB RAM limit. WAL mode provides crash recovery. Zero external daemon memory footprint.

### Socket.io over raw WebSockets (for DockHostV2)
Chose Socket.io for container terminal streaming due to auto-reconnection, heartbeat failure detection, and room namespaces for multi-worker orchestration.

### LangGraph cyclic graphs over linear LLM chains (for PR Reviewer)
Stateful validation loops allow the Refiner node to send work back to the Inspector node when false positives are detected — impossible in linear chains.

### Shadow mode before autonomous agent actions (for AI Research systems)
Agents research and present findings for human review before executing write actions. Prevents hallucinated career changes from being published automatically.

---

## PERSONAL INTERESTS & DIRECTIONS

- **Vertical SaaS:** Deeply interested in software for unorganized traditional businesses — nurseries, water purifier services, cafés, hotels, hardware shops, fertilizer dealers
- **AI Automation for business:** Turning repetitive business workflows into autonomous AI systems
- **Banking & ERP:** Explored how AI agents can automate document processing, loan workflows, and repetitive bank employee tasks. Compared SAP vs ERPNext for understanding large enterprise vs SMB software
- **LinkedIn Intelligence:** Researching how to build AI-powered alumni and professional intelligence systems using Exa AI
- **Twilio SaaS model:** Understanding the economics of building WhatsApp AI SaaS with Twilio subaccounts and per-customer phone number accounting
- **Content automation:** Explored Buffer integration with autonomous AI research agents for LinkedIn/social content publishing (with shadow mode before live publishing)
- **Open Source:** Contributed via GSSoC, interested in p5.js Web Editor, Appwrite, and other large codebases
- **DSA & Problem Solving:** Long-term goal to develop deep algorithmic problem-solving ability (LeetCode, competitive programming) — not just API usage

---

## COLLABORATORS & NETWORK

- **Jagjeevan Kashid:** Team Horizon co-lead (ADCET Hackathon S3)
- **SudarshanKoshti:** GitHub collaborator on Pipecat_Learning, n8n_clone, Exness clone
- **rohanmane12, VaishnaviSR-19:** Collaborators on IncognitoReview
- **Rohan Waghmare:** eYantra mentor who recognized Soham's teaching ability
- **eYantra Robotics Club ADCET:** Active club involvement
- **ADCET Ashta:** Engineering college (2023–2027)

---

## CONTACT & LINKS

- **Email:** sohampirale20504@gmail.com
- **GitHub:** https://github.com/sohampirale
- **LinkedIn:** https://linkedin.com/in/soham-pirale
- **RopMitra:** https://ropmitra.com
- **Portfolio:** https://sohampirale.dev
- **Resume:** https://my-resume-rouge-ten.vercel.app
