import { useState, useRef, useEffect } from 'react'
import GuideCard from '../components/GuideCard'
import GridPattern from '../components/GridPattern'
import useUpvotes from '../hooks/useUpvotes'
import useScrollReveal from '../hooks/useScrollReveal'
import guides from '../data/guides'

const categories = [
  {
    id: 'get-customers',
    label: 'Get Customers',
    headline: "People aren\u2019t finding you.",
    subhead: 'Guides to get noticed, fill your schedule, and turn strangers into regulars.',
    accentColor: '#D97706',
    lightColor: '#FEF3C7',
    labelColor: '#92400E',
  },
  {
    id: 'fix-profits',
    label: 'Fix Profits',
    headline: "Revenue\u2019s up. Profit\u2019s\u2026 not.",
    subhead: 'Guides to cut waste, price smarter, and keep more of what you earn.',
    accentColor: '#059669',
    lightColor: '#D1FAE5',
    labelColor: '#065F46',
  },
  {
    id: 'fix-operations',
    label: 'Fix Operations',
    headline: "You\u2019re doing everything yourself.",
    subhead: 'Guides to streamline, automate, and stop drowning in the day-to-day.',
    accentColor: '#4F6D7A',
    lightColor: '#E2E8F0',
    labelColor: '#334155',
  },
  {
    id: 'scale-up',
    label: 'Scale Up',
    headline: 'Ready to grow \u2014 but how?',
    subhead: 'Guides to add revenue streams, expand your reach, and scale without chaos.',
    accentColor: '#7C3AED',
    lightColor: '#EDE9FE',
    labelColor: '#5B21B6',
  },
]

export default function GuidesPage() {
  const [activeTab, setActiveTab] = useState('get-customers')
  const [animating, setAnimating] = useState(false)
  const contentRef = useRef(null)
  const introRef = useScrollReveal()
  const { getCount, hasVoted, toggleVote, sortByVotes } = useUpvotes()

  const active = categories.find(c => c.id === activeTab)

  const filteredGuides = sortByVotes(
    guides.filter(g => g.problems && g.problems.includes(activeTab))
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
      {/* Page header */}
      <div className="relative overflow-hidden grain">
        {/* Ambient gradient — shifts with active tab */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 50% 0%, ${active.accentColor}0a 0%, transparent 70%),
              linear-gradient(180deg, ${active.lightColor}25 0%, transparent 60%)
            `,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-transparent to-transparent pointer-events-none" />

        {/* Grid pattern background */}
        <GridPattern
          width={48}
          height={48}
          x={-1}
          y={-1}
          className="fill-accent/[0.03] stroke-border-strong/40 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_20%,transparent_80%)]"
          squares={[
            [2, 3], [5, 1], [8, 5], [3, 7], [12, 2],
            [7, 8], [15, 4], [10, 6], [4, 10], [13, 8],
            [1, 5], [9, 2], [6, 9], [11, 3], [14, 7],
          ]}
        />

        <div ref={introRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-4">
          {/* Title */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent/40" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Problem Library
              </p>
              <div className="h-px w-10 bg-accent/40" />
            </div>
            <h1 className="font-[--font-display] text-4xl sm:text-5xl md:text-6xl text-text-primary leading-[1.1] mb-4">
              Find your situation.
            </h1>
            <p className="text-text-secondary text-base sm:text-lg max-w-md mx-auto leading-relaxed">
              25 step-by-step guides organized by the problem they solve.
            </p>
          </div>

          {/* Tab bar */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 glass-strong glass-shadow-lg rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => switchTab(cat.id)}
                    className="relative px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-[13px] sm:text-sm font-semibold transition-all duration-300 cursor-pointer"
                    style={{
                      color: isActive ? '#fff' : 'var(--color-text-secondary)',
                      backgroundColor: isActive ? cat.accentColor : 'transparent',
                      boxShadow: isActive
                        ? `0 4px 16px ${cat.accentColor}35, 0 2px 4px ${cat.accentColor}20`
                        : 'none',
                    }}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      </div>

      {/* Active section content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section header */}
        <div
          ref={contentRef}
          style={{ opacity: 1, transform: 'translateY(0)' }}
        >
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-colors duration-500"
                style={{ backgroundColor: active.accentColor }}
              />
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500"
                style={{ color: active.labelColor }}
              >
                {active.label}
              </p>
              <div
                className="h-px flex-1 max-w-24 transition-colors duration-500"
                style={{ backgroundColor: active.accentColor + '25' }}
              />
            </div>

            <h2 className="font-[--font-display] text-3xl sm:text-4xl md:text-5xl text-text-primary leading-[1.1] mb-3">
              {active.headline}
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-lg text-base sm:text-lg">
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
              <p className="text-text-secondary text-lg">More guides coming soon.</p>
            </div>
          )}

          {/* Guide count */}
          <div className="mt-10 text-center">
            <p className="text-sm text-text-secondary">
              {filteredGuides.length} guide{filteredGuides.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
