import { marked } from 'marked'
import { allPages } from 'content-collections'

export function ReferencePage({ slug }: { slug: string }) {
  const page = allPages.find((p) => p._meta.path === slug)

  if (!page) {
    return (
      <div className="min-h-screen pt-32 px-8 text-center" style={{ color: 'var(--paper)' }}>
        <p className="font-display text-3xl font-light">Page not found</p>
      </div>
    )
  }

  const html = marked(page.content) as string

  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-3xl mx-auto">
        {page.label && <p className="section-label mb-4">{page.label}</p>}
        <h1
          className="font-display mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: 'var(--paper)', lineHeight: 1 }}
        >
          {page.title}
        </h1>
        <div className="gold-line w-20 mb-6" />
        {page.subtitle && (
          <p
            className="text-lg leading-relaxed mb-12"
            style={{ color: 'var(--ash)', fontWeight: 300, maxWidth: '42rem' }}
          >
            {page.subtitle}
          </p>
        )}
        <div
          className="prose-article"
          style={{ color: 'var(--ash)', lineHeight: '1.8', fontSize: '1.0625rem' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {page.image && (
          <figure className="mt-16">
            <div
              className="relative overflow-hidden"
              style={{ isolation: 'isolate', border: '1px solid rgba(139,123,255,0.25)' }}
            >
              <img
                src={page.image}
                alt={page.imageCaption || page.title}
                className="block w-full"
                style={{ filter: 'grayscale(1) invert(1) contrast(1.05)' }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, var(--champagne) 0%, var(--lime) 100%)',
                  mixBlendMode: 'color',
                  opacity: 0.8,
                }}
              />
            </div>
            {page.imageCaption && (
              <figcaption className="mt-4 text-sm italic" style={{ color: 'var(--smoke)', lineHeight: 1.7 }}>
                {page.imageCaption}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </div>
  )
}
