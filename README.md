# giulioruffini.com

Personal website for Giulio Ruffini — physicist, neuroscientist, and entrepreneur. Features a hero landing page, project portfolio, resume, blog, and contact form.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React, SSR)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Content**: [@content-collections](https://www.content-collections.dev/) — markdown files for blog posts, projects, resume, education
- **Forms**: Netlify Forms
- **Deployment**: [Netlify](https://netlify.com)
- **Fonts**: Cormorant Garamond (display) + DM Sans (body) via Google Fonts

## Running Locally

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Adding Content

All site content lives in the `content/` directory as markdown files with YAML frontmatter:

| Directory | Purpose |
|-----------|---------|
| `content/blog/` | Blog posts |
| `content/projects/` | Project cards |
| `content/jobs/` | Work experience |
| `content/education/` | Education entries |

Edit the markdown files to update any section. No rebuild needed in development — content-collections hot-reloads changes.

## Domain Setup

To point `giulioruffini.com` to this Netlify site:
1. Go to **Netlify → Site settings → Domain management → Add custom domain**
2. Add `giulioruffini.com`
3. Update your domain registrar's DNS to point to Netlify's servers (Netlify will show you the exact records)
