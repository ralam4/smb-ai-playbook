import { useParams, Link } from 'react-router-dom'
import industries from '../data/industries'
import { proGuides } from '../data/guides'
import GuideCard from '../components/GuideCard'
import Blob from '../components/Blob'
import Doodle from '../components/Doodle'
import useSEO, { truncate } from '../hooks/useSEO'

// Cycle of doodle variants for the pain-point list so each bullet feels hand-placed.
const PAIN_DOODLES = ['sparkle', 'star', 'asterisk', 'loop']

export default function ProIndustryPage() {
  const { slug } = useParams()
  const industry = industries.find((i) => i.slug === slug)

  useSEO({
    title: industry
      ? `${industry.name} AI Guides (Pro) — SMB AI Playbook`
      : 'Industry Not Found — SMB AI Playbook',
    description: industry
      ? truncate(`${industry.tagline} ${industry.description}`, 155)
      : 'This Pro industry library could not be found. Browse all Pro guide libraries for small business owners.',
    canonical: industry ? `/pro/${industry.slug}` : '/pro',
  })

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
      {/* ── Hero ── per-industry pastel wash (softened, no saturated gradients) */}
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
            to="/pro"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-accent transition-colors no-underline mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Pro libraries
          </Link>

          <div className="flex items-center gap-2.5 mb-6">
            <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
            <span
              className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full text-ink"
              style={{ backgroundColor: `${industry.color}1F` }}
            >
              {industry.name}
            </span>
          </div>

          <h1 className="font-[--font-display] font-semibold text-[2.5rem] sm:text-5xl md:text-6xl text-ink leading-[1.05] max-w-3xl mb-6">
            {industry.tagline}
          </h1>

          <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl">
            {industry.description}
          </p>

          {/* Who this is for + pain points — soft cards */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="soft-card p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-3">
                Who it&rsquo;s for
              </p>
              <p className="text-[15px] text-ink leading-[1.7]">
                {industry.whoFor}
              </p>
            </div>
            <div className="soft-card p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
                Problems this library solves
              </p>
              <ul className="space-y-3">
                {industry.painPoints.map((point, i) => (
                  <li key={point} className="flex items-start gap-2.5 text-[15px] text-ink leading-[1.6]">
                    <Doodle
                      variant={PAIN_DOODLES[i % PAIN_DOODLES.length]}
                      color="accent"
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guide grid ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <Doodle variant="squiggle-underline" color="accent" className="w-8 h-3" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              The library
            </p>
          </div>
          <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1]">
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
            <p className="text-ink-soft text-lg">More guides coming soon.</p>
          </div>
        )}
      </section>
    </>
  )
}
