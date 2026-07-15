// Blob.jsx — inline-SVG organic blob shapes for the "Warm Studio" language.
// Decorative only (aria-hidden). Meant to be absolutely positioned behind
// content inside an `overflow-hidden` parent so it never causes horizontal scroll.
//
// Usage:
//   <Blob variant={3} color="peach" float
//     className="absolute -top-16 -right-10 w-72 h-72 rotate-6 opacity-90" />

const COLORS = {
  peach: 'var(--color-peach)',
  mint: 'var(--color-mint)',
  butter: 'var(--color-butter)',
  sky: 'var(--color-sky)',
  'accent-light': 'var(--color-accent-light)',
}

// Five genuinely different, hand-cut organic silhouettes (viewBox 0 0 200 200).
// None are circles/ellipses — each has an asymmetric, irregular outline.
const PATHS = {
  1: 'M40,72 C38,42 68,22 104,26 C150,31 180,50 176,92 C173,126 190,150 152,172 C112,194 58,184 38,150 C20,120 42,102 40,72 Z',
  2: 'M54,38 C94,24 130,40 150,74 C167,102 148,122 158,152 C168,184 118,188 82,177 C38,163 20,130 27,94 C33,62 30,50 54,38 Z',
  3: 'M100,18 C144,22 178,54 180,102 C182,152 138,182 94,179 C56,176 24,152 20,110 C15,64 56,14 100,18 Z',
  4: 'M72,26 C116,15 162,34 173,80 C182,118 158,142 137,167 C110,197 62,193 40,161 C17,129 24,94 31,68 C37,42 46,32 72,26 Z',
  5: 'M36,98 C29,58 68,28 110,31 C146,34 174,52 179,90 C185,126 166,160 128,171 C93,182 66,177 47,158 C26,137 41,126 36,98 Z',
}

export default function Blob({ variant = 1, color = 'peach', className = '', float = false }) {
  const d = PATHS[variant] || PATHS[1]
  const fill = COLORS[color] || COLORS.peach

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={`${float ? 'blob-float ' : ''}${className}`}
      style={{ display: 'block' }}
    >
      <path d={d} fill={fill} />
    </svg>
  )
}
