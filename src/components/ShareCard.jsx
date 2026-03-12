import { useRef } from 'react'
import architectImg from '../assets/mascots/architect.png'
import alchemistImg from '../assets/mascots/alchemist.png'
import conductorImg from '../assets/mascots/conductor.png'
import oracleImg from '../assets/mascots/oracle.png'

const imageMap = {
  architect: architectImg,
  alchemist: alchemistImg,
  conductor: conductorImg,
  oracle: oracleImg,
}

export default function ShareCard({ resultType }) {
  const cardRef = useRef(null)
  const src = imageMap[resultType?.id] || architectImg

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 12
    const rotateY = (centerX - x) / 12

    card.style.setProperty('--glow-x', `${x}px`)
    card.style.setProperty('--glow-y', `${y}px`)
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    const card = cardRef.current
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    card.style.setProperty('--glow-x', '50%')
    card.style.setProperty('--glow-y', '50%')
  }

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px); }
          50% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-8px); }
        }
        .share-card-wrapper {
          animation: float 3.5s ease-in-out infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .share-card-wrapper:hover {
          animation: none;
        }
      `}</style>
      <div className="share-card-wrapper" style={{ perspective: '1000px' }}>
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-[20px] shadow-xl cursor-grab active:cursor-grabbing"
          style={{
            transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={src}
            alt={resultType?.id || 'archetype'}
            className="w-full h-auto block pointer-events-none select-none"
            draggable={false}
          />

          {/* Dynamic glow that follows the cursor */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 hover-parent-glow"
            style={{
              background: 'radial-gradient(circle 300px at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255,255,255,0.2) 0%, transparent 70%)',
              mixBlendMode: 'overlay',
            }}
          />

          {/* Subtle iridescent sheen overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle 400px at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255,255,255,0.08) 0%, transparent 60%)',
              mixBlendMode: 'soft-light',
            }}
          />
        </div>
      </div>
    </>
  )
}
