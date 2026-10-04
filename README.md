# giulioruffini.com

Personal website of Giulio Ruffini: Kolmogorov Theory, computational neuroscience, brain stimulation, writing, and poems. Live at <https://www.giulioruffini.com>.

## Stack

- TanStack Start and TanStack Router, React 19, Tailwind CSS v4
- `@content-collections` for typed markdown content
- Vite 7, built as a fully static site: every route is prerendered to HTML
- GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173, also reachable on the LAN as k.local:5173
npm run build    # static site in dist/client/
```

## Content

| Path | Purpose |
|------|---------|
| `content/pages/{kt,neuroscience,stimulation}.md` | Reference pages, copied from `giulioruffini.github.io` (`kt.md`, `lanmm.md`, `tES.md`) with rewritten frontmatter |
| `content/blog/` | Writing. Entries link to the canonical HTML on github.io, or to `public/blogs/` when self-hosted |
| `content/poems/` | Art section, curated through `poems-to-publish.csv` |
| `content/jobs/`, `content/education/` | CV entries |
| `src/routes/index.tsx` | Homepage, including the News list |

The reference pages and the News list mirror the github.io source. An edit goes to both repositories.

## Deployment and domain

GitHub Pages serves `dist/client/` under the custom domain `www.giulioruffini.com` (`public/CNAME`). The contact page is a `mailto:` link; there is no backend.

DNS is at Netlify DNS because the domain was registered through Netlify in June 2026, and Netlify-registered domains cannot change nameservers. Netlify publishes the `www` CNAME to `giulioruffini.github.io` but no apex A record, so the bare `giulioruffini.com` does not resolve. The fix is to transfer the registration to another registrar, add apex A records for GitHub Pages (185.199.108.153 through 185.199.111.153) and the `www` CNAME, then set the Pages custom domain back to the apex.
