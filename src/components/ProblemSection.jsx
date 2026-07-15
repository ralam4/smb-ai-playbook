import { useEffect, useRef } from 'react'
import GuideCard from './GuideCard'
import Doodle from './Doodle'

function useReveal(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    el.style.transition = `opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -80px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}

export default function ProblemSection({
  id,
  label,
  headline,
  subhead,
  accentColor,
  lightColor,
  doodle = 'sparkle',
  guides,
  getCount,
  hasVoted,
  onToggleVote,
  sortByVotes,
}) {
  const sorted = sortByVotes(guides)
  const headerRef = useReveal(0)
  const gridRef = useReveal(200)

  return (
    <section
      id={id}
      className="relative scroll-mt-36 overflow-hidden"
    >
      {/* Ambient background glow — warm, low-saturation wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, ${accentColor}06 0%, transparent 70%),
            linear-gradient(180deg, ${lightColor}12 0%, ${lightColor}20 40%, ${lightColor}12 80%, transparent 100%)
          `,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        {/* Section header */}
        <div ref={headerRef} className="mb-12 sm:mb-16">
          {/* Label — pastel chip instead of saturated dot+label */}
          <div className="flex items-center gap-2.5 mb-5">
            <Doodle variant={doodle} color="accent" className="w-4 h-4" />
            <span
              className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-ink px-3 py-1 rounded-full"
              style={{ backgroundColor: lightColor }}
            >
              {label}
            </span>
          </div>

          {/* Big headline */}
          <h2 className="font-[--font-display] font-semibold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] mb-4 max-w-2xl">
            {headline}
          </h2>
          <p className="text-ink-soft leading-relaxed max-w-lg text-base sm:text-lg">
            {subhead}
          </p>
        </div>

        {/* Cards grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
          {sorted.map((guide) => (
            <GuideCard
              key={guide.slug}
              guide={guide}
              voteCount={getCount(guide.slug)}
              hasVoted={hasVoted(guide.slug)}
              onToggleVote={onToggleVote}
              sectionAccent={accentColor}
            />
          ))}
        </div>

        {guides.length === 0 && (
          <div className="text-center py-12">
            <p className="text-ink-soft text-lg">More guides coming soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}
