import { Link } from 'react-router-dom'
import AgentIcon from './AgentIcon'
import Blob from './Blob'

// Fixed rotation/variant per palette color so a row of agent logos feels
// hand-placed, the same trick BlobBadge uses for step numerals.
const LOGO_STYLES = {
  peach: { variant: 1, rotate: '-6deg' },
  mint: { variant: 4, rotate: '5deg' },
  butter: { variant: 2, rotate: '-4deg' },
}

// AgentIcon centered on a small tinted Blob — an agent's "logo," reused on
// cards, blueprint headers, and (later) the PDF cover eyebrow.
export function AgentLogo({ icon, color = 'peach', size = 48, iconSize = 22, className = '' }) {
  const style = LOGO_STYLES[color] || LOGO_STYLES.peach
  return (
    <span
      className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <span aria-hidden="true" className="absolute inset-0" style={{ transform: `rotate(${style.rotate})` }}>
        <Blob variant={style.variant} color={color} className="w-full h-full" />
      </span>
      <AgentIcon variant={icon} size={iconSize} className="relative text-ink" />
    </span>
  )
}

const CARD_COLORS = ['peach', 'mint', 'butter']

export default function AgentCard({ agent, unlocked = false, colorIndex = 0, className = '' }) {
  const color = CARD_COLORS[((colorIndex % CARD_COLORS.length) + CARD_COLORS.length) % CARD_COLORS.length]

  return (
    <Link
      to={`/agents/${agent.industry}/${agent.slug}`}
      className={`group soft-card soft-card-hover p-6 sm:p-7 no-underline flex flex-col h-full ${className}`}
    >
      <div className="flex items-start justify-between gap-3 mb-5">
        <AgentLogo icon={agent.icon} color={color} size={48} iconSize={22} />
        {unlocked && (
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-mint-light text-ink flex-shrink-0">
            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Unlocked
          </span>
        )}
      </div>

      <h3 className="font-[--font-display] font-semibold text-xl text-ink mb-2 leading-snug group-hover:text-accent transition-colors">
        {agent.name}
      </h3>

      <p className="text-[15px] text-ink-soft leading-relaxed mb-6 flex-1">
        {agent.tagline}
      </p>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-ink-soft mt-auto pt-4 border-t border-border">
        <span className="px-2.5 py-1 rounded-full bg-accent-light text-accent font-semibold">
          {agent.difficulty}
        </span>
        <span>{agent.buildTime}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{agent.runningCost}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{agent.timeSaved} saved</span>
      </div>
    </Link>
  )
}
