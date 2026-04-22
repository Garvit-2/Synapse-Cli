# Synapse CLI 🧠

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-v20+-green.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.2-black.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Ready-blue.svg)

**Synapse CLI** is an enterprise-grade, command-line AI agent built specifically for developers. It bridges the gap between terminal workflows and advanced Generative AI by providing context-aware chat, autonomous tool execution, and a secure OAuth 2.0 Device Authorization flow.

Stop context-switching to browser tabs. Let Synapse search your files, debug errors, and scaffold code directly in your terminal.

## 🚀 Key Features

- **Secure Device Flow Auth:** Zero-password CLI authentication mirroring enterprise tools (AWS/GitHub CLI), backed by a secure Next.js web portal.
- **Agentic Tool Calling:** Empower the AI to securely search file systems, analyze code, and execute tasks autonomously using the Vercel AI SDK.
- **Beautiful Terminal UI (TUI):** Rich, interactive console experience built with `@clack/prompts`, `boxen`, and Markdown rendering directly in the terminal.
- **Persistent Memory:** All conversations and contextual data are persisted via PostgreSQL and Prisma ORM, allowing you to seamlessly pick up where you left off.
- **Streaming Responses:** Real-time, low-latency AI responses streamed straight to your shell.

## 🏗️ Architecture & Tech Stack

Synapse CLI is built on a decoupled, highly scalable architecture:

**Client Web Portal (Next.js)**
- Next.js 16.2 (React 19)
- Tailwind CSS v4 & Shadcn UI
- `better-auth` for session management

**Server / CLI Core (Node.js)**
- Express.js (REST API for CLI syncing)
- Commander.js & Clack Prompts (TUI)
- Vercel AI SDK (`@ai-sdk/google`)
- PostgreSQL & Prisma ORM

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v20+)
- PostgreSQL installed and running
- Google Gemini API Key

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/synapse-cli.git
cd synapse-cli
\`\`\`

### 2. Environment Variables
Create a `.env` file in both the `client` and `server` directories based on the provided `.env.example` files.
\`\`\`env
# Server .env
DATABASE_URL="postgresql://user:password@localhost:5432/synapse"
GOOGLE_GENERATIVE_AI_API_KEY="your_api_key_here"
NEXT_PUBLIC_CLIENT_URL="http://localhost:3000"

# Client .env
BETTER_AUTH_SECRET="your_secure_secret"
\`\`\`

### 3. Install Dependencies & Setup Database
\`\`\`bash
# Setup Server
cd server
npm install
npx prisma db push

# Setup Client
cd ../client
npm install
\`\`\`

### 4. Run the Application
Start both the client portal and the backend server:
\`\`\`bash
# In terminal 1 (Client)
cd client && npm run dev

# In terminal 2 (Server)
cd server && npm run dev
\`\`\`

## 💻 Usage

Link your CLI to the backend system globally using:
\`\`\`bash
npm link
\`\`\`

**Authenticate your device:**
\`\`\`bash
synapse login
\`\`\`
*(This will open your default browser to securely authorize your terminal session.)*

**Start chatting with Synapse:**
\`\`\`bash
synapse wakeup
\`\`\`

## 🔮 Future Improvements

- **Human-in-the-loop Safeguards:** Implementing strict Y/N terminal prompts before executing potentially destructive AI shell commands.
- **Local RAG Integration:** Injecting workspace-specific context via local vector embeddings so Synapse understands massive codebases instantly.
- **Dockerization:** Providing a comprehensive `docker-compose.yml` for instant, one-click backend infrastructure deployment.
- **Redis Rate Limiting:** Implementing connection pooling and request throttling for massive scalability.

## 💼 Resume-Ready Bullet Points

*   Architected a decoupled AI-powered CLI tool and Next.js authorization portal, leveraging the OAuth 2.0 Device Flow to securely manage authentication for developer terminal sessions.
*   Engineered a persistent Node.js/Express backend using PostgreSQL and Prisma ORM to maintain stateful LLM conversation histories and orchestrate Vercel AI SDK tool-calling.
*   Designed a rich Terminal UI (TUI) utilizing Commander.js and Clack, featuring real-time Markdown rendering and secure, autonomous shell executions.
