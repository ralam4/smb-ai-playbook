import { useState, useEffect, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const categories = [
  { id: 'get-customers', label: 'Get Customers', colorHex: '#D97706' },
  { id: 'fix-profits', label: 'Fix Profits', colorHex: '#059669' },
  { id: 'fix-operations', label: 'Fix Operations', colorHex: '#4F6D7A' },
  { id: 'scale-up', label: 'Scale Up', colorHex: '#7C3AED' },
]

export default function CategoryNav() {
  const [active, setActive] = useState(null)
  const introRef = useScrollReveal()
  const navRef = useRef(null)

  useEffect(() => {
    const sections = categories.map(c => document.getElementById(c.id))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pb-8">
      {/* Section intro — big and confident */}
      <div ref={introRef} className="text-center mb-10 sm:mb-12">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-10 bg-accent/40" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Problem Library
          </p>
          <div className="h-px w-10 bg-accent/40" />
        </div>
        <h2 className="font-[--font-display] text-4xl sm:text-5xl md:text-6xl text-text-primary mb-4 leading-[1.1]">
          Find your situation.
        </h2>
        <p className="text-text-secondary max-w-md mx-auto text-base sm:text-lg leading-relaxed">
          Each guide tackles a real problem. Jump to what matters most.
        </p>
      </div>

      {/* Sticky nav pills */}
      <nav ref={navRef} className="sticky top-20 z-30 py-2">
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 glass-strong glass-shadow-lg rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5">
            {categories.map((cat) => {
              const isActive = active === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  className="relative px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-[13px] sm:text-sm font-semibold transition-all duration-300 cursor-pointer"
                  style={{
                    color: isActive ? '#fff' : 'var(--color-text-secondary)',
                    backgroundColor: isActive ? cat.colorHex : 'transparent',
                    boxShadow: isActive
                      ? `0 4px 16px ${cat.colorHex}35, 0 2px 4px ${cat.colorHex}20`
                      : 'none',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}
