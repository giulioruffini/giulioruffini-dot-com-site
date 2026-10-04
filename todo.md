# TODO — giulioruffini.com

- [ ] retry the Pages custom domain on the bare giulioruffini.com (set cname via gh api, wait for cert state approved, re-enable https_enforced, change public/CNAME); the 2026-10-04 attempt sat in dns_changed for over an hour
- [ ] confirm https_enforced is back on for www once GitHub re-approves its certificate
- [ ] add the Entropy DOI for From "More Is Different" to Algorithmic Emergence once published (site, github.io, Calliope)
- [ ] optional: transfer the domain registration away from Netlify (support ticket for the authorization code; re-enter the same DNS records at the new registrar)
- [x] apex DNS fixed through the Netlify REST API; bare domain now reaches the site over HTTP and redirects to www
- [x] papers, News, docs, and social preview synced 2026-10-04
