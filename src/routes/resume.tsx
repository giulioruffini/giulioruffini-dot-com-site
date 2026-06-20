import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Curriculum Vitae</p>
          <h1
            className="font-display mb-3"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--paper)', lineHeight: 1 }}
          >
            Giulio{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--champagne)' }}>Ruffini</span>
          </h1>
          <div className="gold-line w-20 mt-6" />
        </div>

        {/* Bio card */}
        <div
          className="border p-8 mb-16"
          style={{ borderColor: 'rgba(212,168,83,0.2)', background: 'rgba(22,28,38,0.5)' }}
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <p className="section-label mb-4">Summary</p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--ash)', fontWeight: 300, lineHeight: '1.85' }}>
                Theoretical physicist and computational neuroscientist working on the
                foundations of cognition and consciousness through algorithmic information
                theory — a program I call Kolmogorov Theory. Scientific Director of the
                Barcelona Computational Foundation, CSTO and co-founder of Neuroelectrics,
                and co-founder and CEO of Starlab. My path runs from quantum gravity, through
                a decade of satellite remote sensing for the European Space Agency, to the
                brain — modeling its dynamics and learning to modulate them.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm" style={{ color: 'var(--smoke)' }}>
                <div><span style={{ color: 'var(--champagne)' }}>Location</span><br />Barcelona, Spain</div>
                <div><span style={{ color: 'var(--champagne)' }}>Languages</span><br />Italian, Spanish, Catalan, English</div>
              </div>
            </div>
            <img
              src="/giulio.jpg"
              alt="Giulio Ruffini"
              className="w-36 h-44 object-cover shrink-0"
              style={{ filter: 'grayscale(20%)', border: '1px solid rgba(212,168,83,0.2)' }}
            />
          </div>
        </div>

        {/* Experience */}
        <section className="mb-16">
          <p className="section-label mb-8">Experience</p>
          <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(138,148,166,0.1)' }}>
            {allJobs.map((job) => (
              <div key={job.jobTitle} className="py-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className="font-display text-2xl font-light mb-1"
                      style={{ color: 'var(--paper)' }}
                    >
                      {job.jobTitle}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--champagne)' }}>
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span
                    className="text-xs tracking-wider uppercase shrink-0 pt-1"
                    style={{ color: 'var(--smoke)', letterSpacing: '0.08em' }}
                  >
                    {job.startDate} — {job.endDate || 'Present'}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ash)', lineHeight: '1.8' }}>
                  {job.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 border"
                      style={{ borderColor: 'rgba(212,168,83,0.2)', color: 'var(--champagne-muted)', letterSpacing: '0.06em' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {job.content && (
                  <div
                    className="mt-4 text-sm"
                    style={{ color: 'var(--ash)' }}
                    dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <p className="section-label mb-8">Education</p>
          <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(138,148,166,0.1)' }}>
            {allEducations.map((education) => (
              <div key={education.school} className="py-10">
                <h3
                  className="font-display text-2xl font-light mb-2"
                  style={{ color: 'var(--paper)' }}
                >
                  {education.school}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--champagne)' }}>
                  {education.summary}
                </p>
                {education.content && (
                  <div
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--ash)' }}
                    dangerouslySetInnerHTML={{ __html: marked(education.content) }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
