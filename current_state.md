# Current State — giulioruffini.com

_Last updated: 2026-10-04_

Personal website for Giulio Ruffini. Rebuilt from a Netlify-generated TanStack Start
scaffold into a static, content-driven site with the "K&AI" color theme.

## Stack

| Layer | Tech |
|-------|------|
| Framework | TanStack Start + TanStack Router v1 |
| UI | React 19, Radix UI primitives |
| Styling | Tailwind CSS v4 + CSS variables |
| Content | @content-collections (type-safe markdown) |
| Build | Vite 7, static prerender (SSG, no server) |
| Deploy | GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) |

## Routes

| Path | Source | Notes |
|------|--------|-------|
| `/` | `routes/index.tsx` | Hero with starfield, News list, recent writing |
| `/kt` | `routes/kt.tsx` → `content/pages/kt.md` | Kolmogorov Theory reference list |
| `/neuroscience` | `routes/neuroscience.tsx` → `content/pages/neuroscience.md` | LaNMM / computational neuroscience |
| `/stimulation` | `routes/stimulation.tsx` → `content/pages/stimulation.md` | tES and the full publication list |
| `/blog` | `routes/blog/index.tsx` | Writing: hosted essays + external sections (BCOM, Neuroelectrics, Math Corner, Substack) |
| `/blog/$slug` | `routes/blog/$slug.tsx` | Local post detail; external posts link out |
| `/art` | `routes/art.tsx` → `content/poems/` | Poems with images and a sticky index |
| `/resume` | `routes/resume.tsx` | CV: jobs + education + bio |
| `/contact` | `routes/contact.tsx` | `mailto:` link, no backend |

`ReferencePage` renders `pages` markdown via `marked`; `SiteNav` is the responsive nav;
`Starfield` is the hero canvas.

## Content

- **Source of truth:** `github.com/giulioruffini/giulioruffini.github.io` (branch `recovery`).
  Reference pages are copied from its `kt.md`, `lanmm.md`, `tES.md`; the News list mirrors
  its `index.md`. Edits go to both repositories.
- **Blog:** entries are content-collection records. Most link to the canonical HTML on
  github.io (`externalUrl`); four are self-hosted under `public/blogs/`.
- **Poems:** 37 published, curated through `poems-to-publish.csv`.
- **Social preview:** `public/og.jpg` (1200×630) with Open Graph and Twitter meta in `__root.tsx`.

## Theme — "K&AI"

Defined in `src/styles.css :root`: deep indigo-black background (`--ink`), violet-blue primary
accent (`--champagne`, legacy name), chartreuse secondary (`--lime`), Cormorant Garamond +
DM Sans. `.prose-article` styles the rendered markdown.

## Build / run

```bash
npm install
npm run dev      # port 5173, exposed for k.local on the LAN
npm run build    # dist/client/ holds the complete static site
```

## Deploy and domain

- Every push to `main` builds and publishes `dist/client/` to GitHub Pages.
- Custom domain `www.giulioruffini.com` (`public/CNAME`); the bare domain resolves to GitHub Pages
  and redirects to `www`. One certificate covers both names (approved 2026-10-05 after GitHub
  support ticket #4823649 restarted a stalled issuance); HTTPS enforced.
- DNS is at Netlify DNS (nameservers `dns#.p06.nsone.net`) because the domain was registered
  through Netlify on 2026-06-20; the registration cannot change nameservers. The zone holds the
  GitHub Pages A and AAAA records and the `www` CNAME. Records saved during the June usage block
  never reached the nameservers; they were deleted and recreated through the REST API on
  2026-10-04, after which the apex resolved. The Netlify CLI's `api` subcommand returns 422 for
  these records; use `curl` against `api.netlify.com` or the dashboard.
- History: the site started on Netlify (SSR). A Netlify usage block (`usage_exceeded`) took it
  down in June 2026; the build was converted to static and moved to GitHub Pages.
