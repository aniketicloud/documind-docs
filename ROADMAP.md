# Documind app roadmap

Canonical plan (with diagrams and option IDs):

**[Development → Product roadmap & next options](./content/docs/development/roadmap.mdx)**

View in the docs site after `npm run dev`:

[http://localhost:3001/docs/development/roadmap](http://localhost:3001/docs/development/roadmap)

## Quick pick

| Option | Meaning | Status |
|--------|---------|--------|
| **A** | Ingest foundation (queue + worker + statuses) | Done |
| **B2** | Text RAG MVP (parse txt/md/csv + Qdrant) | Done |
| **B3** | Streaming LLM UI/API with B2 | Done |
| **C** | LLM chat without RAG | Skipped (would ignore files) |
| **D** | Production hardening | Next ops track |
| **E** | UX polish | Open |
| **F** | PDF-capable ingest | **Recommended product next** |
| **G** | Deploy this docs site to Vercel | Open |

**Path taken:** A → B2 → B3.  
**Recommended next:** **F** → **D**, with **E** / citations as small PRs.

Reply in chat with e.g. `Do F` to implement the next slice in the **documind** app.

## What & why (recent)

### Option A — ingest foundation

**What:** `document_jobs`, Redis queue, `npm run worker:ingest`, statuses `processing` / `indexed` / `failed`, My documents badges + retry.

**Why:** Upload must stay fast. Heavy prep cannot run inside presign/confirm. Async jobs give retries and honest lifecycle UI.

Plain language: [Document ingest](./content/docs/guide/document-ingest.mdx)

### Options B2 + B3 — text RAG + streaming

**What:**

- Worker: extract `.txt`/`.md`/`.csv` → chunk → Gemini embeddings → Qdrant  
- Chat streams: `POST /api/chats/stream`, `POST /api/chats/:id/messages/stream`  
- Rules: only **indexed** docs **attached on this turn**  
- UI: live tokens; library picker = indexed files  

**Why:**

| Choice | Why |
|--------|-----|
| Gemini free tier | One free key for embed + chat; MVP cost zero |
| Qdrant | Already in Compose; semantic search + `userId` filters |
| Text first | Full loop without PDF parser risk |
| Indexed-only | Don’t invent answers from half-processed files |
| Per-turn attach | User controls context |
| Stream with RAG | Demo-quality UX; avoid “wait then dump” |

Plain language: [RAG chat (B2+B3)](./content/docs/guide/rag-chat.mdx)  
Decision record: [ADR-0008](./content/docs/adr/0008-gemini-streaming-rag.mdx)

### Gemini 2026 stack (Interactions + embedding-2)

**What:** Dropped legacy `@google/generative-ai` / `generateContent`. Chat uses **Interactions** (`gemini-3.1-flash-lite`). Embeddings use **`gemini-embedding-2`** @ 768-d. Z.AI remains default chat option.

**Why re-ingest:** New embed model = new “map” of meaning. Old Qdrant vectors are not comparable; collection may be recreated if dimensions change.

Plain language: [Embeddings, Qdrant & Gemini stack](./content/docs/guide/embeddings-and-qdrant.mdx)  
Decision record: [ADR-0009](./content/docs/adr/0009-gemini-interactions-embedding-2.mdx)

### Env notes

- `GEMINI_API_KEY` in local `.env` only (never commit)  
- `GEMINI_CHAT_MODEL=gemini-3.1-flash-lite`, `GEMINI_EMBED_MODEL=gemini-embedding-2`, `GEMINI_EMBED_DIMENSIONS=768`  
- `QDRANT_URL=http://127.0.0.1:6335` (host `6335` → container `6333`)  
