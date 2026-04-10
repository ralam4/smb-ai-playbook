import { useEffect, useRef } from 'react'
import GuideCard from './GuideCard'

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
  labelColor,
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
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, ${accentColor}08 0%, transparent 70%),
            linear-gradient(180deg, ${lightColor}18 0%, ${lightColor}30 40%, ${lightColor}18 80%, transparent 100%)
          `,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        {/* Section header */}
        <div ref={headerRef} className="mb-12 sm:mb-16">
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: accentColor }}
            />
            <p
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: labelColor }}
            >
              {label}
            </p>
            <div
              className="h-px flex-1 max-w-24"
              style={{ backgroundColor: accentColor + '25' }}
            />
          </div>

          {/* Big headline — Framer style */}
          <h2 className="font-[--font-display] text-4xl sm:text-5xl md:text-6xl text-text-primary leading-[1.1] mb-4 max-w-2xl">
            {headline}
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-lg text-base sm:text-lg">
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
            <p className="text-text-secondary text-lg">More guides coming soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}
