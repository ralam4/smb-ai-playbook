import GuideCard from '../components/GuideCard'
import guides from '../data/guides'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grain">
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary mb-6">
            Free Resource &middot; Built in Public
          </p>
          <h1 className="animate-fade-up delay-1 font-[--font-display] text-4xl sm:text-5xl md:text-6xl text-text-primary leading-[1.1] max-w-xl">
            AI that actually helps your small business.
          </h1>
          <p className="animate-fade-up delay-2 mt-6 text-lg text-text-secondary leading-relaxed max-w-lg">
            Most AI advice is written for companies with engineering teams.
            This is built for the owner who has real problems to solve —
            and wants to know exactly what to do about them.
          </p>

          {/* How it works strip */}
          <div className="animate-fade-up delay-3 mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
            {[
              { num: '01', text: 'Browse real problems' },
              { num: '02', text: 'Follow the step-by-step guide' },
              { num: '03', text: 'Use AI tools you already have' },
            ].map((step, i) => (
              <div key={step.num} className="flex items-center">
                {i > 0 && (
                  <div className="hidden sm:block w-px h-8 bg-border mx-6" />
                )}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-[--font-mono] text-accent font-medium">
                    {step.num}
                  </span>
                  <span className="text-sm text-text-secondary">{step.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Library */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary mb-3">
          Problem Library
        </p>
        <h2 className="animate-fade-up delay-1 font-[--font-display] text-3xl sm:text-4xl text-text-primary mb-3">
          Find your situation.
        </h2>
        <p className="animate-fade-up delay-2 text-text-secondary max-w-lg mb-12">
          Each guide is built around a specific problem in a specific type of business.
          Click the one that matches yours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <GuideCard
              key={guide.slug}
              guide={guide}
              className={`animate-fade-up delay-${i + 3}`}
            />
          ))}
        </div>
      </section>
    </>
  )
}
