import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ExternalLink, Github } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">Work</p>
        <h1
          className="font-display mb-3"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--paper)', lineHeight: 1 }}
        >
          Projects &{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--champagne)' }}>research</span>
        </h1>
        <div className="gold-line w-20 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((project, i) => (
            <div
              key={project._meta.path}
              className="card-lift border p-8 flex flex-col"
              style={{
                borderColor: 'rgba(138,148,166,0.15)',
                background: 'rgba(22,19,52,0.6)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="font-display text-5xl font-light opacity-20"
                  style={{ color: 'var(--champagne)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                      style={{ color: 'var(--smoke)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--champagne)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--smoke)' }}
                    >
                      <Github size={17} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                      style={{ color: 'var(--smoke)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--champagne)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--smoke)' }}
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              <h3
                className="font-display text-2xl font-light mb-3"
                style={{ color: 'var(--paper)' }}
              >
                {project.title}
              </h3>

              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: 'var(--ash)', lineHeight: '1.75' }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 border"
                    style={{ borderColor: 'rgba(139,123,255,0.2)', color: 'var(--champagne-muted)', letterSpacing: '0.06em' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {allProjects.length === 0 && (
          <div className="text-center py-24" style={{ color: 'var(--smoke)' }}>
            <p className="font-display text-2xl font-light mb-3" style={{ color: 'var(--paper)' }}>Projects coming soon</p>
          </div>
        )}
      </div>
    </div>
  )
}
