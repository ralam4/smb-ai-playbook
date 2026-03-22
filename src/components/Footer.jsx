import { useState } from 'react'

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
        <div className="text-center mb-8">
          <h3 className="font-display text-lg text-text-primary mb-1">
            Stay in the loop
          </h3>
          <p className="text-sm text-text-secondary max-w-md mx-auto">
            New guides, templates & AI tips for small business — straight to your inbox. No spam, unsubscribe anytime.
          </p>

          {showForm ? (
            <form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
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
                className="w-full sm:flex-1 px-4 py-2.5 rounded-lg border border-border bg-surface text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Joining...' : 'Join'}
              </button>
            </form>
          ) : (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-tag-green font-medium">
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

        {/* Existing footer content */}
        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-text-secondary">
            AI Playbook for Small Business <span className="text-border mx-1.5">|</span> Free forever
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-secondary">Built by</span>
            <a
              href="https://www.linkedin.com/in/rafeeulalam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-text-primary hover:text-accent transition-colors inline-flex items-center gap-1.5 no-underline"
            >
              Rafee Alam
              <svg className="w-4 h-4 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
