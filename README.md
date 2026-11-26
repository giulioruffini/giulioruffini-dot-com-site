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
npm run build    # static site in dist/client/, with the visit counter added
```

## Content

| Path | Purpose |
|------|---------|
| `content/pages/{kt,neuroscience,stimulation}.md` | Reference pages (originally `kt.md`, `lanmm.md`, `tES.md` of `giulioruffini.github.io`) |
| `content/blog/` | Writing. Each entry links to its standalone HTML page in `public/blogs/` or to an external post |
| `public/blogs/`, `public/math/` | The standalone essay pages and the Math Corner notes, served as they are |
| `content/poems/` | Art section, curated through `poems-to-publish.csv` |
| `content/jobs/`, `content/education/` | CV entries |
| `src/routes/index.tsx` | Homepage, including the News list |

This repository is the only source of the public site. Until 2026-11-26 the essays, the Math Corner notes and the reference pages lived on `giulioruffini.github.io` and every edit was made in both repositories; that site now forwards each of those old addresses to the same page here and keeps only the collaboration pages, the paper and slide files, and the papers chat page.

## Deployment and domain

GitHub Pages serves `dist/client/` under the custom domain `www.giulioruffini.com` (`public/CNAME`); the bare domain resolves to GitHub Pages and redirects to `www`. One certificate covers both names (approved 2026-10-05 after a GitHub support ticket) and HTTPS is enforced. The contact page is a `mailto:` link; there is no backend.

The domain was registered through Netlify in June 2026, so DNS lives at Netlify DNS and the nameservers cannot be changed. The zone holds the GitHub Pages A records (185.199.108.153 through 185.199.111.153), the matching AAAA records, and the `www` CNAME to `giulioruffini.github.io`. Netlify's own CLI rejects apex records; edit them through the REST API or the dashboard. Moving the registration elsewhere needs a Netlify support ticket for the authorization code.

## Visit counter

GoatCounter has counted page views since 2026-11-26; nothing recorded visits before that date. It sets no cookies and stores no personal data, so the site needs no consent banner. The dashboard is at <https://giulioruffini.goatcounter.com> (site code `giulioruffini`) and shows views per page, referrers, countries and devices.

The counter is added at build time. `scripts/add-goatcounter.mjs` runs after `vite build` and inserts the loader into every HTML file in `dist/client/`, the prerendered routes and the essay pages from `public/blogs/` alike, so a new page is counted without further work. Page sources, `npm run dev`, and any copy of a source page deposited elsewhere carry no counter. Navigations inside the app change the URL without loading a page; `src/router.tsx` counts them, with the previous page as referrer. Paths are recorded without the trailing slash that GitHub Pages adds (`/kt/` counts as `/kt`), and only the hosts `giulioruffini.com` and `www.giulioruffini.com` send anything, so local previews are not counted.

The pages that remain on `giulioruffini.github.io` (the papers chat page, and anything published there later through its Jekyll layout) report to the same dashboard with the host prefixed to the path, for example `giulioruffini.github.io/chat/`.

To exclude your own visits, open `https://www.giulioruffini.com/#toggle-goatcounter` once in each browser you use (opening it again re-enables counting), and do the same at `https://giulioruffini.github.io/#toggle-goatcounter`; the setting is stored per site and per browser.
