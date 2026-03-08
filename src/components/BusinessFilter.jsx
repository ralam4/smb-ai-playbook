import { useState } from 'react'

const businesses = [
  { id: 'all', label: 'All Guides', icon: null },
  { id: 'Barbershop', label: 'Barbershop', icon: '\u2702\uFE0F' },
  { id: 'Bakery & Caf\u00E9', label: 'Bakery', icon: '\uD83E\uDD50' },
  { id: 'Medical Practice', label: 'Medical', icon: '\uD83E\uDE7A' },
  { id: 'Photographer', label: 'Photographer', icon: '\uD83D\uDCF7' },
  { id: 'Coffee Shop', label: 'Coffee Shop', icon: '\u2615' },
  { id: 'Graphic Designer', label: 'Designer', icon: '\uD83C\uDFA8' },
  { id: 'All Businesses', label: 'Universal', icon: '\u2B50' },
]

export default function BusinessFilter({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {businesses.map((biz) => {
        const isActive = activeFilter === biz.id
        return (
          <button
            key={biz.id}
            onClick={() => onFilterChange(biz.id)}
            className={`
              inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium
              transition-all duration-200 cursor-pointer border
              ${isActive
                ? 'bg-text-primary text-white border-text-primary shadow-sm'
                : 'bg-surface text-text-secondary border-border hover:border-border-strong hover:text-text-primary hover:shadow-sm'
              }
            `}
          >
            {biz.icon && <span className="text-base leading-none">{biz.icon}</span>}
            {biz.label}
          </button>
        )
      })}
    </div>
  )
}
