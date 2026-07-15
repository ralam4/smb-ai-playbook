import { Link } from 'react-router-dom'
import UpvoteButton from './UpvoteButton'
import ProBadge from './ProBadge'
import industries from '../data/industries'

const PROBLEM_TAGS = {
  'get-customers': { label: 'Get Customers', color: '#D97706', chip: 'var(--color-peach-light)' },
  'fix-profits': { label: 'Fix Profits', color: '#059669', chip: 'var(--color-mint-light)' },
  'fix-operations': { label: 'Fix Operations', color: '#4F6D7A', chip: 'var(--color-sky-light)' },
  'scale-up': { label: 'Scale Up', color: '#7C3AED', chip: 'var(--color-butter-light)' },
}

const FALLBACK_CHIPS = ['var(--color-peach-light)', 'var(--color-mint-light)', 'var(--color-sky-light)', 'var(--color-butter-light)']

function getTagInfo(guide) {
  if (guide.tier === 'pro' && guide.industry) {
    const ind = industries.find((i) => i.slug === guide.industry)
    return {
      label: ind ? ind.name : 'Pro',
      color: ind ? ind.color : '#C4622D',
      chip: FALLBACK_CHIPS[(ind?.name?.length ?? 0) % FALLBACK_CHIPS.length],
    }
  }
  if (guide.problems && guide.problems.length > 0) {
    const p = PROBLEM_TAGS[guide.problems[0]]
    if (p) return p
  }
  if (guide.tag) return { label: guide.tag, color: guide.tagColor || '#C4622D', chip: 'var(--color-accent-light)' }
  return { label: 'Guide', color: '#C4622D', chip: 'var(--color-accent-light)' }
}

export default function GuideCard({ guide, className = '', voteCount = 0, hasVoted = false, onToggleVote, sectionAccent }) {
  const tagInfo = getTagInfo(guide)
  const accentColor = sectionAccent || tagInfo.color
  const isPro = guide.tier === 'pro'

  return (
    <Link
      to={`/guide/${guide.slug}`}
      className={`group soft-card soft-card-hover relative flex flex-col p-6 sm:p-7 no-underline overflow-hidden h-full ${isPro ? 'ring-1 ring-accent/20' : ''} ${className}`}
    >
      {/* Accent top bar on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}88)` }}
      />

      {/* Tag row — pastel chip: soft fill + ink text */}
      <div className="flex items-start justify-between gap-2 mb-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-ink"
            style={{ backgroundColor: tagInfo.chip }}
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
      <h3 className="font-[--font-display] text-[22px] sm:text-2xl text-ink mb-3 group-hover:text-accent transition-colors duration-200 leading-snug">
        {guide.title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-[15px] text-ink-soft leading-relaxed mb-6 line-clamp-3">
        {guide.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
        <div className="flex items-center gap-2.5 text-xs text-ink-soft">
          <span className="px-2.5 py-1 rounded-full bg-accent-light text-accent font-semibold">
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
  )
}
