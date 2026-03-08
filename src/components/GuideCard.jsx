import { Link } from 'react-router-dom'
import GlowCard from './GlowCard'

const hueMap = {
  '#2D6A4F': 145,
  '#1D3557': 215,
  '#C4622D': 25,
}

export default function GuideCard({ guide, className = '' }) {
  const glowHue = hueMap[guide.tagColor] ?? 25

  return (
    <GlowCard glowHue={glowHue} className={className}>
      <Link
        to={`/guide/${guide.slug}`}
        className="group block bg-surface rounded-2xl border border-border/80 p-6 sm:p-7 no-underline transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1.5 relative overflow-hidden h-full"
      >
        {/* Subtle top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, ${guide.tagColor}, ${guide.tagColor}88)` }}
        />

        <div className="flex items-center gap-2.5 mb-5">
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: guide.tagColor }}
          >
            {guide.tag}
          </span>
        </div>

        <h3 className="font-[--font-display] text-[22px] sm:text-2xl text-text-primary mb-2.5 group-hover:text-accent transition-colors leading-snug">
          {guide.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {guide.description}
        </p>

        <div className="flex items-center gap-2.5 text-xs text-text-secondary mb-5">
          <span className="px-2.5 py-1 rounded-full bg-accent-light text-accent font-semibold">
            {guide.difficulty}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {guide.time}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-sm font-semibold text-accent">
          <span className="group-hover:mr-1 transition-all duration-200">Open Guide</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </Link>
    </GlowCard>
  )
}
