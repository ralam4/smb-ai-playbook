import { useParams, Link } from 'react-router-dom'
import guides from '../data/guides'
import StepCard from '../components/StepCard'
import GuideCard from '../components/GuideCard'
import DownloadButton from '../components/DownloadButton'

export default function GuidePage() {
  const { slug } = useParams()
  const guide = guides.find((g) => g.slug === slug)

  if (!guide) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="font-[--font-display] text-3xl mb-4">Guide not found</h1>
        <Link to="/" className="text-accent hover:underline">
          &larr; Back to all guides
        </Link>
      </div>
    )
  }

  const otherGuides = guides.filter((g) => g.slug !== slug)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-8 sm:pb-12">
      {/* Breadcrumb */}
      <Link
        to="/"
        className="animate-fade-up inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors no-underline mb-8 sm:mb-10 group"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to all guides
      </Link>

      {/* Header */}
      <header className="animate-fade-up delay-1 mb-10 sm:mb-12">
        <div className="flex items-center gap-3 mb-5">
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: guide.tagColor }}
          >
            {guide.tag}
          </span>
          <span className="text-xs text-text-secondary font-[--font-mono]">{guide.time}</span>
        </div>

        <h1 className="font-[--font-display] text-3xl sm:text-4xl md:text-5xl text-text-primary leading-[1.1] mb-6">
          {guide.title}
        </h1>

        <p className="text-text-secondary leading-relaxed text-base sm:text-[17px] mb-6 max-w-2xl">
          {guide.intro}
        </p>

        <div className="flex flex-wrap items-center gap-2.5 text-sm">
          <span className="px-3 py-1 rounded-full bg-accent-light text-accent font-semibold text-xs">
            {guide.difficulty}
          </span>
          <span className="flex items-center gap-1 text-text-secondary text-xs">
            <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {guide.time}
          </span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1 text-text-secondary text-xs">
            <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {guide.tools}
          </span>
        </div>
      </header>

      {/* What You'll Get */}
      <div className="animate-fade-up delay-2 mb-12 sm:mb-14 rounded-2xl overflow-hidden border border-accent/15">
        <div className="bg-accent px-6 py-3">
          <h2 className="font-[--font-display] text-base text-white">
            What You'll Get
          </h2>
        </div>
        <div className="bg-white/30 backdrop-blur-sm px-6 py-5">
          <ul className="space-y-3">
            {guide.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-primary/85">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Steps */}
      <div className="animate-fade-up delay-3">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-px w-6 bg-accent" />
          <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            Step-by-Step Guide
          </h2>
        </div>
        <div>
          {guide.steps.map((step, i) => (
            <StepCard
              key={step.number}
              step={step}
              isLast={i === guide.steps.length - 1}
            />
          ))}
        </div>
      </div>

      {/* What to Expect */}
      <div className="animate-fade-up delay-4 mt-12 sm:mt-14">
        <div className="rounded-2xl glass glass-shadow p-6 sm:p-8">
          <h2 className="font-[--font-display] text-xl text-text-primary mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What to Expect
          </h2>
          <div className="space-y-3 text-[15px] text-text-secondary leading-relaxed">
            <p>{guide.expectations.good}</p>
            <p>{guide.expectations.ifBad}</p>
            <p className="font-medium text-text-primary/80">{guide.expectations.time}</p>
          </div>
        </div>
      </div>

      {/* Download */}
      <div className="animate-fade-up delay-5 mt-10 flex justify-center sm:justify-start">
        <DownloadButton filename={guide.downloadFile} />
      </div>

      {/* What's Next */}
      <div className="mt-16 sm:mt-20 pt-10 border-t border-border">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-px w-6 bg-accent" />
          <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            More Guides
          </h2>
        </div>
        <h3 className="font-[--font-display] text-2xl text-text-primary mb-6">
          Solve another problem
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {otherGuides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </div>
    </div>
  )
}
