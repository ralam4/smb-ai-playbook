import { useState } from 'react'

export default function UpvoteButton({ count, voted, onToggle, accentColor }) {
  const [animating, setAnimating] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAnimating(true)
    onToggle()
    setTimeout(() => setAnimating(false), 300)
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
      style={{
        color: voted ? accentColor : 'var(--color-text-secondary)',
        backgroundColor: voted ? accentColor + '14' : 'var(--color-bg)',
      }}
      aria-label={voted ? 'Remove upvote' : 'Upvote this guide'}
    >
      <svg
        className="w-3 h-3"
        style={{
          animation: animating ? 'upvotePop 0.3s ease-out' : 'none',
          transition: 'transform 0.15s ease',
        }}
        fill={voted ? accentColor : 'none'}
        viewBox="0 0 24 24"
        stroke={voted ? accentColor : 'currentColor'}
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
      <span className="tabular-nums">{count}</span>
    </button>
  )
}
