import { Link } from 'react-router-dom'
import industries from '../data/industries'
import { packs, agentsForIndustry } from '../data/agents/index'
import AgentIcon from '../components/AgentIcon'
import Blob from '../components/Blob'
import Doodle from '../components/Doodle'
import BlobBadge from '../components/BlobBadge'
import SectionBand from '../components/SectionBand'
import useSEO from '../hooks/useSEO'
import { AGENTS_PRICE_DISPLAY } from '../config/agents'

const howBlueprintsWork = [
  {
    n: 1,
    color: 'peach',
    doodle: 'star',
    title: 'Pick your pack',
    body: 'Find your industry. Every pack is 3 blueprints built for a real, recurring job in that business.',
  },
  {
    n: 2,
    color: 'mint',
    doodle: 'arrow-curve',
    title: 'Follow the build steps',
    body: 'Copy-paste system prompts, real tool wiring — Zapier, Make, the AI tools you already pay for.',
  },
  {
    n: 3,
    color: 'butter',
    doodle: 'sparkle',
    title: 'Run it with guardrails',
    body: 'Honest costs, a test checklist, and the guardrails that keep a human in the loop where it matters.',
  },
]

const insideEveryBlueprint = [
  'What the agent does and where it fits in your day, in plain English.',
  'An itemized monthly running-cost table plus honest ROI math — hours saved vs. dollars spent.',
  'A no-code tool stack option and a budget path, with real tool names.',
  'Numbered build steps with copy-paste prompts, and the complete system prompt itself.',
  'Guardrails, a test checklist, and the 15-minute monthly maintenance routine.',
]

// FAQ content — one array feeds both the visible accordion-style Q/A blocks
// and the JSON-LD FAQPage structured data below, so the two can never drift.
const industryNameList = industries.map((i) => i.name).join(', ')

