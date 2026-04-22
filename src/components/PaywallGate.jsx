import { Link } from 'react-router-dom'
import StepCard from './StepCard'
import useProAccess from '../hooks/useProAccess'
import { PRO_STRIPE_URL, PRO_PRICE_DISPLAY, PRO_PRICE_SUBLINE } from '../config/pro'

export default function PaywallGate({ guide, children }) {
  const { isUnlocked, setPendingUnlock } = useProAccess()

  if (guide.tier !== 'pro') return children
  if (isUnlocked(guide.slug)) return children

  const previewStep = guide.steps[0]
  const blurredStep = guide.steps[1]

  function handleCheckout() {
    setPendingUnlock(guide.slug)
    // Allow the browser a tick to persist localStorage before navigating away
    if (PRO_STRIPE_URL) {
      window.location.href = PRO_STRIPE_URL
    }
  }

  return (
    <div>
      {/* Full preview step */}
      {previewStep && (
        <div>
          <StepCard step={previewStep} isLast={false} />
        </div>
      )}

      {/* Blurred teaser of step 2 */}
      {blurredStep && (
        <div className="relative">
          <div className="pointer-events-none select-none [filter:blur(4px)] [mask-image:linear-gradient(to_bottom,black_0%,black_30%,transparent_90%)]">
            <StepCard step={blurredStep} isLast={true} />
          </div>
        </div>
      )}

      {/* Paywall overlay card */}
      <div className="mt-6 sm:mt-8 glass glass-shadow-lg rounded-2xl p-8 sm:p-12 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
          <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <div className="flex items-center justify-center gap-2 mb-5">
          <div className="h-px w-8 bg-accent" />
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            Pro guide
          </p>
          <div className="h-px w-8 bg-accent" />
        </div>

        <h2 className="font-[--font-display] text-3xl sm:text-4xl text-text-primary mb-4 leading-snug max-w-xl mx-auto">
          Unlock the full playbook.
        </h2>

        <p className="text-text-secondary leading-relaxed max-w-lg mx-auto mb-8 text-base sm:text-lg">
          This guide has <strong className="text-text-primary font-semibold">{guide.steps.length} steps</strong>
          {' '}— prompts, frameworks, and templates built for your industry. Unlock for{' '}
          <strong className="text-text-primary font-semibold">{PRO_PRICE_DISPLAY}</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          {PRO_STRIPE_URL ? (
            <button
              type="button"
              onClick={handleCheckout}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              Unlock for {PRO_PRICE_DISPLAY}
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          ) : (
            <span className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-semibold bg-border text-text-secondary cursor-not-allowed">
              Pro unlocks coming soon
            </span>
          )}
          <Link
            to="/pro"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border-2 border-border-strong text-text-primary hover:border-accent hover:text-accent transition-colors cursor-pointer no-underline"
          >
            How Pro works
          </Link>
        </div>

        <p className="text-xs text-text-secondary/70 max-w-md mx-auto leading-relaxed">
          {PRO_PRICE_SUBLINE}. Secure checkout via Stripe.
        </p>
      </div>
    </div>
  )
}
