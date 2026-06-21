import { useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/kt', label: 'Kolmogorov Theory' },
  { to: '/neuroscience', label: 'Neuroscience' },
  { to: '/stimulation', label: 'Stimulation' },
  { to: '/blog', label: 'Writing' },
  { to: '/art', label: 'Art' },
  { to: '/resume', label: 'CV' },
]

function NavLink({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  const router = useRouterState()
  const isActive = router.location.pathname === to
  return (
    <Link to={to} onClick={onClick} className={`nav-link ${isActive ? 'active' : ''}`}>
      {label}
    </Link>
  )
}

function ContactButton({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/contact"
      onClick={onClick}
      className="inline-block text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300"
      style={{ borderColor: 'var(--champagne)', color: 'var(--champagne)', letterSpacing: '0.12em' }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--champagne)'
        e.currentTarget.style.color = 'var(--ink)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.color = 'var(--champagne)'
      }}
    >
      Contact
    </Link>
  )
}

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      style={{
        backdropFilter: 'blur(12px)',
        background: open
          ? 'rgba(9,8,26,0.97)'
          : 'linear-gradient(to bottom, rgba(11,10,28,0.9) 0%, transparent 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={close}
            className="font-display text-xl font-light tracking-widest"
            style={{ color: 'var(--paper)', letterSpacing: '0.15em' }}
          >
            GR
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <NavLink key={l.to} {...l} />
            ))}
            <ContactButton />
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            style={{ color: 'var(--paper)' }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div
            className="md:hidden flex flex-col items-start gap-5 mt-6 pt-6"
            style={{ borderTop: '1px solid rgba(148,140,186,0.15)' }}
          >
            {links.map(l => (
              <NavLink key={l.to} {...l} onClick={close} />
            ))}
            <ContactButton onClick={close} />
          </div>
        )}
      </div>
    </nav>
  )
}
