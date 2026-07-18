import { useState } from 'react'
import { Link } from 'react-router-dom'
import Blob from './Blob'
import Doodle from './Doodle'
import BlobBadge from './BlobBadge'
import AgentIcon from './AgentIcon'
import { resultTypes } from '../data/archetype'

function readLastResult() {
  try {
    const id = localStorage.getItem('smbai_archetype')
    return id && resultTypes[id] ? resultTypes[id] : null
  } catch {
    return null
  }
}

const whyItMatters = [
  {
    color: 'peach',
    title: 'Not about AI knowledge',
    body: "We don't ask what tools you use or how much you know. We ask how you naturally work, think, and make decisions.",
  },
  {
    color: 'mint',
    title: 'Your work style → AI fit',
    body: "Your instincts aren't random. They map to specific AI strengths. The quiz reveals which ones are yours.",
  },
  {
    color: 'butter',
    title: 'Actionable, not abstract',
    body: 'You get a specific archetype with your AI edge, your blind spot, and guides matched to how you operate.',
  },
]

// Preview pills pull straight from the archetype data — Warm Studio pastels + glyphs.
const PILL_WASH = {
  butter: 'bg-butter-light',
  peach: 'bg-peach-light',
  mint: 'bg-mint-light',
  sky: 'bg-sky-light',
}
const archetypePreviews = Object.values(resultTypes)

export default function ArchetypeIntro({ onStart }) {
  const [lastResult] = useState(readLastResult)
  return (
    <section className="relative overflow-hidden grain">
      {/* Multi-color blob composition — distinct playful hero */}
      <Blob variant={2} color="peach" float className="absolute -top-20 -right-20 w-[26rem] h-[26rem] opacity-80 pointer-events-none" />
      <Blob variant={5} color="mint" float className="absolute top-56 -left-28 w-72 h-72 opacity-60 pointer-events-none" />
      <Blob variant={3} color="butter" className="absolute bottom-0 right-1/4 w-44 h-44 opacity-50 rotate-12 pointer-events-none hidden sm:block" />
      <Blob variant={1} color="sky" className="absolute top-10 left-1/3 w-24 h-24 opacity-40 pointer-events-none hidden md:block" />

      <div className="relative z-10">
        {/* Hero text */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-14 sm:pb-16 text-center">
          <div className="animate-fade-up flex items-center justify-center gap-2.5 mb-8">
            <Doodle variant="sparkle" color="accent" className="w-5 h-5" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              AI Archetype
            </p>
            <Doodle variant="sparkle" color="accent" className="w-5 h-5" />
          </div>

          <h1 className="animate-fade-up delay-1 font-[--font-display] font-semibold text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl text-ink leading-[1.1] max-w-3xl mx-auto">
            The best way to use AI starts with{' '}
            <span className="relative inline-block">
              <em className="font-[--font-display] italic text-accent">understanding yourself.</em>
              <Doodle variant="squiggle-underline" color="accent" className="absolute left-0 -bottom-2 w-full h-3" />
            </span>
          </h1>

          <p className="animate-fade-up delay-2 mt-6 sm:mt-8 text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl mx-auto">
            Everyone says &ldquo;use AI.&rdquo; Nobody tells you <strong className="text-ink font-semibold">how it fits the way you already think and work.</strong> This 2-minute assessment changes that.
          </p>

          {lastResult && (
            <div className="animate-fade-up delay-3 mt-7 flex justify-center">
              <Link
                to={`/archetype/${lastResult.id}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink-soft shadow-sm hover:border-accent hover:text-accent transition-colors no-underline"
              >
                <AgentIcon variant={lastResult.glyph} size={16} className="w-4 h-4 text-accent" />
                Your last result: <span className="font-semibold text-ink group-hover:text-accent transition-colors">{lastResult.name}</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Why it matters — soft cards with BlobBadges */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-14 sm:pb-16">
          <div className="animate-fade-up delay-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyItMatters.map((item, i) => (
              <div
                key={item.title}
                className="soft-card soft-card-hover p-6 sm:p-7"
              >
                <BlobBadge n={i + 1} color={item.color} size={52} className="mb-5" />
                <h3 className="font-[--font-display] font-semibold text-lg text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What you'll discover */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
          <div className="animate-fade-up delay-4 relative overflow-hidden soft-card p-8 sm:p-10">
            <Blob variant={4} color="sky" className="absolute -bottom-14 -left-14 w-56 h-56 opacity-25 pointer-events-none" />
            <div className="relative max-w-2xl mx-auto text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft/70 mb-4">
                What you&rsquo;ll discover
              </p>
              <h2 className="font-[--font-display] font-semibold text-2xl sm:text-3xl text-ink mb-4">
                One of four archetypes. Yours.
              </h2>
              <p className="text-ink-soft leading-relaxed mb-8 max-w-lg mx-auto">
                Each archetype reveals how you process information and create value &mdash; and exactly where AI becomes a force multiplier for the way you already work.
              </p>

              {/* Four archetype preview pills — warmed but color-true */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {archetypePreviews.map((type) => (
                  <span
                    key={type.id}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-ink shadow-sm ${PILL_WASH[type.pastel]}`}
                  >
                    <AgentIcon variant={type.glyph} size={16} className="w-4 h-4 text-ink" />
                    {type.name}
                  </span>
                ))}
              </div>

              {/* CTA — big friendly rounded-full button with a doodle arrow pointing at it */}
              <div className="relative inline-block">
                <Doodle
                  variant="arrow-curve"
                  color="accent"
                  className="hidden sm:block absolute -left-16 -top-3 w-14 h-14 -scale-x-100 rotate-[15deg] pointer-events-none"
                />
                <button
                  onClick={onStart}
                  className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                >
                  Start the Quiz
                  <svg
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
              <p className="mt-4 text-xs text-ink-soft/70">
                12 questions &middot; 2 minutes &middot; No signup required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
