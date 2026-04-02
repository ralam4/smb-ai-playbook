import GridPattern from './GridPattern'

export default function ArchetypeIntro({ onStart }) {
  return (
    <section className="relative overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-transparent to-transparent pointer-events-none" />

      {/* Grid pattern background — same as homepage hero */}
      <GridPattern
        width={48}
        height={48}
        x={-1}
        y={-1}
        className="fill-accent/[0.03] stroke-border-strong/40 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_20%,transparent_80%)]"
        squares={[
          [2, 3], [5, 1], [8, 5], [3, 7], [12, 2],
          [7, 8], [15, 4], [10, 6], [4, 10], [13, 8],
          [1, 5], [9, 2], [6, 9], [11, 3], [14, 7],
        ]}
      />

      <div className="relative z-10">
        {/* Hero text */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-14 sm:pb-16 text-center">
          <div className="animate-fade-up flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              AI Archetype
            </p>
            <div className="h-px w-8 bg-accent" />
          </div>

          <h1 className="animate-fade-up delay-1 font-[--font-display] text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl text-text-primary leading-[1.1] max-w-3xl mx-auto">
            The best way to use AI starts with{' '}
            <em className="font-[--font-display] italic text-accent">understanding yourself.</em>
          </h1>

          <p className="animate-fade-up delay-2 mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
            Everyone says &ldquo;use AI.&rdquo; Nobody tells you <strong className="text-text-primary font-semibold">how it fits the way you already think and work.</strong> This 2-minute assessment changes that.
          </p>
        </div>

        {/* Why it matters — 3 cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-14 sm:pb-16">
          <div className="animate-fade-up delay-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Not about AI knowledge',
                body: "We don't ask what tools you use or how much you know. We ask how you naturally work, think, and make decisions.",
              },
              {
                num: '02',
                title: 'Your work style \u2192 AI fit',
                body: "Your instincts aren't random. They map to specific AI strengths. The quiz reveals which ones are yours.",
              },
              {
                num: '03',
                title: 'Actionable, not abstract',
                body: 'You get a specific archetype with your AI edge, your blind spot, and guides matched to how you operate.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-2xl glass glass-shadow p-6 sm:p-7"
              >
                <span className="font-[--font-mono] text-xs font-medium text-accent bg-accent-light/60 rounded-md px-2 py-1">
                  {item.num}
                </span>
                <h3 className="font-[--font-display] text-lg text-text-primary mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What you'll discover */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
          <div className="animate-fade-up delay-4 rounded-2xl glass glass-shadow-lg p-8 sm:p-10">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary/60 mb-4">
                What you&rsquo;ll discover
              </p>
              <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mb-4">
                One of four archetypes. Yours.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8 max-w-lg mx-auto">
                Each archetype reveals how you process information and create value &mdash; and exactly where AI becomes a force multiplier for the way you already work.
              </p>

              {/* Four archetype preview pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {[
                  { name: 'The Architect', color: '#8B6914', bg: '#F5EDD6' },
                  { name: 'The Alchemist', color: '#5C4A7A', bg: '#EDE8F5' },
                  { name: 'The Conductor', color: '#2D6A4F', bg: '#E8F5EE' },
                  { name: 'The Oracle', color: '#1D3557', bg: '#E4EAF5' },
                ].map((type) => (
                  <span
                    key={type.name}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border"
                    style={{
                      borderColor: type.color + '30',
                      backgroundColor: type.bg,
                      color: type.color,
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: type.color }}
                    />
                    {type.name}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={onStart}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                Start the Quiz
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="mt-4 text-xs text-text-secondary/60">
                12 questions &middot; 2 minutes &middot; No signup required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
