import { PRO_PRICE_DISPLAY } from '../config/pro'

export default function ProBadge({ size = 'sm', className = '' }) {
  const sizeClasses = size === 'lg'
    ? 'text-xs px-3 py-1'
    : 'text-[10px] px-2.5 py-1'

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-wider rounded-full bg-accent text-white ${sizeClasses} ${className}`}
    >
      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
      </svg>
      Pro · {PRO_PRICE_DISPLAY}
    </span>
  )
}
