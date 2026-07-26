# Documind app roadmap

Canonical plan:

**[Development → Product roadmap](./content/docs/development/roadmap.mdx)**

[http://localhost:3001/docs/development/roadmap](http://localhost:3001/docs/development/roadmap)

## Quick status

| Option | Status |
|--------|--------|
| **A** Ingest foundation | Done (Docker **ingest-worker**) |
| **B2+B3** Text RAG + streaming | Done |
| **F1** Text-based PDF (PyMuPDF) | Done |
| **F1b** OCR scanned PDFs | Next engineering |
| **Sources footer** | Next polish (after / with F1b) |
| **D** Production hardening | Open |
| **E** UX polish | Open |

**Daily run:** `docker compose up -d` + `npm run dev` (no host worker command).

## What works for chat RAG

- `.txt` / `.md` / `.csv`  
- **Text-based PDFs** (selectable text) via **pdf-extract**  
- Chat-scoped pinned documents  

## Guides

- [Document ingest](./content/docs/guide/document-ingest.mdx)  
- [PDF extract](./content/docs/guide/pdf-extract.mdx)  
- [Embeddings & Qdrant](./content/docs/guide/embeddings-and-qdrant.mdx)  
- [RAG chat](./content/docs/guide/rag-chat.mdx)  
