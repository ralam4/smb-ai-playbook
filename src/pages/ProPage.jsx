import { Link } from 'react-router-dom'
import industries from '../data/industries'
import { proGuides } from '../data/guides'
import GridPattern from '../components/GridPattern'
import { PRO_PRICE_DISPLAY } from '../config/pro'

export default function ProPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-transparent to-transparent pointer-events-none" />
        <GridPattern
          width={48}
          height={48}
          x={-1}
          y={-1}
          className="fill-accent/[0.03] stroke-border-strong/40 [mask-image:radial-gradient(ellipse_80%_70%_at_30%_40%,black_20%,transparent_80%)]"
          squares={[
            [2, 3], [5, 1], [8, 5], [3, 7], [12, 2],
            [7, 8], [15, 4], [10, 6], [4, 10], [13, 8],
          ]}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Pro guides · {PRO_PRICE_DISPLAY} each
            </p>
          </div>
          <h1 className="font-[--font-display] text-[2.75rem] sm:text-6xl md:text-7xl text-text-primary leading-[1.05] max-w-3xl">
            AI playbooks{' '}
            <em className="font-[--font-display] italic text-accent">built for</em>{' '}
            your industry.
          </h1>
          <p className="mt-8 sm:mt-10 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
            Free guides solve universal problems. Pro guides go deep for a specific business type — industry-specific prompts, workflows, and frameworks. {PRO_PRICE_DISPLAY} per guide, one-time unlock. Written for operators, not developers.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      </section>

      {/* Industry grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Industry libraries
          </p>
          <h2 className="font-[--font-display] text-3xl sm:text-5xl text-text-primary leading-[1.1] max-w-2xl mx-auto">
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
                className="group glass glass-shadow rounded-2xl p-8 sm:p-10 no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: industry.color }}
                  >
                    {industry.name}
                  </span>
                  <span className="font-[--font-mono] text-xs font-medium text-accent bg-accent-light/60 rounded-md px-2 py-1">
                    {count} guide{count !== 1 ? 's' : ''}
                  </span>
                </div>

                <h3 className="font-[--font-display] text-2xl sm:text-[1.75rem] text-text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                  {industry.tagline}
                </h3>

                <p className="text-[15px] sm:text-base text-text-secondary leading-[1.7] mb-6 flex-1">
                  {industry.description}
                </p>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-accent mt-auto">
                  Explore library
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent max-w-5xl mx-auto" />

      {/* How Pro works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
            How Pro works
          </p>
          <h2 className="font-[--font-display] text-3xl sm:text-5xl text-text-primary leading-[1.1] max-w-2xl mx-auto">
            Simple, honest, {PRO_PRICE_DISPLAY}.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { num: '01', title: 'Pick a guide', body: 'Browse your industry. Every guide is built for a real operational or business problem.' },
            { num: '02', title: `Unlock for ${PRO_PRICE_DISPLAY}`, body: 'One-time payment via Stripe. No subscription, no renewal, no upsell.' },
            { num: '03', title: 'Use it forever', body: 'Access persists on your browser. Come back any time. No logins to manage.' },
          ].map((s) => (
            <div key={s.num} className="glass glass-shadow rounded-2xl p-8 flex flex-col">
              <span className="font-[--font-mono] text-xs font-medium text-accent bg-accent-light/60 rounded-md px-2 py-1 self-start mb-5">
                {s.num}
              </span>
              <h3 className="font-[--font-display] text-2xl text-text-primary mb-4 leading-snug">
                {s.title}
              </h3>
              <p className="text-[15px] text-text-secondary leading-[1.7]">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-sm text-text-secondary">
          New to AI? Start with the{' '}
          <Link to="/guides" className="text-accent hover:underline font-semibold">
            free guides
          </Link>
          {' '}— same quality, universal problems.
        </p>
      </section>
    </>
  )
}
