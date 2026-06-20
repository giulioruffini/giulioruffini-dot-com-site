# Plan / Roadmap — giulioruffini.com

_Last updated: 2026-06-20_

## Done
- [x] Replace Netlify template content with real, sourced content.
- [x] Reference pages: `/kt`, `/neuroscience`, `/stimulation` from github.io sources.
- [x] Blog: 13 real essays (link to canonical) + external sections (BCOM, NE, Math, Substack).
- [x] Real headshot, real metrics, real bio, socials (incl. Spotify, Bluesky, Zenodo).
- [x] "K&AI" indigo + violet-blue × chartreuse theme.
- [x] Responsive nav (mobile hamburger).
- [x] Delete `/projects`.
- [x] Docs (`current_state.md`, `plan.md`).

## Open

### P0 — Migrate to GitHub Pages (in progress)
- [x] Convert build to static prerender (SSG); drop Netlify SSR plugin.
- [x] Swap contact form to mailto (no backend).
- [x] Add Pages workflow, CNAME, .nojekyll.
- [ ] **Enable Pages:** repo Settings → Pages → Source = "GitHub Actions" (one-time),
      then confirm the deploy workflow goes green.
- [ ] **Repoint DNS** at Netlify DNS: replace the two NETLIFY records with
      apex A records 185.199.108.153 / .109.153 / .110.153 / .111.153 and
      `www` CNAME → `giulioruffini.github.io`. (Optional AAAA: 2606:50c0:8000–8003::153.)
- [ ] Confirm custom domain + HTTPS in repo Pages settings once DNS propagates.
- [ ] Netlify: site can be deleted/unlinked once Pages is serving giulioruffini.com.

### P1 — Content / polish
- [ ] Confirm remaining estimated facts: BA start year (1984 assumed; grad 1988 confirmed),
      PhD start (1989 assumed; 1995 confirmed). Languages and Boston location confirmed.
- [ ] Blog post day-precision is nominal (month/year are real); set exact days if desired.
- [ ] Consider hosting blog posts locally (port HTML → markdown) instead of linking out,
      so giulioruffini.com is self-contained.
- [ ] Open Graph / social preview image (currently text-only meta).
- [ ] Favicon still the template default.

### P2 — Nice to have
- [ ] Publications: pull a "selected/top-cited" list onto `/` or `/kt`.
- [ ] Search or tag filtering for blog + publications.
- [ ] Light/dark toggle (currently dark-only).
- [ ] Analytics (privacy-friendly).

## Notes
- Reference-page content is copied from github.io; when those update, re-copy
  `kt.md` / `lanmm.md` / `tES.md` into `content/pages/`.
- Theme variables keep the legacy `--champagne` name for the primary accent.
