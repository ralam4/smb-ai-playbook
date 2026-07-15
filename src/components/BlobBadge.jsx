// BlobBadge.jsx — a Fraunces numeral (or short glyph) sitting on a small rotated
// organic blob. This is the replacement for every mono "01 / 02 / 03" pill.
// Decorative blob is aria-hidden; the numeral stays readable (ink on pastel).
//
// Usage:
//   <BlobBadge n={1} color="peach" />
//   <BlobBadge n="A" color="mint" size={64} />

import Blob from './Blob'

// Each color gets a distinct blob variant + rotation so a 1/2/3 row feels hand-placed.
const STYLES = {
  peach: { variant: 1, rotate: '-8deg' },
  mint: { variant: 4, rotate: '7deg' },
  butter: { variant: 2, rotate: '-5deg' },
}

export default function BlobBadge({ n, color = 'peach', size = 56, className = '' }) {
  const style = STYLES[color] || STYLES.peach
  const fontSize = Math.round(size * 0.46)

  return (
    <span
      className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{ transform: `rotate(${style.rotate})` }}
      >
        <Blob variant={style.variant} color={color} className="w-full h-full" />
      </span>
      <span
        className="relative font-[--font-display] font-semibold text-ink leading-none"
        style={{ fontSize }}
      >
        {n}
      </span>
    </span>
  )
}
