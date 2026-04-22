import { Link } from 'react-router-dom'
import GlowCard from './GlowCard'
import UpvoteButton from './UpvoteButton'
import ProBadge from './ProBadge'
import industries from '../data/industries'

const PROBLEM_TAGS = {
  'get-customers': { label: 'Get Customers', color: '#D97706' },
  'fix-profits': { label: 'Fix Profits', color: '#059669' },
  'fix-operations': { label: 'Fix Operations', color: '#4F6D7A' },
  'scale-up': { label: 'Scale Up', color: '#7C3AED' },
}

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
  '#D97706': 35,
  '#059669': 155,
  '#4F6D7A': 200,
  '#1D4ED8': 220,
  '#EA580C': 20,
  '#0EA5E9': 200,
}

function getTagInfo(guide) {
  if (guide.tier === 'pro' && guide.industry) {
    const ind = industries.find((i) => i.slug === guide.industry)
    return { label: ind ? ind.name : 'Pro', color: ind ? ind.color : '#C4622D' }
  }
  if (guide.problems && guide.problems.length > 0) {
    const p = PROBLEM_TAGS[guide.problems[0]]
    if (p) return p
  }
  if (guide.tag) return { label: guide.tag, color: guide.tagColor || '#C4622D' }
  return { label: 'Guide', color: '#C4622D' }
}

export default function GuideCard({ guide, className = '', voteCount = 0, hasVoted = false, onToggleVote, sectionAccent }) {
  const tagInfo = getTagInfo(guide)
  const glowHue = hueMap[tagInfo.color] ?? 25
  const accentColor = sectionAccent || tagInfo.color
  const isPro = guide.tier === 'pro'

  return (
    <GlowCard glowHue={glowHue} className={className}>
      <Link
        to={`/guide/${guide.slug}`}
        className={`group flex flex-col rounded-2xl p-6 sm:p-7 no-underline transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden h-full glass glass-shadow glass-card-hover ${isPro ? 'ring-1 ring-accent/20' : ''}`}
      >
        {/* Accent top bar on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}88)` }}
        />

        {/* Tag row */}
        <div className="flex items-start justify-between gap-2 mb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
              style={{ backgroundColor: tagInfo.color }}
            >
              {tagInfo.label}
            </span>
            {isPro && <ProBadge />}
          </div>
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
