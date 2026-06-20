import { HeadContent, Scripts, createRootRoute, Link, useRouterState } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Giulio Ruffini' },
      { name: 'description', content: 'Theoretical physicist and computational neuroscientist studying cognition and consciousness through algorithmic information theory — Kolmogorov Theory.' },
      { name: 'og:title', content: 'Giulio Ruffini' },
      { name: 'og:description', content: 'Theoretical physicist and computational neuroscientist. Kolmogorov Theory, brain modeling, and neuromodulation.' },
    ],
  }),
  shellComponent: RootDocument,
})

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const router = useRouterState()
  const isActive = router.location.pathname === to

  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="grain mesh-bg min-h-screen">
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6" style={{ backdropFilter: 'blur(12px)', background: 'linear-gradient(to bottom, rgba(13,17,23,0.9) 0%, transparent 100%)' }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/" className="font-display text-xl font-light tracking-widest" style={{ color: 'var(--paper)', letterSpacing: '0.15em' }}>
              GR
            </Link>
            <div className="flex items-center gap-6">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/kt">Kolmogorov Theory</NavLink>
              <NavLink to="/neuroscience">Neuroscience</NavLink>
              <NavLink to="/stimulation">Stimulation</NavLink>
              <NavLink to="/blog">Writing</NavLink>
              <NavLink to="/resume">CV</NavLink>
              <Link
                to="/contact"
                className="text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300"
                style={{
                  borderColor: 'var(--champagne)',
                  color: 'var(--champagne)',
                  letterSpacing: '0.12em',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.background = 'var(--champagne)'
                  el.style.color = 'var(--ink)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.background = 'transparent'
                  el.style.color = 'var(--champagne)'
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <main>
          {children}
        </main>

        <footer className="border-t px-8 py-10 mt-24" style={{ borderColor: 'rgba(138,148,166,0.15)' }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-display text-lg font-light" style={{ color: 'var(--champagne)' }}>
              Giulio Ruffini
            </span>
            <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--smoke)', letterSpacing: '0.1em' }}>
              &copy; {new Date().getFullYear()} · All rights reserved
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a href="https://github.com/giulioruffini" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
              <a href="https://x.com/ruffini" target="_blank" rel="noopener noreferrer" className="nav-link">X</a>
              <a href="https://bsky.app/profile/did:plc:37bwtlke7dplqitxkzqule6e" target="_blank" rel="noopener noreferrer" className="nav-link">Bluesky</a>
              <a href="https://platoniapirate.substack.com" target="_blank" rel="noopener noreferrer" className="nav-link">Substack</a>
              <a href="https://open.spotify.com/artist/4zohEvcKbgPdWmLHSlLRWo" target="_blank" rel="noopener noreferrer" className="nav-link">Spotify</a>
              <a href="https://scholar.google.com/citations?hl=en&user=IxDxqksAAAAJ" target="_blank" rel="noopener noreferrer" className="nav-link">Scholar</a>
              <a href="https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Ruffini%2C%20Giulio%22&l=list&p=1&s=10&sort=bestmatch" target="_blank" rel="noopener noreferrer" className="nav-link">Zenodo</a>
              <a href="https://www.bcom.one" target="_blank" rel="noopener noreferrer" className="nav-link">BCOM</a>
            </div>
          </div>
        </footer>

        <Scripts />
      </body>
    </html>
  )
}
