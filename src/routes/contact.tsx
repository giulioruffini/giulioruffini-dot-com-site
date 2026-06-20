import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 px-8">
        <div className="text-center max-w-md mx-auto">
          <CheckCircle size={40} style={{ color: 'var(--champagne)', margin: '0 auto 24px' }} />
          <h2 className="font-display text-4xl font-light mb-4" style={{ color: 'var(--paper)' }}>
            Almost there
          </h2>
          <p className="mb-8" style={{ color: 'var(--ash)' }}>
            Your email app should have opened with the message ready to send. If it
            didn't, write to me directly at{' '}
            <a href="mailto:giulio@starlab.es" style={{ color: 'var(--champagne)' }}>
              giulio@starlab.es
            </a>
            .
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-sm tracking-wider uppercase transition-colors"
            style={{ color: 'var(--champagne)', letterSpacing: '0.1em' }}
          >
            Back to the form
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-2xl mx-auto">
        <p className="section-label mb-4">Get in touch</p>
        <h1
          className="font-display mb-3"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--paper)', lineHeight: 1 }}
        >
          Let's{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--champagne)' }}>talk</span>
        </h1>
        <div className="gold-line w-16 mb-6" />

        <p className="text-base mb-12 leading-relaxed" style={{ color: 'var(--ash)', fontWeight: 300 }}>
          Whether you have a research question, a collaboration proposal, or a speaking invitation —
          I'm always glad to hear from curious minds. Fill in the form below or reach me directly
          at{' '}
          <a
            href="mailto:giulio@starlab.es"
            style={{ color: 'var(--champagne)' }}
          >
            giulio@starlab.es
          </a>
          .
        </p>

        <form
          name="contact"
          onSubmit={(e) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget)
            const name = String(data.get('name') || '')
            const email = String(data.get('email') || '')
            const message = String(data.get('message') || '')
            const subject = encodeURIComponent(`Website message from ${name}`)
            const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`)
            window.location.href = `mailto:giulio@starlab.es?subject=${subject}&body=${body}`
            setSubmitted(true)
          }}
          className="space-y-8"
        >
          <FormField id="name" label="Name" type="text" placeholder="Your full name" />
          <FormField id="email" label="Email" type="email" placeholder="your@email.com" />

          <div>
            <label
              htmlFor="message"
              className="block text-xs tracking-widest uppercase mb-3"
              style={{ color: 'var(--champagne)', letterSpacing: '0.12em' }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={7}
              className="w-full px-5 py-4 text-sm outline-none resize-none transition-all duration-200"
              style={{
                background: 'rgba(22,19,52,0.6)',
                border: '1px solid rgba(138,148,166,0.2)',
                color: 'var(--paper)',
              }}
              placeholder="Tell me what's on your mind..."
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(139,123,255,0.5)' }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(138,148,166,0.2)' }}
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-wider uppercase transition-all duration-300"
            style={{
              background: 'var(--champagne)',
              color: 'var(--ink)',
              letterSpacing: '0.1em',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--champagne-light)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--champagne)' }}
          >
            <Send size={14} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

function FormField({ id, label, type, placeholder }: { id: string; label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs tracking-widest uppercase mb-3"
        style={{ color: 'var(--champagne)', letterSpacing: '0.12em' }}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        className="w-full px-5 py-4 text-sm outline-none transition-all duration-200"
        style={{
          background: 'rgba(22,19,52,0.6)',
          border: '1px solid rgba(138,148,166,0.2)',
          color: 'var(--paper)',
        }}
        placeholder={placeholder}
        onFocus={e => { e.currentTarget.style.borderColor = 'rgba(139,123,255,0.5)' }}
        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(138,148,166,0.2)' }}
      />
    </div>
  )
}
