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

GitHub Pages serves `dist/client/` under the custom domain `www.giulioruffini.com` (`public/CNAME`); the bare domain resolves to GitHub Pages and redirects to `www`. One certificate covers both names (approved 2026-10-05 after a GitHub support ticket) and HTTPS is enforced. The contact page is a `mailto:` link; there is no backend.

The domain was registered through Netlify in June 2026, so DNS lives at Netlify DNS and the nameservers cannot be changed. The zone holds the GitHub Pages A records (185.199.108.153 through 185.199.111.153), the matching AAAA records, and the `www` CNAME to `giulioruffini.github.io`. Netlify's own CLI rejects apex records; edit them through the REST API or the dashboard. Moving the registration elsewhere needs a Netlify support ticket for the authorization code.
