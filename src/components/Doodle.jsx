// Doodle.jsx — hand-drawn SVG accent set for the "Warm Studio" language.
// Every path is deliberately wobbly/imperfect (multiple slight curve deviations)
// so it reads as drawn by hand, not geometric. Decorative only (aria-hidden).
//
// Usage:
//   <Doodle variant="squiggle-underline" color="accent"
//     className="absolute left-0 -bottom-3 w-full h-4" />
//   <Doodle variant="sparkle" color="butter" className="w-6 h-6" />

const COLORS = {
  accent: 'var(--color-accent)',
  ink: 'var(--color-ink)',
  peach: 'var(--color-peach)',
  mint: '#7FB89A',        // deeper mint so a stroke reads on cream
  butter: '#E0A93B',      // deeper butter for stroke contrast
  sky: '#6F9CBC',
}

const STROKE = {
  fill: 'none',
  strokeWidth: 2.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function resolve(color) {
  return COLORS[color] || color || COLORS.accent
}

export default function Doodle({ variant = 'squiggle-underline', color = 'accent', className = '' }) {
  const stroke = resolve(color)
  const common = {
    'aria-hidden': 'true',
    focusable: 'false',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: { display: 'block', overflow: 'visible' },
  }

  switch (variant) {
    case 'squiggle-underline':
      return (
        <svg viewBox="0 0 200 22" {...common}>
          {/* wobbly, uneven baseline underline */}
          <path
            d="M5,13 C26,5 41,18 62,11 C82,4.5 97,17 119,12 C139,7.5 156,17.5 176,10 C185,6.5 192,10 197,13"
            stroke={stroke}
            {...STROKE}
          />
        </svg>
      )

    case 'circle':
      return (
        <svg viewBox="0 0 210 92" {...common}>
          {/* hand-drawn oval that overshoots and doesn't perfectly close */}
          <path
            d="M158,16 C104,3 44,7 24,32 C6,54 26,79 92,84 C160,89 196,66 190,40 C185,19 154,11 132,11 C120,11 112,13 108,15"
            stroke={stroke}
            {...STROKE}
          />
        </svg>
      )

    case 'arrow-curve':
      return (
        <svg viewBox="0 0 120 96" {...common}>
          {/* curving shaft with a slightly crooked arrowhead */}
          <path
            d="M10,14 C22,50 44,74 84,80 C90,81 96,80 101,78"
            stroke={stroke}
            {...STROKE}
          />
          <path
            d="M82,64 C89,72 96,77 103,79 C99,71 96,63 96,53"
            stroke={stroke}
            {...STROKE}
          />
        </svg>
      )

    case 'sparkle':
      return (
        <svg viewBox="0 0 60 60" {...common}>
          {/* four-point shine with two little twinkle dots */}
          <path
            d="M30,6 C31,20 33,26 47,30 C33,34 31,40 30,54 C29,40 27,34 13,30 C27,26 29,20 30,6 Z"
            stroke={stroke}
            {...STROKE}
          />
          <path d="M50,10 C50.5,15 51,16 55,17 C51,18 50.5,19 50,23" stroke={stroke} {...STROKE} strokeWidth={2.25} />
        </svg>
      )

    case 'star':
      return (
        <svg viewBox="0 0 60 60" {...common}>
          {/* five-point star with a hand-drawn wobble on each edge */}
          <path
            d="M30,5 C33,17 35,21 47,22 C39,29 36,32 39,44 C33,38 27,38 21,44 C24,32 21,29 13,22 C25,21 27,17 30,5 Z"
            stroke={stroke}
            {...STROKE}
          />
        </svg>
      )

    case 'asterisk':
      return (
        <svg viewBox="0 0 42 42" {...common}>
          {/* three crossing strokes, each slightly bent */}
          <path d="M21,5 C20,15 20,27 21,37" stroke={stroke} {...STROKE} />
          <path d="M7,13 C16,18 26,24 35,29" stroke={stroke} {...STROKE} />
          <path d="M35,13 C26,18 16,24 7,29" stroke={stroke} {...STROKE} />
        </svg>
      )

    case 'loop':
      return (
        <svg viewBox="0 0 90 60" {...common}>
          {/* looping ribbon that crosses itself, dashed for a sketchy feel */}
          <path
            d="M6,42 C18,20 40,10 52,24 C61,35 46,50 36,42 C28,35 40,18 62,16 C76,15 84,26 84,38"
            stroke={stroke}
            {...STROKE}
            strokeDasharray="1 7"
          />
        </svg>
      )

    default:
      return (
        <svg viewBox="0 0 200 22" {...common}>
          <path
            d="M5,13 C26,5 41,18 62,11 C82,4.5 97,17 119,12 C139,7.5 156,17.5 176,10 C185,6.5 192,10 197,13"
            stroke={stroke}
            {...STROKE}
          />
        </svg>
      )
  }
}
