import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GuideCard from '../components/GuideCard'
import Blob from '../components/Blob'
import Doodle from '../components/Doodle'
import useUpvotes from '../hooks/useUpvotes'
import useScrollReveal from '../hooks/useScrollReveal'
import { freeGuides } from '../data/guides'

// Each category maps to one of the warm pastel supporting colors, matching the
// treatment used on Home's problem preview cards.
const categories = [
  {
    id: 'get-customers',
    label: 'Get Customers',
    headline: "People aren’t finding you.",
    subhead: 'Guides to get noticed, fill your schedule, and turn strangers into regulars.',
    accentColor: '#D97706',
    lightColor: 'var(--color-peach-light)',
    labelColor: '#92400E',
    doodle: 'star',
  },
  {
    id: 'fix-profits',
    label: 'Fix Profits',
    headline: "Revenue’s up. Profit’s… not.",
    subhead: 'Guides to cut waste, price smarter, and keep more of what you earn.',
    accentColor: '#059669',
    lightColor: 'var(--color-mint-light)',
    labelColor: '#065F46',
    doodle: 'sparkle',
  },
  {
    id: 'fix-operations',
    label: 'Fix Operations',
    headline: "You’re doing everything yourself.",
    subhead: 'Guides to streamline, automate, and stop drowning in the day-to-day.',
    accentColor: '#4F6D7A',
    lightColor: 'var(--color-sky-light)',
    labelColor: '#334155',
    doodle: 'loop',
  },
  {
    id: 'scale-up',
    label: 'Scale Up',
    headline: 'Ready to grow — but how?',
    subhead: 'Guides to add revenue streams, expand your reach, and scale without chaos.',
    accentColor: '#7C3AED',
    lightColor: 'var(--color-butter-light)',
    labelColor: '#5B21B6',
    doodle: 'arrow-curve',
  },
]

export default function GuidesPage() {
  const [activeTab, setActiveTab] = useState('get-customers')
  const [, setAnimating] = useState(false)
  const contentRef = useRef(null)
  const introRef = useScrollReveal()
  const { getCount, hasVoted, toggleVote, sortByVotes } = useUpvotes()

  const active = categories.find(c => c.id === activeTab)

  const filteredGuides = sortByVotes(
    freeGuides.filter(g => g.problems && g.problems.includes(activeTab))
  )

  const switchTab = (id) => {
    if (id === activeTab) return
    setAnimating(true)

    // Fade out
    if (contentRef.current) {
      contentRef.current.style.opacity = '0'
      contentRef.current.style.transform = 'translateY(12px)'
    }

    setTimeout(() => {
      setActiveTab(id)
      setAnimating(false)

      // Fade in
      requestAnimationFrame(() => {
        if (contentRef.current) {
          contentRef.current.style.opacity = '1'
          contentRef.current.style.transform = 'translateY(0)'
        }
      })
    }, 200)
  }

  // Set initial animation state
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.transition = 'opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1), transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* ── Hero ── mint-led blob composition, distinct from Home/About */}
      <div className="relative overflow-hidden grain">
        <Blob variant={4} color="mint" float className="absolute -top-16 -right-20 w-[24rem] h-[24rem] opacity-80 pointer-events-none" />
        <Blob variant={5} color="sky" className="absolute top-32 -left-24 w-72 h-72 opacity-50 pointer-events-none" />
        <Blob variant={2} color="peach" className="absolute bottom-0 right-1/4 w-36 h-36 opacity-50 rotate-6 pointer-events-none hidden sm:block" />

        {/* Ambient gradient — shifts with active tab, kept warm and low-saturation */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse 60% 55% at 50% 0%, ${active.accentColor}08 0%, transparent 70%)`,
          }}
        />

        <div ref={introRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-4">
          {/* Title */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2.5 mb-5">
              <Doodle variant="sparkle" color="mint" className="w-5 h-5" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Problem Library
              </p>
            </div>
            <h1 className="font-[--font-display] font-semibold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] mb-4">
              Find your{' '}
              <span className="relative inline-block">
                <em className="font-[--font-display] italic text-accent">situation</em>
                <Doodle variant="squiggle-underline" color="mint" className="absolute left-0 -bottom-2 w-full h-3" />
              </span>
              .
            </h1>
            <p className="text-ink-soft text-base sm:text-lg max-w-md mx-auto leading-relaxed">
              Free guides for the problems that keep small business owners up at night.
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Looking for industry-specific depth?{' '}
              <Link to="/pro" className="text-accent hover:underline font-semibold">
                Explore Pro libraries
              </Link>
              .
            </p>
          </div>

          {/* Tab bar — warm soft pills, colored by category */}
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 soft-card rounded-full px-3 py-2 sm:px-4 sm:py-2.5">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => switchTab(cat.id)}
                    className="relative px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-[13px] sm:text-sm font-semibold transition-all duration-300 cursor-pointer"
                    style={{
                      color: isActive ? 'var(--color-ink)' : 'var(--color-ink-soft)',
                      backgroundColor: isActive ? cat.lightColor : 'transparent',
                      transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    }}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Active section content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section header */}
        <div
          ref={contentRef}
          style={{ opacity: 1, transform: 'translateY(0)' }}
        >
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-2.5 mb-5">
              <Doodle variant={active.doodle} color="accent" className="w-4 h-4" />
              <span
                className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-ink px-3 py-1 rounded-full transition-colors duration-500"
                style={{ backgroundColor: active.lightColor }}
              >
                {active.label}
              </span>
            </div>

            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.1] mb-3">
              {active.headline}
            </h2>
            <p className="text-ink-soft leading-relaxed max-w-lg text-base sm:text-lg">
              {active.subhead}
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredGuides.map((guide) => (
              <GuideCard
                key={guide.slug}
                guide={guide}
                voteCount={getCount(guide.slug)}
                hasVoted={hasVoted(guide.slug)}
                onToggleVote={toggleVote}
                sectionAccent={active.accentColor}
              />
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <div className="text-center py-16">
              <p className="text-ink-soft text-lg">More guides coming soon.</p>
            </div>
          )}

          {/* Guide count */}
          <div className="mt-10 text-center">
            <p className="text-sm text-ink-soft">
              {filteredGuides.length} guide{filteredGuides.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
