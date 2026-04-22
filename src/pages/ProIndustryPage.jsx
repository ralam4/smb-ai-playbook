import { useParams, Link } from 'react-router-dom'
import industries from '../data/industries'
import { proGuides } from '../data/guides'
import GuideCard from '../components/GuideCard'
import GridPattern from '../components/GridPattern'

export default function ProIndustryPage() {
  const { slug } = useParams()
  const industry = industries.find((i) => i.slug === slug)

  if (!industry) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="font-[--font-display] text-3xl mb-4">Industry not found</h1>
        <Link to="/pro" className="text-accent hover:underline">
          &larr; Back to Pro libraries
        </Link>
      </div>
    )
  }

  const industryGuides = proGuides.filter((g) => g.industry === industry.slug)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grain">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${industry.color}12 0%, transparent 50%)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 via-transparent to-transparent pointer-events-none" />
        <GridPattern
          width={48}
          height={48}
          x={-1}
          y={-1}
          className="fill-accent/[0.03] stroke-border-strong/40 [mask-image:radial-gradient(ellipse_80%_70%_at_30%_40%,black_20%,transparent_80%)]"
          squares={[[2, 3], [5, 1], [8, 5], [3, 7], [12, 2], [7, 8], [10, 6]]}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-20">
          {/* Breadcrumb */}
          <Link
            to="/pro"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors no-underline mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Pro libraries
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: industry.color }} />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: industry.color }}>
              {industry.name}
            </p>
          </div>

          <h1 className="font-[--font-display] text-[2.5rem] sm:text-5xl md:text-6xl text-text-primary leading-[1.05] max-w-3xl mb-6">
            {industry.tagline}
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
            {industry.description}
          </p>

          {/* Who this is for + pain points */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="glass glass-shadow rounded-2xl p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-3">
                Who it&rsquo;s for
              </p>
              <p className="text-[15px] text-text-primary leading-[1.7]">
                {industry.whoFor}
              </p>
            </div>
            <div className="glass glass-shadow rounded-2xl p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-3">
                Problems this library solves
              </p>
              <ul className="space-y-2">
                {industry.painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[15px] text-text-primary leading-[1.6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      </section>

      {/* Guide grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              The library
            </p>
          </div>
          <h2 className="font-[--font-display] text-3xl sm:text-5xl text-text-primary leading-[1.1]">
            {industryGuides.length} guide{industryGuides.length !== 1 ? 's' : ''} for {industry.name.toLowerCase()} operators.
          </h2>
        </div>

        {industryGuides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industryGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-text-secondary text-lg">More guides coming soon.</p>
          </div>
        )}
      </section>
    </>
  )
}
