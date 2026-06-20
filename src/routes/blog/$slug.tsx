import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'
import { ArrowLeft, Calendar } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-display text-4xl font-light mb-6" style={{ color: 'var(--paper)' }}>
            Post not found
          </h1>
          <Link to="/blog" className="nav-link" style={{ color: 'var(--champagne)' }}>
            Back to writing
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div className="min-h-screen pt-28 pb-24 px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mb-12 text-sm tracking-wider uppercase transition-colors"
          style={{ color: 'var(--smoke)', letterSpacing: '0.08em' }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--champagne)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--smoke)' }}
        >
          <ArrowLeft size={14} />
          Writing
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Calendar size={13} style={{ color: 'var(--smoke)' }} />
              <time className="text-xs tracking-widest uppercase" style={{ color: 'var(--smoke)', letterSpacing: '0.1em' }}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span style={{ color: 'var(--smoke)' }}>·</span>
              <span className="text-xs tracking-wider uppercase" style={{ color: 'var(--smoke)', letterSpacing: '0.08em' }}>{post.author}</span>
            </div>

            <h1
              className="font-display mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: 'var(--paper)',
              }}
            >
              {post.title}
            </h1>

            <div className="gold-line w-16 mb-6" />

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 border tracking-wider uppercase"
                  style={{ borderColor: 'rgba(212,168,83,0.25)', color: 'var(--champagne)', letterSpacing: '0.08em' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div
            className="prose-article"
            style={{
              color: 'var(--ash)',
              lineHeight: '1.85',
              fontSize: '1.0625rem',
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </div>
  )
}
