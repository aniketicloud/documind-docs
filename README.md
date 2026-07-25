# Documind Docs

Public documentation site for **[Documind](../documind)** — document intelligence, multi-chat, RustFS uploads, and local infrastructure.

Built with **[Fumadocs](https://fumadocs.dev)** + Next.js 16. Deploy target: **Vercel**.

## Local development

```bash
cd documind-docs
npm install
npm run dev
```

Open [http://localhost:3001/docs](http://localhost:3001/docs)  
(Port **3001** avoids clashing with the app on **3000**.)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on 3001 |
| `npm run build` | Production build |
| `npm run start` | Serve production build on 3001 |

## Content

Markdown/MDX lives in `content/docs/`:

- **Guide** — getting started, install, env, Docker  
- **Product** — features, auth, chat, documents, settings  
- **Architecture** — overview, data model, API, security, storage  
- **Development** — conventions, UI, deploy  
- **ADR** — architecture decision records  

## Deploy (Vercel)

1. Create a GitHub repo from this folder and push.  
2. Import into Vercel (Next.js).  
3. Build: `npm run build` — no app secrets required.  
4. Point a custom domain if desired (e.g. `docs.example.com`).  

## Roadmap (what to build next in the app)

See **[ROADMAP.md](./ROADMAP.md)** or  
[http://localhost:3001/docs/development/roadmap](http://localhost:3001/docs/development/roadmap)  
for architect-level pending work and option IDs (`Do A`, `Do B2`, …).

## Related

- Application: sibling folder `../documind`  
