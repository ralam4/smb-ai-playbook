import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error | duplicate
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const trimmed = email.trim().toLowerCase()

    // Client-side validation
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })

      const data = await res.json()

      if (res.status === 201) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else if (res.status === 200) {
        setStatus('duplicate')
        setMessage(data.message)
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setMessage('Connection error. Please try again.')
    }
  }

  const showForm = status !== 'success'

  return (
    <footer className="border-t border-border mt-20 bg-surface-warm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Newsletter signup */}
        <div className="glass glass-shadow-lg rounded-2xl p-8 sm:p-10 text-center mb-8">
          <h3 className="font-[--font-display] text-xl sm:text-2xl text-text-primary mb-2">
            Stay in the loop
          </h3>
          <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
            New guides, templates & AI tips for small business — straight to your inbox. No spam, unsubscribe anytime.
          </p>

          {showForm ? (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto"
              noValidate
            >
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error' || status === 'duplicate') setStatus('idle')
                }}
                disabled={status === 'loading'}
                className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Joining...' : 'Join'}
              </button>
            </form>
          ) : (
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-tag-green font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {message}
            </div>
          )}

          {(status === 'error' || status === 'duplicate') && (
            <p className={`mt-2 text-xs ${status === 'error' ? 'text-red-600' : 'text-text-secondary'}`}>
              {message}
            </p>
          )}
        </div>

        {/* Sitemap columns */}
        <div className="border-t border-border/50 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-primary mb-4">
              Playbook
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/guides" className="text-sm text-text-secondary hover:text-accent transition-colors no-underline">
                  Free Guides
                </Link>
              </li>
              <li>
                <Link to="/pro" className="text-sm text-text-secondary hover:text-accent transition-colors no-underline">
                  Pro Libraries
                </Link>
              </li>
              <li>
                <Link to="/archetype" className="text-sm text-text-secondary hover:text-accent transition-colors no-underline">
                  Archetype Quiz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-primary mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-sm text-text-secondary hover:text-accent transition-colors no-underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-text-secondary hover:text-accent transition-colors no-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-primary mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/terms" className="text-sm text-text-secondary hover:text-accent transition-colors no-underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-text-secondary hover:text-accent transition-colors no-underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/refunds" className="text-sm text-text-secondary hover:text-accent transition-colors no-underline">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-primary mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.linkedin.com/in/rafeeulalam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-accent transition-colors no-underline inline-flex items-center gap-1.5"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:ralam70@gmail.com"
                  className="text-sm text-text-secondary hover:text-accent transition-colors no-underline"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} SMB AI Playbook. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary">
            Built by{' '}
            <a
              href="https://www.linkedin.com/in/rafeeulalam"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-text-primary hover:text-accent transition-colors no-underline"
            >
              Rafee Alam
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
