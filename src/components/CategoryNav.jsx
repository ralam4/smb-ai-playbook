import { useState, useEffect, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import Doodle from './Doodle'

const categories = [
  { id: 'get-customers', label: 'Get Customers', colorHex: '#D97706', chip: 'var(--color-peach-light)' },
  { id: 'fix-profits', label: 'Fix Profits', colorHex: '#059669', chip: 'var(--color-mint-light)' },
  { id: 'fix-operations', label: 'Fix Operations', colorHex: '#4F6D7A', chip: 'var(--color-sky-light)' },
  { id: 'scale-up', label: 'Scale Up', colorHex: '#7C3AED', chip: 'var(--color-butter-light)' },
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
        <div className="flex items-center justify-center gap-2.5 mb-5">
          <Doodle variant="asterisk" color="accent" className="w-4 h-4" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Problem Library
          </p>
        </div>
        <h2 className="font-[--font-display] font-semibold text-4xl sm:text-5xl md:text-6xl text-ink mb-4 leading-[1.1]">
          Find your situation.
        </h2>
        <p className="text-ink-soft max-w-md mx-auto text-base sm:text-lg leading-relaxed">
          Each guide tackles a real problem. Jump to what matters most.
        </p>
      </div>

      {/* Sticky nav pills — warm soft pill bar */}
      <nav ref={navRef} className="sticky top-20 z-30 py-2">
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 soft-card rounded-full px-3 py-2 sm:px-4 sm:py-2.5">
            {categories.map((cat) => {
              const isActive = active === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  className="relative px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-[13px] sm:text-sm font-semibold transition-all duration-300 cursor-pointer"
                  style={{
                    color: isActive ? 'var(--color-ink)' : 'var(--color-ink-soft)',
                    backgroundColor: isActive ? cat.chip : 'transparent',
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
