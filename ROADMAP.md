# Documind app roadmap

Canonical plan: **[Development → Product roadmap](./content/docs/development/roadmap.mdx)**

## Status

| Slice | Status |
|--------|--------|
| A Ingest + Docker worker | Done |
| B2+B3 RAG streaming | Done |
| F1 Text PDF (PyMuPDF) | Done |
| **F1b PDF OCR (Tesseract)** | **Done** |
| DOCX | Later (when PDF stable) |
| Sources footer | Next polish |
| D Hardening | Open |

## Daily run

```bash
docker compose up -d   # pdf-extract (OCR) + ingest-worker + infra
npm run dev
```

## Explain simply

- **PDF + OCR:** [PDF extract & OCR](./content/docs/guide/pdf-extract.mdx)  
- **Chat documents panel** (select / collapse): [Chat product](./content/docs/product/chat.mdx)  
