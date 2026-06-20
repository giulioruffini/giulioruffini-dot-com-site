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
| Build | Vite 7 |
| Deploy | Netlify (SSR function via `@netlify/vite-plugin-tanstack-start`) |

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
npm run dev      # vite dev (port 5173)
npm run build    # vite build -> dist/client + .netlify/v1/functions/server.mjs
```

## Deploy

- Repo: `github.com/giulioruffini/giulioruffini-dot-com-site`, branch `main`.
- `netlify.toml`: `command = "vite build"`, `publish = "dist/client"`.
- Custom domain: **giulioruffini.com** (attached to the Netlify site).
- ⚠️ As of 2026-06-20, `giulioruffini.com` returned **HTTP 503** — needs a healthy
  production deploy. Check the Netlify dashboard build logs / git-link. See `plan.md`.
