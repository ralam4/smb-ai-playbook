// SectionBand.jsx — section wrapper that alternates background tone for rhythm,
// with an optional gentle SVG wave divider along its top edge.
//
// Usage:
//   <SectionBand tone="sand" wave>
//     <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">…</div>
//   </SectionBand>

const TONES = {
  cream: { bg: 'var(--color-bg)', dark: false },
  sand: { bg: 'var(--color-sand)', dark: false },
  ink: { bg: 'var(--color-ink)', dark: true },
}

export default function SectionBand({
  tone = 'cream',
  wave = false,
  className = '',
  children,
}) {
  const t = TONES[tone] || TONES.cream

  return (
    <section
      className={`relative ${t.dark ? 'text-[#F4EDE1]' : ''} ${className}`}
      style={{ backgroundColor: t.bg }}
    >
      {wave && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-px pointer-events-none leading-[0]"
          style={{ transform: 'translateY(-98%)' }}
        >
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[36px] sm:h-[52px] block"
          >
            {/* gentle, slightly uneven wave — the band color curving up */}
            <path
              d="M0,60 L0,34 C220,6 430,52 680,40 C900,30 1080,2 1440,30 L1440,60 Z"
              fill={t.bg}
            />
          </svg>
        </div>
      )}
      {children}
    </section>
  )
}
