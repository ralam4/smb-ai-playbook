import { useEffect, useRef } from 'react'

export default function GlowCard({ children, className = '', glowHue = 25 }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const syncPointer = (e) => {
      const { clientX: x, clientY: y } = e
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2))
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2))
        cardRef.current.style.setProperty('--y', y.toFixed(2))
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2))
      }
    }
    document.addEventListener('pointermove', syncPointer)
    return () => document.removeEventListener('pointermove', syncPointer)
  }, [])

  return (
    <div
      ref={cardRef}
      data-glow
      style={{ '--glow-hue': glowHue }}
      className={`relative rounded-2xl ${className}`}
    >
      <div className="glow-inner" />
      {children}
    </div>
  )
}
