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

        <ExternalWriting />
      </div>
    </div>
  )
}

const elsewhere = [
  {
    source: 'BCOM Foundation',
    url: 'https://bcomone.atlassian.net/wiki/spaces/BCOMPUBLIC/blog',
    items: [
      { title: 'Exploring Agency and Experience in Input–Output Functions: Axioms and Implications for LLMs', date: 'Apr 2026', url: 'https://bcomone.atlassian.net/wiki/spaces/BCOMPUBLIC/blog/2026/04/01/144867329' },
      { title: 'Understanding Large Language Models: Context Processing and Workflow Implications', date: 'Mar 2026', url: 'https://bcomone.atlassian.net/wiki/spaces/BCOMPUBLIC/blog/2026/03/28/142639105' },
      { title: 'The Era of the Master Agent: Why Polymaths Will Inherit the AI Future', date: 'Mar 2026', url: 'https://bcomone.atlassian.net/wiki/spaces/BCOMPUBLIC/blog/2026/03/06/131039234' },
      { title: 'The Multiplicative “Cheat Code”: Dynamic Weights in Transformers and Brain Function', date: 'Mar 2026', url: 'https://bcomone.atlassian.net/wiki/spaces/BCOMPUBLIC/blog/2026/03/03/128548865' },
      { title: 'Telehomeostasis and Apoptosis in Agents', date: 'Mar 2026', url: 'https://bcomone.atlassian.net/wiki/spaces/BCOMPUBLIC/blog/2026/03/01/126943242' },
    ],
  },
  {
    source: 'Neuroelectrics',
    url: 'https://www.neuroelectrics.com/blog',
    items: [
      { title: 'The Multiplicative “Cheat Code”: How Dynamic Weights Power Transformers and the Brain', date: 'Mar 2026', url: 'https://www.neuroelectrics.com/blog/the-multiplicative-cheat-code-how-dynamic-weights-power-transformers-and-the-brain' },
      { title: 'The Rosetta Stone of Neural Models: A Shared Language for Brain Dynamics', date: 'Dec 2025', url: 'https://www.neuroelectrics.com/blog/the-rosetta-stone-of-neural-models-a-shared-language-for-brain-dynamics' },
      { title: 'Modeling Alzheimer’s in the Brain: How Neural Mass Models Reproduce EEG Biomarkers', date: 'Oct 2025', url: 'https://www.neuroelectrics.com/blog/modeling-alzheimer-s-in-the-brain-how-neural-mass-models-reproduce-eeg-biomarkers' },
      { title: 'Decoding Prediction Errors in the Brain: A Laminar Neural Mass Model Approach', date: 'Sep 2025', url: 'https://www.neuroelectrics.com/blog/decoding-prediction-errors-in-the-brain-a-laminar-neural-mass-model-approach' },
    ],
  },
  {
    source: 'Math Corner',
    url: 'https://giulioruffini.github.io/assets/collab/mathematics/',
    items: [
      { title: 'From Groups to Modules — a tour of five algebraic structures', date: '', url: 'https://giulioruffini.github.io/assets/collab/mathematics/algebraic_structures.html' },
      { title: 'The Galton–Watson Branching Process', date: '', url: 'https://giulioruffini.github.io/assets/collab/mathematics/galton_watson.html' },
    ],
  },
]

function ExternalWriting() {
  return (
    <section className="mt-28">
      <p className="section-label mb-4">Elsewhere</p>
      <h2
        className="font-display mb-3"
        style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 300, color: 'var(--paper)' }}
      >
        More writing
      </h2>
      <div className="gold-line w-20 mb-12" />

      <div className="space-y-12">
        {elsewhere.map(group => (
          <div key={group.source}>
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="text-sm tracking-widest uppercase" style={{ color: 'var(--champagne)', letterSpacing: '0.12em' }}>
                {group.source}
              </h3>
              <a
                href={group.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-xs"
                style={{ color: 'var(--smoke)' }}
              >
                View all
              </a>
            </div>
            <div className="divide-y" style={{ borderColor: 'rgba(148,140,186,0.12)' }}>
              {group.items.map(item => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-3.5 transition-colors"
                >
                  <span
                    className="text-base leading-snug transition-colors group-hover:text-gold-light"
                    style={{ color: 'var(--ash)' }}
                  >
                    {item.title}
                  </span>
                  {item.date && (
                    <time className="shrink-0 text-xs tracking-wider uppercase" style={{ color: 'var(--smoke)', letterSpacing: '0.06em' }}>
                      {item.date}
                    </time>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-2">
          <p className="text-sm" style={{ color: 'var(--smoke)' }}>
            More essays at{' '}
            <a
              href="https://platoniapirate.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{ color: 'var(--champagne)' }}
            >
              Platonia Pirate
            </a>{' '}
            on Substack.
          </p>
        </div>
      </div>
    </section>
  )
}
