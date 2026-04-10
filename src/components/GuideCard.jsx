import { Link } from 'react-router-dom'
import GlowCard from './GlowCard'
import UpvoteButton from './UpvoteButton'

const hueMap = {
  '#2D6A4F': 145,
  '#1D3557': 215,
  '#C4622D': 25,
  '#7C3AED': 270,
  '#92400E': 30,
  '#0D9488': 170,
  '#4338CA': 240,
  '#1A7F8A': 185,
  '#B45309': 35,
  '#4A5568': 210,
  '#DC2626': 0,
  '#16A34A': 140,
}

export default function GuideCard({ guide, className = '', voteCount = 0, hasVoted = false, onToggleVote, sectionAccent }) {
  const glowHue = hueMap[guide.tagColor] ?? 25
  const accentColor = sectionAccent || guide.tagColor

  return (
    <GlowCard glowHue={glowHue} className={className}>
      <Link
        to={`/guide/${guide.slug}`}
        className="group flex flex-col rounded-2xl p-6 sm:p-7 no-underline transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden h-full glass glass-shadow glass-card-hover"
      >
        {/* Accent top bar on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}88)` }}
        />

        {/* Tag row */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: guide.tagColor }}
          >
            {guide.tag}
          </span>
          {onToggleVote && (
            <UpvoteButton
              count={voteCount}
              voted={hasVoted}
              onToggle={() => onToggleVote(guide.slug)}
              accentColor={accentColor}
            />
          )}
        </div>

        {/* Title */}
        <h3 className="font-[--font-display] text-[22px] sm:text-2xl text-text-primary mb-3 group-hover:text-accent transition-colors duration-200 leading-snug">
          {guide.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-[15px] text-text-secondary leading-relaxed mb-6 line-clamp-3">
          {guide.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
          <div className="flex items-center gap-2.5 text-xs text-text-secondary">
            <span className="px-2.5 py-1 rounded-full bg-accent-light/50 text-accent font-semibold">
              {guide.difficulty}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {guide.time}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span>Open</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </Link>
    </GlowCard>
  )
}
