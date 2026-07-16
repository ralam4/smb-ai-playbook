import { useParams, Link } from 'react-router-dom'
import industries from '../data/industries'
import { agents, agentsForIndustry } from '../data/agents/index'
import StepCard from '../components/StepCard'
import PromptBlock from '../components/PromptBlock'
import AgentCard, { AgentLogo } from '../components/AgentCard'
import AgentPaywallGate from '../components/AgentPaywallGate'
import AgentPdfDownloadButton from '../components/AgentPdfDownloadButton'
import Doodle from '../components/Doodle'
import useAgentAccess from '../hooks/useAgentAccess'
import useSEO, { truncate } from '../hooks/useSEO'

export default function AgentPage() {
  const { industry: industrySlug, slug } = useParams()
  const { isPackUnlocked } = useAgentAccess()
  const agent = agents.find((a) => a.slug === slug && a.industry === industrySlug)
  const seoIndustry = agent ? industries.find((i) => i.slug === agent.industry) : null

  useSEO({
    title: agent
      ? `${agent.name} — AI Agent Blueprint for ${seoIndustry ? seoIndustry.name : agent.industry}`
      : 'Agent Not Found — SMB AI Playbook',
    description: agent
      ? truncate(agent.description, 155)
      : 'This agent blueprint could not be found. Browse all Agent Packs for small business owners.',
    canonical: agent ? `/agents/${agent.industry}/${agent.slug}` : '/agents',
  })

  if (!agent) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="font-[--font-display] text-3xl mb-4">Agent not found</h1>
        <Link to="/agents" className="text-accent hover:underline">
          &larr; Back to Agent Packs
        </Link>
      </div>
    )
  }

  const industry = industries.find((i) => i.slug === agent.industry)
  const unlocked = isPackUnlocked(agent.industry)
  const relatedAgents = agentsForIndustry(agent.industry).filter((a) => a.slug !== agent.slug)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-8 sm:pb-12">
      {/* Breadcrumb */}
      <nav className="animate-fade-up flex items-center gap-2 text-sm text-ink-soft mb-8 sm:mb-10 flex-wrap">
        <Link to="/agents" className="hover:text-accent transition-colors no-underline">
          Agents
        </Link>
        <span aria-hidden="true">/</span>
        {industry ? (
          <Link to={`/agents/${industry.slug}`} className="hover:text-accent transition-colors no-underline">
            {industry.name}
          </Link>
        ) : (
          <span>{agent.industry}</span>
        )}
        <span aria-hidden="true">/</span>
        <span className="text-ink font-medium">{agent.name}</span>
      </nav>

      {/* Header */}
      <header className="animate-fade-up delay-1 mb-10 sm:mb-12">
        <div className="flex items-center gap-4 mb-6">
          <AgentLogo icon={agent.icon} color="peach" size={56} iconSize={26} />
          {unlocked && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-mint-light text-ink">
              Unlocked
            </span>
          )}
        </div>

        <h1 className="font-[--font-display] font-semibold text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.1] mb-4">
          {agent.name}
        </h1>

        <p className="text-ink-soft leading-relaxed text-base sm:text-[17px] mb-6 max-w-2xl">
          {agent.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-2.5 text-sm">
          <span className="px-3 py-1 rounded-full bg-accent-light text-accent font-semibold text-xs">
            {agent.difficulty}
          </span>
          <span className="flex items-center gap-1 text-ink-soft text-xs">
            <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {agent.buildTime} to build
          </span>
          <span className="text-border" aria-hidden="true">|</span>
          <span className="flex items-center gap-1 text-ink-soft text-xs">
            <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 8v2" />
            </svg>
            {agent.runningCost}
          </span>
          <span className="text-border" aria-hidden="true">|</span>
          <span className="flex items-center gap-1 text-ink-soft text-xs">
            <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {agent.timeSaved} saved
          </span>
        </div>
      </header>

      {/* What it does */}
      <div className="animate-fade-up delay-2 mb-12 sm:mb-14">
        <p className="text-ink leading-[1.8] text-[15px] sm:text-base">
          {agent.whatItDoes}
        </p>
      </div>

      {/* Outcomes */}
      <div className="animate-fade-up delay-2 mb-12 sm:mb-14 soft-card p-6 sm:p-8">
        <div className="flex items-center gap-2.5 mb-5">
          <Doodle variant="sparkle" color="mint" className="w-5 h-5" />
          <h2 className="font-[--font-display] font-semibold text-xl text-ink">
            What this agent takes off your plate
          </h2>
        </div>
        <ul className="space-y-3">
          {agent.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-3 text-sm text-ink">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-mint-light flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="leading-relaxed">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stack */}
      <div className="animate-fade-up delay-3 mb-12 sm:mb-14">
        <div className="flex items-center gap-2 mb-5">
          <div className="h-px w-6 bg-accent" />
          <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            The stack
          </h2>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {agent.stack.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center text-sm font-medium px-3.5 py-1.5 rounded-full bg-sky-light text-ink"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Cost & ROI — always free, this is the hook */}
      <div className="animate-fade-up delay-3 mb-12 sm:mb-14 soft-card p-6 sm:p-8">
        <div className="flex items-center gap-2.5 mb-6">
          <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
          <h2 className="font-[--font-display] font-semibold text-xl text-ink">
            Real costs &amp; ROI
          </h2>
        </div>
        <ul className="space-y-4 mb-6">
          {agent.costBreakdown.map((line) => (
            <li key={line.item} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-4 border-b border-border last:border-b-0 last:pb-0">
              <div className="flex items-baseline gap-3">
                <span className="font-semibold text-ink text-[15px]">{line.item}</span>
                <span className="text-accent font-[--font-mono] text-sm font-medium">{line.cost}</span>
              </div>
              {line.note && (
                <span className="text-xs text-ink-soft leading-relaxed sm:max-w-xs sm:text-right">
                  {line.note}
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="rounded-2xl bg-mint-light border border-mint px-5 py-4">
          <p className="text-[11px] font-bold text-ink uppercase tracking-wider mb-1.5">
            The math
          </p>
          <p className="text-sm text-ink/85 leading-relaxed">{agent.roi}</p>
        </div>
      </div>

      {/* Build steps (gated after step 1) */}
      <div className="animate-fade-up delay-3">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-px w-6 bg-accent" />
          <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            Build steps
          </h2>
        </div>

        <AgentPaywallGate agent={agent}>
          {agent.steps.map((step, i) => (
            <StepCard
              key={step.number}
              step={step}
              isLast={i === agent.steps.length - 1}
            />
          ))}

          {/* Gated deep content — only rendered once the pack is unlocked */}
          <div className="mt-4 sm:mt-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-6 bg-accent" />
              <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                The system prompt
              </h2>
            </div>
            <PromptBlock prompt={agent.systemPrompt} />
          </div>

          <div className="mt-12 sm:mt-14 soft-card p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
              <h2 className="font-[--font-display] font-semibold text-xl text-ink">
                Guardrails &mdash; what this agent must never do
              </h2>
            </div>
            <ul className="space-y-3">
              {agent.guardrails.map((rule) => (
                <li key={rule} className="flex items-start gap-3 text-sm text-ink">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-peach-light flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.007v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 sm:mt-12 soft-card p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <Doodle variant="sparkle" color="butter" className="w-5 h-5" />
              <h2 className="font-[--font-display] font-semibold text-xl text-ink">
                Before you trust it
              </h2>
            </div>
            <ul className="space-y-3">
              {agent.testChecklist.map((check) => (
                <li key={check} className="flex items-start gap-3 text-sm text-ink">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-butter-light flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">{check}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 sm:mt-12 soft-card p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-4">
              <Doodle variant="loop" color="mint" className="w-5 h-5" />
              <h2 className="font-[--font-display] font-semibold text-xl text-ink">
                Keep it healthy
              </h2>
            </div>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              {agent.maintenance}
            </p>
          </div>

          {/* Download section */}
          <div className="mt-10 sm:mt-12">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-accent" />
              <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                Take it with you
              </h2>
            </div>
            <p className="text-sm text-ink-soft mb-4 max-w-md leading-relaxed">
              Download this blueprint as a PDF for offline reading, printing, or sharing with your team.
            </p>
            <AgentPdfDownloadButton agent={agent} />
          </div>
        </AgentPaywallGate>
      </div>

      {/* Related agents in the pack */}
      {relatedAgents.length > 0 && (
        <div className="mt-16 sm:mt-20 pt-10 border-t border-border">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-6 bg-accent" />
            <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              More in this pack
            </h2>
          </div>
          <h3 className="font-[--font-display] font-semibold text-2xl text-ink mb-6">
            {industry ? `More for ${industry.name}` : 'More blueprints'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {relatedAgents.map((a, i) => (
              <AgentCard key={a.slug} agent={a} unlocked={unlocked} colorIndex={i + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
