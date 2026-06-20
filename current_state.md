# Current State — giulioruffini.com

_Last updated: 2026-06-20_

Personal website for **Giulio Ruffini** — theoretical physicist & computational
neuroscientist (Kolmogorov Theory; BCOM, Neuroelectrics, Starlab). Rebuilt from
a Netlify-generated TanStack Start scaffold into a real, content-rich site with a
custom "K&AI" color theme.

## Stack

| Layer | Tech |
|-------|------|
| Framework | TanStack Start (SSR) + TanStack Router v1 |
| UI | React 19, Radix UI primitives |
| Styling | Tailwind CSS v4 + CSS variables |
| Content | @content-collections (type-safe markdown) |
| Build | Vite 7 — **static prerender** (SSG, no server) |
| Deploy | **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`) |

## Routes

| Path | Source | Notes |
|------|--------|-------|
| `/` | `routes/index.tsx` | Hero, about strip, recent writing, CTA |
| `/kt` | `routes/kt.tsx` → `content/pages/kt.md` | Kolmogorov Theory reference list |
| `/neuroscience` | `routes/neuroscience.tsx` → `content/pages/neuroscience.md` | LaNMM / computational neuroscience |
| `/stimulation` | `routes/stimulation.tsx` → `content/pages/stimulation.md` | tES publications (full history) |
| `/blog` | `routes/blog/index.tsx` | 13 hosted essays + "Elsewhere" sections |
| `/blog/$slug` | `routes/blog/$slug.tsx` | Local post detail (external posts link out) |
| `/resume` | `routes/resume.tsx` | CV: jobs + education + bio |
| `/contact` | `routes/contact.tsx` | Netlify Forms |

`ReferencePage` (`src/components/ReferencePage.tsx`) renders `pages` markdown via `marked`.
`SiteNav` (`src/components/SiteNav.tsx`) is the responsive nav (desktop row + mobile hamburger).

## Content

- **Source of truth:** mirrors `github.com/giulioruffini/giulioruffini.github.io`.
  Reference pages (`content/pages/`) are copied verbatim from its `kt.md`,
  `lanmm.md`, `tES.md`.
- **Blog:** the 13 "hosted here" essays are content-collection entries linking to
  the canonical hosted HTML (`externalUrl`). External sections (BCOM, Neuroelectrics,
  Math Corner, Substack) are hardcoded in `blog/index.tsx`.
- **Jobs / education / projects metadata:** `content/jobs`, `content/education`.

## Theme — "K&AI"

Drawn from Giulio's Spotify artist art. Defined in `src/styles.css :root`:
- Background: deep indigo-black `--ink: #09081a`, multi-hue mesh glow (`.mesh-bg`).
- Primary accent: electric violet-blue `--champagne: #7a68ff` (var name kept for compat).
- Secondary accent: chartreuse-lime `--lime: #c6e24f` (section labels, nav, stat numbers, dividers).
- Fonts: Cormorant Garamond (display) + DM Sans (body).
- `.prose-article` styles the rendered markdown (blog + reference pages).

## Build / run

```bash
npm install
npm run dev      # vite dev (port 5173, exposed for k.local on LAN)
npm run build    # vite build -> static SSG into dist/client/ (per-route index.html)
```

The build prerenders every route to static HTML (`tanstackStart({ prerender })` in
`vite.config.ts`). Output in `dist/client/` is a complete static site — no server.

## Deploy — GitHub Pages

- Repo: `github.com/giulioruffini/giulioruffini-dot-com-site`, branch `main`.
- **`.github/workflows/deploy.yml`** builds and publishes `dist/client/` to GitHub
  Pages on every push to `main` (Pages source must be set to "GitHub Actions").
- `public/CNAME` = `giulioruffini.com`; `public/.nojekyll` disables Jekyll.
- Contact form uses a **mailto:** handler (no backend) — `giulio@starlab.es`.
- **DNS** (managed at Netlify DNS, nameservers `dns#.p06.nsone.net`): apex
  `giulioruffini.com` → GitHub Pages A records (185.199.108–111.153);
  `www` → CNAME `giulioruffini.github.io`.
- History: previously on Netlify (TanStack Start SSR) but the Netlify account hit a
  usage/credit limit → account-wide `usage_exceeded` 503. Migrated to static + Pages
  to remove that dependency. (Separate user site `giulioruffini.github.io` is unaffected.)
