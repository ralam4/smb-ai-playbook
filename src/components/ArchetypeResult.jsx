import { useState } from 'react'
import { Link } from 'react-router-dom'
import Blob from './Blob'
import Doodle from './Doodle'
import AgentIcon from './AgentIcon'
import SectionBand from './SectionBand'
import guides from '../data/guides'

const SITE_URL = 'https://smbaiplaybook.xyz'

// Static class maps so Tailwind sees every pastel variant at build time.
const WASH_CLASS = {
  butter: 'bg-butter-light',
  peach: 'bg-peach-light',
  mint: 'bg-mint-light',
  sky: 'bg-sky-light',
}
const DOT_STYLE = {
  butter: 'var(--color-butter)',
  peach: 'var(--color-peach)',
  mint: 'var(--color-mint)',
  sky: 'var(--color-sky)',
}

const Arrow = () => (
  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default function ArchetypeResult({ resultType, onRetake, tookQuiz = true }) {
  const [copiedPost, setCopiedPost] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)

  const matchedGuides = guides.filter((g) =>
    resultType.recommendedGuides?.includes(g.slug),
  )

  const pastel = resultType.pastel || 'peach'

  const handleCopyPost = () => {
    navigator.clipboard.writeText(resultType.linkedinCopy)
    setCopiedPost(true)
    setTimeout(() => setCopiedPost(false), 2000)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${SITE_URL}/archetype/${resultType.id}`)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  return (
    <>
      {/* ── Reveal hero — glyph on a big tinted blob ── */}
      <section className="relative overflow-hidden grain">
        <Blob variant={1} color={pastel} float className="absolute -top-16 -right-20 w-80 h-80 opacity-50 pointer-events-none" />
        <Blob variant={3} color={pastel} className="absolute bottom-0 -left-20 w-64 h-64 opacity-35 pointer-events-none hidden sm:block" />

        <div className="relative z-10 opacity-0 animate-fade-up mx-auto max-w-3xl px-4 sm:px-6 pt-24 sm:pt-32 pb-14 sm:pb-16 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-8">
            <Doodle variant="sparkle" color={pastel} className="w-5 h-5" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Your AI Archetype
            </p>
            <Doodle variant="sparkle" color={pastel} className="w-5 h-5" />
          </div>

          {/* The archetype "logo": hand-drawn glyph centered on a rotated blob */}
          <div className="relative inline-flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 mb-7">
            <span aria-hidden="true" className="absolute inset-0" style={{ transform: 'rotate(-6deg)' }}>
              <Blob variant={2} color={pastel} className="w-full h-full" />
            </span>
            <AgentIcon variant={resultType.glyph} size={56} className="relative text-ink w-14 h-14 sm:w-16 sm:h-16" />
            <Doodle variant="sparkle" color="accent" className="absolute -top-2 -right-3 w-6 h-6" />
          </div>

          <h1 className="font-[--font-display] font-semibold italic text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.05] mb-5">
            {resultType.name}
          </h1>

          <p className="font-[--font-display] italic text-xl sm:text-2xl text-accent">
            &ldquo;{resultType.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* ── Description + edge/watch-out + guides ── */}
      <section className="relative overflow-hidden">
        <Blob variant={5} color={pastel} className="absolute top-1/3 -right-24 w-72 h-72 opacity-20 pointer-events-none hidden lg:block" />
        <div className="relative opacity-0 animate-fade-up delay-1 mx-auto max-w-3xl px-4 sm:px-6 pb-16 sm:pb-20">
          <p className="text-ink text-lg sm:text-xl leading-[1.7] mb-10">
            {resultType.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-12">
            <div className="soft-card p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: DOT_STYLE[pastel] }} />
                <p className="font-[--font-mono] text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
                  Your AI edge
                </p>
              </div>
              <p className="font-[--font-display] font-semibold text-xl text-ink leading-snug">
                {resultType.aiEdge}
              </p>
            </div>

            <div className="soft-card p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-ink-soft/40" />
                <p className="font-[--font-mono] text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
                  Watch out for
                </p>
              </div>
              <p className="text-[15px] text-ink leading-[1.6]">
                {resultType.watchOut}
              </p>
            </div>
          </div>

          {matchedGuides.length > 0 && (
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <Doodle variant="arrow-curve" color="accent" className="w-6 h-6" />
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                  Guides matched to you
                </p>
              </div>
              <div className="space-y-3">
                {matchedGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    to={`/guide/${guide.slug}`}
                    className="group soft-card soft-card-hover flex items-center gap-4 px-5 py-4"
                  >
                    <span
                      aria-hidden="true"
                      className={`w-9 h-9 rounded-full ${WASH_CLASS[pastel]} inline-flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: DOT_STYLE[pastel] }} />
                    </span>
                    <span className="text-[15px] font-medium text-ink group-hover:text-accent transition-colors">
                      {guide.title}
                    </span>
                    <svg className="w-4 h-4 ml-auto text-ink-soft/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Agents for your archetype ── */}
      <SectionBand tone="sand" wave className="overflow-hidden">
        <Blob variant={4} color={pastel} className="absolute -right-20 top-8 w-64 h-64 opacity-30 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Agents for your archetype
          </p>
          <h2 className="font-[--font-display] font-semibold text-2xl sm:text-4xl text-ink leading-[1.15] mb-4 max-w-xl mx-auto">
            Ready to put an AI employee to work?
          </h2>
          <p className="text-ink-soft text-base sm:text-lg leading-[1.7] max-w-xl mx-auto mb-8">
            {resultType.agentsPitch}
          </p>
          <Link
            to="/agents"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          >
            Explore Agent Packs
            <Arrow />
          </Link>
        </div>
      </SectionBand>

      {/* ── Share + retake ── */}
      <section className="px-4 sm:px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <div className="soft-card p-7 sm:p-9 text-center">
            <h2 className="font-[--font-display] font-semibold text-2xl text-ink mb-2 inline-flex items-center gap-2">
              Share your result
              <Doodle variant="sparkle" color={pastel} className="w-5 h-5" />
            </h2>
            <p className="text-sm text-ink-soft leading-relaxed max-w-md mx-auto mb-6">
              Curious which archetype your fellow owners are? Share yours and find out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleCopyPost}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-colors cursor-pointer shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3" />
                </svg>
                {copiedPost ? 'Copied ✓' : 'Copy LinkedIn Post'}
              </button>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 border-border-strong text-ink hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {copiedLink ? 'Link copied ✓' : 'Copy Link'}
              </button>
            </div>

            <div className="mt-7 pt-6 border-t border-border/60">
              {tookQuiz ? (
                <button
                  onClick={onRetake}
                  className="text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent-hover transition-colors cursor-pointer"
                >
                  Think a different archetype fits? Retake the quiz
                </button>
              ) : (
                <button
                  onClick={onRetake}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer"
                >
                  Take the quiz yourself — find your archetype
                  <Arrow />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
