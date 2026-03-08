import GuideCard from '../components/GuideCard'
import guides from '../data/guides'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grain">
        {/* Warm radial gradient behind hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="animate-fade-up flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Free Resource &middot; Built in Public
            </p>
          </div>

          <h1 className="animate-fade-up delay-1 font-[--font-display] text-[2.5rem] sm:text-5xl md:text-[3.75rem] lg:text-7xl text-text-primary leading-[1.08] max-w-2xl">
            AI that{' '}
            <em className="font-[--font-display] italic text-accent">actually</em>{' '}
            helps your small business.
          </h1>

          <p className="animate-fade-up delay-2 mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg">
            Most AI advice is written for companies with engineering teams.
            This is built for the owner who has <strong className="text-text-primary font-semibold">real problems to solve</strong> —
            and wants to know exactly what to do about them.
          </p>

          {/* How it works strip */}
          <div className="animate-fade-up delay-3 mt-12 sm:mt-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary/60 mb-4">
              How it works
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
              {[
                { num: '01', text: 'Browse real problems', desc: 'Find the one that matches your business' },
                { num: '02', text: 'Follow the guide', desc: 'Step-by-step, with prompts you can copy' },
                { num: '03', text: 'Use tools you have', desc: 'ChatGPT, Claude — no special software' },
              ].map((step, i) => (
                <div key={step.num} className="flex items-start sm:items-center">
                  {i > 0 && (
                    <div className="hidden sm:block w-px h-12 bg-border mx-6 flex-shrink-0" />
                  )}
                  <div className="flex items-start gap-3 sm:gap-3.5">
                    <span className="font-[--font-mono] text-xs font-medium text-accent bg-accent-light/60 rounded-md px-2 py-1 flex-shrink-0 mt-0.5 sm:mt-0">
                      {step.num}
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-text-primary block sm:inline">
                        {step.text}
                      </span>
                      <span className="text-xs text-text-secondary block sm:hidden mt-0.5">
                        {step.desc}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom edge decoration */}
        <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      </section>

      {/* Problem Library */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px w-6 bg-accent" />
          <p className="animate-fade-up text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            Problem Library
          </p>
        </div>
        <h2 className="animate-fade-up delay-1 font-[--font-display] text-3xl sm:text-4xl text-text-primary mb-3">
          Find your situation.
        </h2>
        <p className="animate-fade-up delay-2 text-text-secondary max-w-lg mb-10 sm:mb-14 leading-relaxed">
          Each guide is built around a specific problem in a specific type of business.
          Click the one that matches yours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {guides.map((guide, i) => (
            <GuideCard
              key={guide.slug}
              guide={guide}
              className={`animate-fade-up delay-${i + 3}`}
            />
          ))}
        </div>
      </section>

      {/* Social proof / trust strip */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <div className="animate-fade-up delay-6 rounded-2xl bg-surface border border-border p-6 sm:p-8 text-center">
          <p className="font-[--font-display] text-xl sm:text-2xl text-text-primary mb-2">
            No signup. No paywall. No &ldquo;schedule a demo.&rdquo;
          </p>
          <p className="text-sm text-text-secondary max-w-md mx-auto">
            Just open a guide, follow the steps, and solve a real problem in your business today.
          </p>
        </div>
      </section>
    </>
  )
}
