import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { ArrowRight, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const recentPosts = [...allBlogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-8 overflow-hidden">
        {/* Background decorative lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/4 right-0 w-px h-64 opacity-20"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--champagne), transparent)' }}
          />
          <div
            className="absolute bottom-1/3 left-16 w-px h-48 opacity-10"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--ash), transparent)' }}
          />
          <div
            className="absolute top-1/3 left-0 w-64 h-px opacity-15"
            style={{ background: 'linear-gradient(to right, transparent, var(--champagne), transparent)' }}
          />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text block */}
            <div className="lg:col-span-7">
              <p
                className="section-label mb-8 animate-fade-in"
                style={{ animationDelay: '0.1s' }}
              >
                Physicist · Computational Neuroscientist · Founder
              </p>

              <h1
                className="font-display animate-fade-up"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
                  lineHeight: '0.95',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: 'var(--paper)',
                  animationDelay: '0.2s',
                }}
              >
                Giulio
                <br />
                <span style={{ color: 'var(--champagne)', fontStyle: 'italic' }}>Ruffini</span>
              </h1>

              <div
                className="mt-8 animate-fade-up"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="gold-line w-24 mb-8" />
                <p
                  className="text-lg leading-relaxed max-w-xl"
                  style={{ color: 'var(--ash)', fontWeight: 300 }}
                >
                  Theoretical physicist and computational neuroscientist studying cognition and
                  consciousness through algorithmic information theory —{' '}
                  <span style={{ color: 'var(--champagne-light)' }}>Kolmogorov Theory</span>.
                  Scientific Director of{' '}
                  <span style={{ color: 'var(--champagne-light)' }}>BCOM</span>, co-founder of{' '}
                  <span style={{ color: 'var(--champagne-light)' }}>Neuroelectrics</span> and{' '}
                  <span style={{ color: 'var(--champagne-light)' }}>Starlab</span>.
                </p>
              </div>

              <div
                className="flex flex-wrap gap-4 mt-10 animate-fade-up"
                style={{ animationDelay: '0.55s' }}
              >
                <Link
                  to="/kt"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wider uppercase transition-all duration-300"
                  style={{
                    background: 'var(--champagne)',
                    color: 'var(--ink)',
                    letterSpacing: '0.1em',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--champagne-light)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--champagne)' }}
                >
                  Kolmogorov Theory <ArrowRight size={14} />
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wider uppercase border transition-all duration-300"
                  style={{
                    borderColor: 'rgba(138,148,166,0.4)',
                    color: 'var(--ash)',
                    letterSpacing: '0.1em',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--champagne)'
                    e.currentTarget.style.color = 'var(--champagne)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(138,148,166,0.4)'
                    e.currentTarget.style.color = 'var(--ash)'
                  }}
                >
                  Resume
                </Link>
              </div>
            </div>

            {/* Stats / Side block */}
            <div
              className="lg:col-span-5 animate-fade-in"
              style={{ animationDelay: '0.7s' }}
            >
              <div
                className="border p-8 space-y-8"
                style={{ borderColor: 'rgba(212,168,83,0.2)', background: 'rgba(30,38,53,0.5)' }}
              >
                <StatBlock number="12,500+" label="Citations · Google Scholar" />
                <div className="h-px" style={{ background: 'rgba(138,148,166,0.15)' }} />
                <StatBlock number="54" label="h-index" />
                <div className="h-px" style={{ background: 'rgba(138,148,166,0.15)' }} />
                <StatBlock number="3" label="Research Ventures Co-founded" />
                <div className="h-px" style={{ background: 'rgba(138,148,166,0.15)' }} />
                <StatBlock number="1995" label="PhD, Physics · UC Davis" />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
            style={{ animationDelay: '1.2s' }}
          >
            <span className="section-label text-xs" style={{ color: 'var(--smoke)' }}>Scroll</span>
            <div
              className="w-px h-12"
              style={{ background: 'linear-gradient(to bottom, var(--smoke), transparent)' }}
            />
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="px-8 py-24 border-t" style={{ borderColor: 'rgba(138,148,166,0.1)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="section-label mb-4">About</p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--paper)' }}
            >
              Science meets<br />
              <span style={{ fontStyle: 'italic', color: 'var(--champagne)' }}>engineering</span>
            </h2>
          </div>
          <div className="lg:col-span-8 lg:pt-12">
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--ash)', fontWeight: 300 }}>
              My PhD was in theoretical physics — the quantization of constrained systems, a toy
              model for quantum gravity. After a decade working on satellite remote sensing and
              GNSS reflectometry for the European Space Agency, I turned to the hardest object I
              could find: the brain.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--ash)', fontWeight: 300 }}>
              That arc — from physics, through engineering, to neuroscience — converges on one idea:
              minds are algorithmic agents that survive by compressing their world. Kolmogorov Theory
              develops this rigorously; neurotwins and brain stimulation put it to work in the clinic.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Kolmogorov Theory', 'Algorithmic Information Theory', 'Consciousness', 'Brain Modeling', 'Neuromodulation', 'EEG / tES'].map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 border tracking-wider uppercase"
                  style={{ borderColor: 'rgba(212,168,83,0.25)', color: 'var(--champagne)', letterSpacing: '0.08em' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent writing */}
      {recentPosts.length > 0 && (
        <section className="px-8 py-24 border-t" style={{ borderColor: 'rgba(138,148,166,0.1)', background: 'rgba(22,28,38,0.4)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="section-label mb-3">Writing</p>
                <h2
                  className="font-display"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--paper)' }}
                >
                  Recent thoughts
                </h2>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm nav-link"
                style={{ color: 'var(--champagne)' }}
              >
                All posts <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(138,148,166,0.1)' }}>
              {recentPosts.map((post, i) => {
                const isExternal = Boolean(post.externalUrl)
                const inner = (
                  <>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span
                        className="font-display text-4xl font-light opacity-20 group-hover:opacity-40 transition-opacity"
                        style={{ color: 'var(--champagne)' }}
                      >
                        0{i + 1}
                      </span>
                      <time className="text-xs tracking-wider uppercase" style={{ color: 'var(--smoke)', letterSpacing: '0.08em' }}>
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    </div>
                    <h3
                      className="font-display text-2xl font-light group-hover:text-gold-light transition-colors"
                      style={{ color: 'var(--paper)' }}
                    >
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm" style={{ color: 'var(--smoke)' }}>{post.summary}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mt-8 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: 'var(--champagne)' }}
                  />
                  </>
                )
                const className =
                  'group flex items-start justify-between py-7 gap-8 transition-all duration-300'
                return isExternal ? (
                  <a
                    key={post._meta.path}
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    style={{ borderColor: 'rgba(138,148,166,0.1)' }}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link
                    key={post._meta.path}
                    to="/blog/$slug"
                    params={{ slug: post._meta.path }}
                    className={className}
                    style={{ borderColor: 'rgba(138,148,166,0.1)' }}
                  >
                    {inner}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="section-label mb-6">Get in touch</p>
          <h2
            className="font-display mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--paper)', lineHeight: 1 }}
          >
            Let's collaborate
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--ash)', fontWeight: 300 }}>
            Whether it's a research question, a project proposal, or a speaking invitation —
            I'm always glad to hear from curious minds.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase border transition-all duration-300"
            style={{
              borderColor: 'var(--champagne)',
              color: 'var(--champagne)',
              letterSpacing: '0.12em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--champagne)'
              e.currentTarget.style.color = 'var(--ink)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--champagne)'
            }}
          >
            Send a message <ExternalLink size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}

function StatBlock({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p
        className="font-display"
        style={{ fontSize: '2.2rem', fontWeight: 300, color: 'var(--champagne)', lineHeight: 1 }}
      >
        {number}
      </p>
      <p className="mt-1 text-sm tracking-wider" style={{ color: 'var(--smoke)', letterSpacing: '0.06em' }}>
        {label}
      </p>
    </div>
  )
}
