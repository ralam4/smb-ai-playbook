import { Link } from 'react-router-dom'
import StepCard from './StepCard'
import Blob from './Blob'
import Doodle from './Doodle'
import industries from '../data/industries'
import useAgentAccess, { setPendingPack } from '../hooks/useAgentAccess'
import { AGENTS_STRIPE_URL, AGENTS_PRICE_DISPLAY, AGENTS_PRICE_SUBLINE } from '../config/agents'

// Pattern of PaywallGate.jsx, but the unlock is pack-level (all 3 blueprints
// in the industry), not per-agent. `agent` supplies the free step-1/step-2
// preview; `children` is the full gated bundle (all steps + system prompt +
// guardrails + test checklist + maintenance), rendered only once the pack
// is unlocked.
export default function AgentPaywallGate({ agent, children }) {
  const { isPackUnlocked } = useAgentAccess()

  if (isPackUnlocked(agent.industry)) return children

  const previewStep = agent.steps[0]
  const blurredStep = agent.steps[1]
  const industry = industries.find((i) => i.slug === agent.industry)
  const industryName = industry ? industry.name : 'Industry'

  function handleCheckout() {
    setPendingPack(agent.industry)
    if (AGENTS_STRIPE_URL) {
      window.location.assign(AGENTS_STRIPE_URL)
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
      <div className="relative mt-6 sm:mt-8 soft-card overflow-hidden p-8 sm:p-12 text-center">
        <Blob variant={2} color="peach" float className="absolute -top-10 -left-10 w-56 h-56 opacity-50 pointer-events-none" />
        <Blob variant={5} color="butter" className="absolute -bottom-14 -right-10 w-48 h-48 opacity-30 pointer-events-none" />

        <div className="relative">
          <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
            <span aria-hidden="true" className="absolute inset-0 -rotate-6">
              <Blob variant={1} color="peach" className="w-full h-full" />
            </span>
            <svg className="relative w-7 h-7 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          <div className="flex items-center justify-center gap-2.5 mb-5">
            <Doodle variant="sparkle" color="butter" className="w-4 h-4" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Agent Pack
            </p>
            <Doodle variant="sparkle" color="butter" className="w-4 h-4" />
          </div>

          <h2 className="font-[--font-display] font-semibold text-3xl sm:text-4xl text-ink mb-4 leading-snug max-w-xl mx-auto">
            Unlock the {industryName} Agent Pack.
          </h2>

          <p className="text-ink-soft leading-relaxed max-w-lg mx-auto mb-8 text-base sm:text-lg">
            One payment unlocks <strong className="text-ink font-semibold">all 3 blueprints</strong> in this
            pack — build steps, the complete system prompt, guardrails, a test checklist, and the
            maintenance routine — for{' '}
            <strong className="text-ink font-semibold">{AGENTS_PRICE_DISPLAY}</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            {AGENTS_STRIPE_URL ? (
              <button
                type="button"
                onClick={handleCheckout}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                Unlock for {AGENTS_PRICE_DISPLAY}
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            ) : (
              <span className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold bg-border text-ink-soft cursor-not-allowed">
                Agent Pack unlocks coming soon
              </span>
            )}
            <Link
              to={`/agents/${agent.industry}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 border-border-strong text-ink hover:border-accent hover:text-accent transition-colors cursor-pointer no-underline"
            >
              See the whole pack
            </Link>
          </div>

          <p className="text-xs text-ink-soft/80 max-w-md mx-auto leading-relaxed">
            {AGENTS_PRICE_SUBLINE}. Secure checkout via Stripe.
          </p>
        </div>
      </div>
    </div>
  )
}
