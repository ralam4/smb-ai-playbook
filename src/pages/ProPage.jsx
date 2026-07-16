import { Link } from 'react-router-dom'
import industries from '../data/industries'
import { proGuides } from '../data/guides'
import Blob from '../components/Blob'
import Doodle from '../components/Doodle'
import BlobBadge from '../components/BlobBadge'
import SectionBand from '../components/SectionBand'
import { PRO_PRICE_DISPLAY } from '../config/pro'

const howProWorks = [
  {
    n: 1,
    color: 'butter',
    doodle: 'star',
    title: 'Pick a guide',
    body: 'Browse your industry. Every guide is built for a real operational or business problem.',
  },
  {
    n: 2,
    color: 'peach',
    doodle: 'sparkle',
    title: `Unlock for ${PRO_PRICE_DISPLAY}`,
    body: 'One-time payment via Stripe. No subscription, no renewal, no upsell.',
  },
  {
    n: 3,
    color: 'mint',
    doodle: 'loop',
    title: 'Use it forever',
    body: 'Access persists on your browser. Come back any time. No logins to manage.',
  },
]

const Arrow = () => (
  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default function ProPage() {
  return (
    <>
      {/* ── Hero ── butter/peach-led blob composition, distinct from Home/About/Guides */}
      <section className="relative overflow-hidden grain">
        <Blob variant={2} color="butter" float className="absolute -top-16 -right-20 w-[24rem] h-[24rem] opacity-80 pointer-events-none" />
        <Blob variant={5} color="peach" float className="absolute bottom-0 -left-20 w-72 h-72 opacity-60 pointer-events-none" />
        <Blob variant={3} color="mint" className="absolute top-1/2 right-1/4 w-32 h-32 opacity-40 rotate-6 pointer-events-none hidden sm:block" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Pro guides &middot; {PRO_PRICE_DISPLAY} each
            </p>
          </div>
          <h1 className="font-[--font-display] font-semibold text-[2.75rem] sm:text-6xl md:text-7xl text-ink leading-[1.05] tracking-[-0.01em] max-w-3xl">
            AI playbooks{' '}
            <span className="relative inline-block">
              <em className="font-[--font-display] italic text-accent">built for</em>
              <Doodle variant="squiggle-underline" color="accent" className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-3 sm:h-4" />
            </span>{' '}
            your industry.
          </h1>
          <p className="mt-8 sm:mt-10 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl">
            Free guides solve universal problems. Pro guides go deep for a specific business type — industry-specific prompts, workflows, and frameworks. {PRO_PRICE_DISPLAY} per guide, one-time unlock. Written for operators, not developers.
          </p>
        </div>
      </section>

      {/* ── Industry grid ── */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Industry libraries
          </p>
          <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1] max-w-2xl mx-auto">
            Find your business. Go deep.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {industries.map((industry) => {
            const count = proGuides.filter((g) => g.industry === industry.slug).length
            return (
              <Link
                key={industry.slug}
                to={`/pro/${industry.slug}`}
                className="group soft-card soft-card-hover p-8 sm:p-10 no-underline flex flex-col cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <span
                    className="inline-flex items-center text-[11px] font-semibold px-3 py-1.5 rounded-full text-ink"
                    style={{ backgroundColor: `${industry.color}1F` }}
                  >
                    {industry.name}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink bg-peach-light rounded-full px-3 py-1.5 flex-shrink-0">
                    {count} guide{count !== 1 ? 's' : ''}
                  </span>
                </div>

                <h3 className="font-[--font-display] font-semibold text-2xl sm:text-[1.75rem] text-ink mb-3 leading-snug group-hover:text-accent transition-colors">
                  {industry.tagline}
                </h3>

                <p className="text-[15px] sm:text-base text-ink-soft leading-[1.7] mb-6 flex-1">
                  {industry.description}
                </p>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-accent mt-auto">
                  Explore library
                  <Arrow />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── How Pro works ── three soft cards with BlobBadges */}
      <SectionBand tone="sand" wave className="overflow-hidden">
        <Blob variant={4} color="sky" className="absolute -left-20 top-10 w-72 h-72 opacity-25 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
              How Pro works
            </p>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1] max-w-2xl mx-auto">
              Simple, honest, {PRO_PRICE_DISPLAY}.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {howProWorks.map((s) => (
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

          <p className="text-center mt-12 text-sm text-ink-soft">
            New to AI? Start with the{' '}
            <Link to="/guides" className="text-accent hover:underline font-semibold">
              free guides
            </Link>
            {' '}— same quality, universal problems.
          </p>
        </div>
      </SectionBand>

      {/* ── Cross-sell: Agent Packs ── */}
      <section className="relative overflow-hidden">
        <Blob variant={3} color="mint" className="absolute -right-20 top-0 w-72 h-72 opacity-25 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Ready to go beyond prompts?
          </p>
          <h2 className="font-[--font-display] font-semibold text-2xl sm:text-3xl text-ink mb-5 leading-snug">
            Agent Packs &mdash; $29, 3 blueprints per industry.
          </h2>
          <p className="text-ink-soft leading-relaxed max-w-lg mx-auto mb-8">
            Pro guides teach you to use AI. Agent Packs teach you to build an AI employee that runs a job in
            your business every day — system prompts, tool wiring, real costs, and guardrails included.
          </p>
          <Link
            to="/agents"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          >
            Explore Agent Packs
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  )
}