const faqs = [
  {
    q: 'What is an AI agent, in plain English?',
    a: 'An agent isn’t a chatbot you talk to once — it’s wired into a real trigger in your business (a new review, tomorrow’s forecast, an unapproved estimate) and does the same job every day: reading the input, drafting the output, and flagging anything that needs your judgment. You keep the final say on what matters; the agent just handles the repetitive part.',
  },
  {
    q: 'What does it cost to run an AI agent?',
    a: 'Most blueprints in this catalog run $0–50 a month — free-tier AI chat tools and free-tier automation (like Zapier) to start, with a paid upgrade only if you outgrow it. Every blueprint itemizes the real monthly cost before you buy, so you know exactly what you’re signing up for.',
  },
  {
    q: 'Do I need to know how to code?',
    a: 'No. Every blueprint gives you a complete, copy-paste system prompt and a no-code tool stack — ChatGPT or Claude plus Zapier or Make — the same tools you probably already use, wired together with clicks, not code.',
  },
  {
    q: 'How is this different from the $5 Pro guides?',
    a: 'Pro guides teach you to use AI — a great prompt for a specific task, run when you remember to run it. Agent Packs teach you to build an employee out of AI — the same job done automatically, every day, with guardrails and a human still approving the calls that matter. Pro guides are $5 each; Agent Packs are $29 for 3 full blueprints.',
  },
  {
    q: 'Is my industry’s pack available?',
    a: `All 8 industry packs are live: ${industryNameList}. Each pack ships with 3 complete agent blueprints — find yours above.`,
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

const Arrow = () => (
  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default function AgentsPage() {
  useSEO({
    title: 'AI Agent Blueprints for Small Business — SMB AI Playbook',
    description:
      'Blueprints to build an AI agent for your small business — system prompts, tool wiring, honest costs, and guardrails. $29 per pack, 3 blueprints included.',
    canonical: '/agents',
  })
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden grain">
        <Blob variant={3} color="mint" float className="absolute -top-16 -right-20 w-[24rem] h-[24rem] opacity-80 pointer-events-none" />
        <Blob variant={1} color="butter" float className="absolute bottom-0 -left-20 w-72 h-72 opacity-60 pointer-events-none" />
        <Blob variant={2} color="peach" className="absolute top-1/2 right-1/4 w-32 h-32 opacity-40 rotate-6 pointer-events-none hidden sm:block" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Agent Packs &middot; {AGENTS_PRICE_DISPLAY} per pack
            </p>
          </div>

          <h1 className="font-[--font-display] font-semibold text-[2.75rem] sm:text-6xl md:text-7xl text-ink leading-[1.05] tracking-[-0.01em] max-w-3xl">
            AI agents{' '}
            <span className="relative inline-block">
              <em className="font-[--font-display] italic text-accent">for</em>
              <Doodle variant="squiggle-underline" color="accent" className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-3 sm:h-4" />
            </span>{' '}
            your small business.
          </h1>

          <p className="mt-8 sm:mt-10 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl">
            Not another chatbot subscription — a blueprint for an{' '}
            <strong className="text-ink font-semibold">employee made of AI</strong> that runs one job in your
            business every day. Reviews answered, prep lists built, estimates followed up. {AGENTS_PRICE_DISPLAY}{' '}
            per industry pack, one-time, 3 blueprints included.
          </p>

          {/* What's an agent vs a prompt */}
          <div className="mt-10 sm:mt-12 soft-card p-6 sm:p-8 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-3">
              An agent isn&rsquo;t a prompt
            </p>
            <p className="text-[15px] sm:text-base text-ink leading-[1.7]">
              A prompt answers one question, once, when you remember to ask it. An agent is wired into a real
              trigger — a new review, tomorrow&rsquo;s forecast, an unapproved estimate — and does the same job
              every single day, with a system prompt, guardrails, and a human still approving the important
              calls. That&rsquo;s the difference between a clever trick and something you can actually rely on.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pack grid ── */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Every industry, 3 blueprints each
          </p>
          <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1] max-w-2xl mx-auto">
            Find your business. Build the agent.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {industries.map((industry) => {
            const pack = packs.find((p) => p.industry === industry.slug)
            const industryAgents = agentsForIndustry(industry.slug)
            const hasPack = Boolean(pack) && industryAgents.length > 0

            const badge = hasPack ? (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink bg-butter-light rounded-full px-3 py-1.5 flex-shrink-0">
                {AGENTS_PRICE_DISPLAY} &middot; 3 blueprints
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink-soft bg-border rounded-full px-3 py-1.5 flex-shrink-0">
                Pack coming soon
              </span>
            )

            const inner = (
              <>
                <div className="flex items-start justify-between gap-3 mb-5">
                  <span
                    className="inline-flex items-center text-[11px] font-semibold px-3 py-1.5 rounded-full text-ink"
                    style={{ backgroundColor: `${industry.color}1F` }}
                  >
                    {industry.name}
                  </span>
                  {badge}
                </div>

                <h3 className="font-[--font-display] font-semibold text-2xl sm:text-[1.75rem] text-ink mb-3 leading-snug group-hover:text-accent transition-colors">
                  {hasPack ? pack.headline : `AI agents for ${industry.name.toLowerCase()} owners`}
                </h3>

                <p className="text-[15px] sm:text-base text-ink-soft leading-[1.7] mb-6 flex-1">
                  {hasPack
                    ? pack.subhead
                    : `We're still writing this pack's blueprints. Check back soon, or start with the free ${industry.name.toLowerCase()} guides.`}
                </p>

                {hasPack && (
                  <div className="flex items-center gap-2 mb-6">
                    {industryAgents.map((agent) => (
                      <span
                        key={agent.slug}
                        title={agent.name}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
                        style={{ backgroundColor: `${industry.color}1F`, color: industry.color }}
                      >
                        <AgentIcon variant={agent.icon} size={18} />
                      </span>
                    ))}
                  </div>
                )}

                {hasPack && (
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-accent mt-auto">
                    Explore the pack
                    <Arrow />
                  </div>
                )}
              </>
            )

            return hasPack ? (
              <Link
                key={industry.slug}
                to={`/agents/${industry.slug}`}
                className="group soft-card soft-card-hover p-8 sm:p-10 no-underline flex flex-col cursor-pointer"
              >
                {inner}
              </Link>
            ) : (
              <div key={industry.slug} className="soft-card p-8 sm:p-10 flex flex-col opacity-60">
                {inner}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── How a blueprint works ── */}
      <SectionBand tone="sand" wave className="overflow-hidden">
        <Blob variant={4} color="sky" className="absolute -left-20 top-10 w-72 h-72 opacity-25 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
              How a blueprint works
            </p>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1] max-w-2xl mx-auto">
              From idea to a running agent.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {howBlueprintsWork.map((s) => (
              <div key={s.n} className="soft-card soft-card-hover relative p-8 flex flex-col overflow-hidden">
                <Doodle variant={s.doodle} color={s.color} className="absolute top-6 right-6 w-7 h-7 opacity-80" />
                <BlobBadge n={s.n} color={s.color} size={60} className="mb-6" />
                <h3 className="font-[--font-display] font-semibold text-2xl text-ink mb-4 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[15px] text-ink-soft leading-[1.7]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionBand>

      {/* ── What's inside every blueprint ── */}
      <section className="relative overflow-hidden">
        <Blob variant={5} color="peach" className="absolute -right-24 bottom-0 w-80 h-80 opacity-30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
              The &ldquo;worth it&rdquo; bar
            </p>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1] max-w-2xl mx-auto">
              What&rsquo;s inside every blueprint.
            </h2>
          </div>

          <div className="soft-card p-8 sm:p-10">
            <ul className="space-y-4 mb-8">
              {insideEveryBlueprint.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink leading-[1.7]">
                  <Doodle
                    variant={['sparkle', 'star', 'asterisk', 'loop', 'circle'][i % 5]}
                    color="accent"
                    className="w-4 h-4 flex-shrink-0 mt-1"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-soft leading-relaxed border-t border-border pt-6">
              And the part nobody else publishes honestly: every blueprint lists its real monthly running
              cost, itemized, before you buy anything. Most blueprints in this catalog run{' '}
              <strong className="text-ink font-semibold">$0&ndash;50/month</strong> — free-tier tools to start,
              with a paid upgrade path only if you outgrow it.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── stacked soft-card Q/A, doubles as JSON-LD FAQPage source */}
      <SectionBand tone="sand" wave className="overflow-hidden">
        <Blob variant={5} color="sky" className="absolute -right-16 bottom-10 w-60 h-60 opacity-25 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="mb-12 sm:mb-14">
            <div className="flex items-center gap-2.5 mb-5">
              <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                Frequently asked
              </p>
            </div>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1]">
              Agent Packs, answered.
            </h2>
          </div>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="soft-card p-6 sm:p-8">
                <h3 className="font-[--font-display] font-semibold text-xl sm:text-2xl text-ink mb-3 leading-snug">
                  {faq.q}
                </h3>
                <p className="text-base sm:text-lg text-ink-soft leading-[1.7]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionBand>

      {/* ── Cross-link to Pro ── */}
      <SectionBand tone="sand" wave className="overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Not ready for an agent yet?
          </p>
          <h2 className="font-[--font-display] font-semibold text-2xl sm:text-3xl text-ink mb-5 leading-snug">
            Want prompts before agents? Pro guides are $5.
          </h2>
          <p className="text-ink-soft leading-relaxed max-w-lg mx-auto mb-8">
            Pro guides teach you to use AI, one prompt at a time. Agent Packs teach you to build an employee
            out of AI. Start wherever makes sense for you.
          </p>
          <Link
            to="/pro"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer"
          >
            Browse Pro guides
            <Arrow />
          </Link>
        </div>
      </SectionBand>

      {/* JSON-LD structured data for the FAQ above — same `faqs` array, so copy can't drift */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
