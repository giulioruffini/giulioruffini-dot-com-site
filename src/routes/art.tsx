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
      <div className="max-w-3xl mx-auto">
        <p className="section-label mb-4">Art</p>
        <h1
          className="font-display mb-3"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--paper)', lineHeight: 1 }}
        >
          Poems
        </h1>
        <div className="gold-line w-20 mb-6" />
        <p className="text-base mb-20 max-w-xl" style={{ color: 'var(--ash)', fontWeight: 300 }}>
          Verses on agents and minds, models and machines, love and being one.
        </p>

        <div className="space-y-24">
          {poems.map((poem, i) => (
            <article key={poem._meta.path} className="text-center">
              {poem.image && (
                <figure className="mb-10 mx-auto" style={{ maxWidth: '26rem' }}>
                  <img
                    src={poem.image}
                    alt={poem.title}
                    className="block w-full"
                    style={{ border: '1px solid rgba(139,123,255,0.25)' }}
                  />
                </figure>
              )}
              <h2
                className="font-display mb-8"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--champagne)',
                }}
              >
                {poem.title}
              </h2>
              <div
                className="font-display inline-block text-left"
                style={{
                  whiteSpace: 'pre-line',
                  color: 'var(--ash)',
                  fontSize: '1.3rem',
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                {poem.content.trim()}
              </div>
              {i < poems.length - 1 && (
                <div
                  className="mx-auto mt-20"
                  style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--lime)', opacity: 0.7 }}
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
