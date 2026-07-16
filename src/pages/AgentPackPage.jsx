import { useParams, Link } from 'react-router-dom'
import industries from '../data/industries'
import { packs, agentsForIndustry } from '../data/agents/index'
import AgentCard from '../components/AgentCard'
import Blob from '../components/Blob'
import Doodle from '../components/Doodle'
import useAgentAccess, { setPendingPack } from '../hooks/useAgentAccess'
import { AGENTS_STRIPE_URL, AGENTS_PRICE_DISPLAY, AGENTS_PRICE_SUBLINE } from '../config/agents'

// Cycle of doodle variants for the "why agents" list so each bullet feels hand-placed.
const WHY_DOODLES = ['sparkle', 'star', 'asterisk', 'loop']

export default function AgentPackPage() {
  const { industry: industrySlug } = useParams()
  const { isPackUnlocked } = useAgentAccess()
  const industry = industries.find((i) => i.slug === industrySlug)
  const pack = industry ? packs.find((p) => p.industry === industry.slug) : null
  const packAgents = industry ? agentsForIndustry(industry.slug) : []

  if (!industry) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="font-[--font-display] text-3xl mb-4">Industry not found</h1>
        <Link to="/agents" className="text-accent hover:underline">
          &larr; Back to Agent Packs
        </Link>
      </div>
    )
  }

  if (!pack || packAgents.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="font-[--font-display] text-3xl mb-4">
          The {industry.name} pack isn&rsquo;t ready yet
        </h1>
        <p className="text-ink-soft max-w-md mx-auto mb-6">
          We&rsquo;re still writing these blueprints. Check back soon, or explore what&rsquo;s already live.
        </p>
        <Link to="/agents" className="text-accent hover:underline">
          &larr; Back to Agent Packs
        </Link>
      </div>
    )
  }

  const unlocked = isPackUnlocked(industry.slug)

  function handleCheckout() {
    setPendingPack(industry.slug)
    if (AGENTS_STRIPE_URL) {
      window.location.assign(AGENTS_STRIPE_URL)
    }
  }

  return (
    <>
      {/* ── Hero ── per-industry color wash */}
      <section className="relative overflow-hidden grain">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${industry.color}14 0%, transparent 55%)` }}
        />
        <Blob variant={1} color="peach" float className="absolute -top-16 -right-20 w-80 h-80 opacity-50 pointer-events-none" />
        <Blob variant={4} color="mint" className="absolute bottom-0 -left-16 w-64 h-64 opacity-35 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-20">
          {/* Breadcrumb */}
          <Link
            to="/agents"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-accent transition-colors no-underline mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Agent Packs
          </Link>

          <div className="flex items-center gap-2.5 mb-6">
            <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
            <span
              className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full text-ink"
              style={{ backgroundColor: `${industry.color}1F` }}
            >
              {industry.name}
            </span>
            {unlocked && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-mint-light text-ink">
                Unlocked
              </span>
            )}
          </div>

          <h1 className="font-[--font-display] font-semibold text-[2.5rem] sm:text-5xl md:text-6xl text-ink leading-[1.05] max-w-3xl mb-6">
            {pack.headline}
          </h1>

          <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl mb-6">
            {pack.subhead}
          </p>

          <p className="text-sm font-semibold text-accent">
            3 blueprints &middot; {AGENTS_PRICE_DISPLAY} once &middot; yours forever on this browser
          </p>
        </div>
      </section>

      {/* ── Why owners are building agents ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="soft-card p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-5">
            Why {industry.name.toLowerCase()} owners are building agents
          </p>
          <ul className="space-y-4">
            {pack.whyAgents.map((point, i) => (
              <li key={point} className="flex items-start gap-2.5 text-[15px] text-ink leading-[1.7]">
                <Doodle
                  variant={WHY_DOODLES[i % WHY_DOODLES.length]}
                  color="accent"
                  className="w-4 h-4 flex-shrink-0 mt-1"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── The 3 blueprints ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <Doodle variant="squiggle-underline" color="accent" className="w-8 h-3" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              The blueprints
            </p>
          </div>
          <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1]">
            3 agents for {industry.name.toLowerCase()} operators.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {packAgents.map((agent, i) => (
            <AgentCard key={agent.slug} agent={agent} unlocked={unlocked} colorIndex={i} />
          ))}
        </div>

        {/* ── Price CTA or unlocked confirmation ── */}
        {unlocked ? (
          <div className="soft-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="relative inline-flex items-center justify-center w-11 h-11 flex-shrink-0">
                <Blob variant={4} color="mint" className="absolute inset-0 w-full h-full" />
                <svg className="relative w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <p className="text-[15px] text-ink leading-relaxed">
                <strong className="font-semibold">This pack is unlocked.</strong> All 3 blueprints — steps,
                system prompts, guardrails — are yours on this browser.
              </p>
            </div>
          </div>
        ) : (
          <div className="relative soft-card overflow-hidden p-8 sm:p-10 text-center">
            <Blob variant={2} color="butter" className="absolute -top-10 -right-10 w-48 h-48 opacity-40 pointer-events-none" />
            <div className="relative">
              <h3 className="font-[--font-display] font-semibold text-2xl sm:text-3xl text-ink mb-3 leading-snug">
                Unlock all 3 blueprints for {AGENTS_PRICE_DISPLAY}
              </h3>
              <p className="text-ink-soft leading-relaxed max-w-lg mx-auto mb-6 text-[15px] sm:text-base">
                One payment, one pack. {AGENTS_PRICE_SUBLINE}.
              </p>
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
            </div>
          </div>
        )}
      </section>
    </>
  )
}
