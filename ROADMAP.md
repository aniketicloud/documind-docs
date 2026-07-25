# Documind app roadmap

Canonical plan (with diagrams and option IDs):

**[Development → Product roadmap & next options](./content/docs/development/roadmap.mdx)**

View in the docs site after `npm run dev`:

[http://localhost:3001/docs/development/roadmap](http://localhost:3001/docs/development/roadmap)

## Quick pick

| Option | Meaning |
|--------|---------|
| **A** | Ingest foundation (queue + worker + statuses) |
| **B2** | Text RAG MVP (parse txt/md/csv + Qdrant) |
| **B3** | B2 + streaming LLM |
| **C** | LLM chat without RAG |
| **D** | Production hardening |
| **E** | UX polish (no AI) |
| **F** | PDF-capable ingest (after A) |
| **G** | Deploy this docs site to Vercel |

**Recommended path:** ~~A~~ (done) → **B2** → B3 → F → D  

Reply in chat with e.g. `Do B2` to implement the next slice in the **documind** app.

### Option A status

Implemented in `documind`:

- Schema: `processing` | `indexed` | `failed`, `document_jobs`
- Enqueue on upload confirm
- Worker: `npm run worker:ingest`
- UI badges + **Retry ingest** on My documents
