# AGENTS.md

Personal website for Giulio Ruffini, built with TanStack Start and deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS variables |
| Content | @content-collections (type-safe markdown) |
| Forms | Netlify Forms |
| Language | TypeScript 5 (strict) |
| Deployment | Netlify |

## Directory Structure

```
├── content/
│   ├── blog/         # Blog post markdown files
│   ├── education/    # Education entries
│   ├── jobs/         # Work experience entries
│   └── projects/     # Project cards
├── public/
│   ├── contact.html  # Hidden form for Netlify Forms discovery
│   ├── headshot-on-white.jpg
│   └── favicon.ico
├── src/
│   ├── components/ui/ # Radix UI primitives (Badge, Card, etc.)
│   ├── routes/
│   │   ├── __root.tsx     # Root layout: nav, footer, grain overlay
│   │   ├── index.tsx      # Hero landing page
│   │   ├── blog/
│   │   │   ├── index.tsx  # Blog listing at /blog
│   │   │   └── $slug.tsx  # Blog post detail at /blog/$slug
│   │   ├── resume.tsx     # CV/resume page
│   │   ├── projects.tsx   # Projects grid
│   │   └── contact.tsx    # Contact form (Netlify Forms)
│   └── styles.css         # Global styles, CSS variables, animations
├── content-collections.ts # Zod schemas for all content types
└── vite.config.ts
```

## Design System

The site uses a dark theme defined as CSS custom properties in `src/styles.css`:

- `--ink` / `--ink-soft` / `--ink-muted` — dark background layers
- `--paper` — primary text color (warm off-white)
- `--champagne` / `--champagne-light` / `--champagne-muted` — gold accent family
- `--smoke` / `--ash` — secondary text colors
- `font-display` class — Cormorant Garamond (serif)
- Body font — DM Sans (sans-serif)

Utility classes defined in `styles.css`:
- `.grain` — animated film grain overlay (applied to `<body>`)
- `.mesh-bg` — subtle radial gradient background
- `.section-label` — small uppercase tracking label in champagne color
- `.nav-link` — navigation link with animated underline
- `.card-lift` — hover lift effect for project cards
- `.gold-line` — champagne gradient horizontal rule
- `.animate-fade-up`, `.animate-fade-in` — CSS keyframe animations

## Content Collections Schemas

All content is in `content/` as markdown with YAML frontmatter:

**Blog** (`content/blog/*.md`): `title`, `date`, `summary`, `tags[]`, `author`, body
**Jobs** (`content/jobs/*.md`): `jobTitle`, `company`, `location`, `startDate`, `endDate?`, `summary`, `tags[]`, body
**Education** (`content/education/*.md`): `school`, `summary`, `startDate`, `endDate?`, `tags[]`, body
**Projects** (`content/projects/*.md`): `title`, `description`, `tags[]`, `github?`, `liveUrl?`, body

All `startDate`/`endDate` must be strings (e.g., `"2012"` or `"2021-06-01"`).

## Conventions

- Components: PascalCase, colocated with routes when specific to one page
- Use `@/` import alias for `src/`
- Inline style props are used alongside Tailwind when CSS variable values are needed
- No AI slop: avoid generic placeholder names, round numbers, or Inter/Roboto fonts
- Contact form posts to `/contact.html` (the static Netlify Forms discovery page), not a backend route

## Routes

| Path | Description |
|------|-------------|
| `/` | Hero landing page with stats, about strip, recent posts |
| `/resume` | Full CV with jobs and education |
| `/projects` | Project grid |
| `/blog` | Blog post listing |
| `/blog/$slug` | Individual blog post |
| `/contact` | Contact form (Netlify Forms) |
