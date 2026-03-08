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
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <Link
        to="/"
        className="animate-fade-up inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors no-underline mb-8"
      >
        &larr; Back to all guides
      </Link>

      {/* Header */}
      <div className="animate-fade-up delay-1">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white mb-4"
          style={{ backgroundColor: guide.tagColor }}
        >
          {guide.tag}
        </span>
        <h1 className="font-[--font-display] text-3xl sm:text-4xl md:text-5xl text-text-primary leading-[1.1] mb-6">
          {guide.title}
        </h1>
        <p className="text-text-secondary leading-relaxed text-[17px] mb-6">
          {guide.intro}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
          <span className="px-2.5 py-0.5 rounded-full bg-accent-light/60 text-accent font-medium">
            {guide.difficulty}
          </span>
          <span>{guide.time}</span>
          <span className="text-border">|</span>
          <span>{guide.tools}</span>
        </div>
      </div>

      {/* What You'll Get */}
      <div className="animate-fade-up delay-2 mt-10 bg-accent-light/50 border border-accent/10 rounded-xl px-6 py-5">
        <h2 className="font-[--font-display] text-lg text-text-primary mb-3">
          What You'll Get
        </h2>
        <ul className="space-y-2">
          {guide.outcomes.map((outcome, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-primary/80">
              <span className="text-accent mt-0.5 flex-shrink-0">&#10003;</span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      {/* Steps */}
      <div className="animate-fade-up delay-3 mt-14">
        <h2 className="font-[--font-display] text-2xl text-text-primary mb-8">
          Step-by-Step Guide
        </h2>
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
      <div className="animate-fade-up delay-4 mt-10 border-t border-border pt-10">
        <h2 className="font-[--font-display] text-2xl text-text-primary mb-4">
          What to Expect
        </h2>
        <div className="space-y-3 text-[15px] text-text-secondary leading-relaxed">
          <p>{guide.expectations.good}</p>
          <p>{guide.expectations.ifBad}</p>
          <p>{guide.expectations.time}</p>
        </div>
      </div>

      {/* Download */}
      <div className="animate-fade-up delay-5 mt-10 pt-8 border-t border-border">
        <DownloadButton filename={guide.downloadFile} />
      </div>

      {/* What's Next */}
      <div className="mt-16 pt-10 border-t border-border">
        <h2 className="font-[--font-display] text-2xl text-text-primary mb-6">
          More guides for small businesses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherGuides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </div>
    </div>
  )
}
