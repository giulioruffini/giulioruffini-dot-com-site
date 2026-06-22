import { createFileRoute } from '@tanstack/react-router'
import { allPoems } from 'content-collections'

export const Route = createFileRoute('/art')({
  component: Art,
})

function Art() {
  const poems = [...allPoems].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999),
  )

  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">Art</p>
        <h1
          className="font-display mb-3"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--paper)', lineHeight: 1 }}
        >
          Poems
        </h1>
        <div className="gold-line w-20 mb-6" />
        <p className="text-base max-w-xl" style={{ color: 'var(--ash)', fontWeight: 300 }}>
          Verses on agents and minds, models and machines, love and being one.
        </p>

        <div className="mt-16 lg:grid lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-16">
          {/* Table of contents */}
          <nav className="hidden lg:block" aria-label="Poems">
            <div
              className="sticky top-28 overflow-y-auto pr-4"
              style={{ maxHeight: 'calc(100vh - 8rem)' }}
            >
              <p className="section-label mb-4">Index</p>
              <ul className="space-y-2.5">
                {poems.map((poem) => (
                  <li key={poem._meta.path}>
                    <a
                      href={`#${poem._meta.path}`}
                      className="block text-sm leading-snug transition-colors"
                      style={{ color: 'var(--smoke)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--lime)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--smoke)' }}
                    >
                      {poem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Poems */}
          <div className="space-y-20" style={{ maxWidth: '40rem' }}>
            {poems.map((poem, i) => (
              <article key={poem._meta.path} id={poem._meta.path} style={{ scrollMarginTop: '7rem' }}>
                {poem.image && (
                  <figure className="mb-8" style={{ maxWidth: '24rem' }}>
                    <img
                      src={poem.image}
                      alt={poem.title}
                      className="block w-full"
                      style={{ border: '1px solid rgba(139,123,255,0.25)' }}
                    />
                  </figure>
                )}
                <h2
                  className="font-display mb-6 text-center"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--champagne)',
                  }}
                >
                  {poem.title}
                </h2>
                <div
                  className="font-display"
                  style={{
                    whiteSpace: 'pre-line',
                    color: 'var(--ash)',
                    fontSize: '1.2rem',
                    lineHeight: 1.4,
                    fontWeight: 300,
                  }}
                >
                  {poem.content.trim()}
                </div>
                {i < poems.length - 1 && (
                  <div
                    className="mt-16"
                    style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--lime)', opacity: 0.6 }}
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
