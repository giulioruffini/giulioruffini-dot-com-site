import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { Calendar, ArrowRight, ArrowUpRight } from 'lucide-react'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  const posts = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-4">Writing</p>
        <h1
          className="font-display mb-3"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--paper)', lineHeight: 1 }}
        >
          Notes &{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--champagne)' }}>essays</span>
        </h1>
        <div className="gold-line w-20 mb-16" />

        <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(138,148,166,0.1)' }}>
          {posts.map((post, i) => {
            const isExternal = Boolean(post.externalUrl)
            const inner = (
              <>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className="font-display text-5xl font-light opacity-15 group-hover:opacity-30 transition-opacity"
                    style={{ color: 'var(--champagne)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-2" style={{ color: 'var(--smoke)' }}>
                    <Calendar size={12} />
                    <time className="text-xs tracking-wider uppercase" style={{ letterSpacing: '0.08em' }}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </div>

                <h2
                  className="font-display text-2xl font-light mb-2 transition-colors duration-200 group-hover:text-gold"
                  style={{ color: 'var(--paper)' }}
                >
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--smoke)' }}>
                  {post.summary}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 border"
                      style={{ borderColor: 'rgba(139,123,255,0.15)', color: 'var(--champagne-muted)', letterSpacing: '0.06em' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {isExternal ? (
                <ArrowUpRight
                  size={18}
                  className="mt-10 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: 'var(--champagne)' }}
                />
              ) : (
                <ArrowRight
                  size={18}
                  className="mt-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: 'var(--champagne)' }}
                />
              )}
              </>
            )
            const className =
              'group flex items-start justify-between py-8 gap-8 transition-all duration-300'
            return isExternal ? (
              <a
                key={post._meta.path}
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link
                key={post._meta.path}
                to="/blog/$slug"
                params={{ slug: post._meta.path }}
                className={className}
              >
                {inner}
              </Link>
            )
          })}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-24" style={{ color: 'var(--smoke)' }}>
            <p className="font-display text-2xl font-light mb-3" style={{ color: 'var(--paper)' }}>No posts yet</p>
            <p className="text-sm">Writing is coming soon.</p>
          </div>
        )}
      </div>
    </div>
  )
}
