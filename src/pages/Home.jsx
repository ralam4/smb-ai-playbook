import { Link } from 'react-router-dom'
import GridPattern from '../components/GridPattern'
import useScrollReveal from '../hooks/useScrollReveal'

const problemPreviews = [
  { label: 'Get Customers', color: '#D97706', description: 'Fill your schedule and get noticed' },
  { label: 'Fix Profits', color: '#059669', description: 'Cut waste and price smarter' },
  { label: 'Fix Operations', color: '#4F6D7A', description: 'Streamline and stop drowning' },
  { label: 'Scale Up', color: '#7C3AED', description: 'Grow without the chaos' },
]

export default function Home() {
  const problemsRef = useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-transparent to-transparent pointer-events-none" />

        <GridPattern
          width={48}
          height={48}
          x={-1}
          y={-1}
          className="fill-accent/[0.03] stroke-border-strong/40 [mask-image:radial-gradient(ellipse_80%_70%_at_30%_40%,black_20%,transparent_80%)]"
          squares={[
            [2, 3], [5, 1], [8, 5], [3, 7], [12, 2],
            [7, 8], [15, 4], [10, 6], [4, 10], [13, 8],
            [1, 5], [9, 2], [6, 9], [11, 3], [14, 7],
          ]}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28">
          <div className="animate-fade-up flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              The SMB AI Playbook
            </p>
          </div>

          <h1 className="animate-fade-up delay-1 font-[--font-display] text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[1.05] max-w-3xl">
            AI that{' '}
            <em className="font-[--font-display] italic text-accent">actually</em>{' '}
            helps your small business.
          </h1>

          <p className="animate-fade-up delay-2 mt-8 sm:mt-10 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
            Most AI advice is written for companies with engineering teams.
            This is built for the owner who has <strong className="text-text-primary font-semibold">real problems to solve</strong> —
            free guides to start, and end-to-end consulting when the problem is bigger than a guide can solve.
          </p>

          {/* How it works strip */}
          <div className="animate-fade-up delay-3 mt-14 sm:mt-18">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary/60 mb-5">
              How it works
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              {[
                { num: '01', text: 'Browse real problems', desc: 'Find the one that matches your business' },
                { num: '02', text: 'Follow the guide', desc: 'Step-by-step, with prompts you can copy' },
                { num: '03', text: 'Use tools you have', desc: 'ChatGPT, Claude \u2014 no special software' },
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

          {/* Hero CTAs */}
          <div className="animate-fade-up delay-4 mt-12 sm:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/guides"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              Explore the Guides
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/archetype"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer"
            >
              Discover Your AI Archetype
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      </section>

      {/* Three ways to use this — Free / Pro / Consulting */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Three ways to use this
          </p>
          <h2 className="font-[--font-display] text-3xl sm:text-5xl text-text-primary leading-[1.1] max-w-2xl mx-auto">
            Free guides for everyone. Deeper help when you need it.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link
            to="/guides"
            className="group glass glass-shadow rounded-2xl p-8 sm:p-10 no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col"
          >
            <span className="font-[--font-mono] text-xs font-medium text-accent bg-accent-light/60 rounded-md px-2 py-1 self-start mb-4">
              01 &middot; Free
            </span>
            <h3 className="font-[--font-display] text-2xl text-text-primary mb-4 leading-snug group-hover:text-accent transition-colors">
              Beginner Playbook
            </h3>
            <p className="text-[15px] sm:text-base text-text-secondary leading-[1.7] mb-6 flex-1">
              Step-by-step guides for the problems that keep small business owners up at night. Free, no signup required.
            </p>
            <span className="text-sm font-semibold text-accent inline-flex items-center gap-1.5">
              Browse guides
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>

          <div className="glass glass-shadow rounded-2xl p-8 sm:p-10 flex flex-col">
            <span className="font-[--font-mono] text-xs font-medium text-accent bg-accent-light/60 rounded-md px-2 py-1 self-start mb-4">
              02 &middot; Pro
            </span>
            <h3 className="font-[--font-display] text-2xl text-text-primary mb-4 leading-snug">
              Pro Guides
            </h3>
            <p className="text-[15px] sm:text-base text-text-secondary leading-[1.7] mb-6 flex-1">
              Intermediate and advanced playbooks — multi-step frameworks, industry-specific prompt sequences, downloadable templates.
            </p>
            <span className="text-sm font-medium text-text-secondary/70 inline-flex items-center gap-1.5">
              Coming soon
            </span>
          </div>

          <Link
            to="/contact"
            className="group glass glass-shadow rounded-2xl p-8 sm:p-10 no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col"
          >
            <span className="font-[--font-mono] text-xs font-medium text-accent bg-accent-light/60 rounded-md px-2 py-1 self-start mb-4">
              03 &middot; Consulting
            </span>
            <h3 className="font-[--font-display] text-2xl text-text-primary mb-4 leading-snug group-hover:text-accent transition-colors">
              Work with Rafee
            </h3>
            <p className="text-[15px] sm:text-base text-text-secondary leading-[1.7] mb-6 flex-1">
              End-to-end AI consulting when the problem is bigger than a guide can solve. Scoping, implementation, ongoing support.
            </p>
            <span className="text-sm font-semibold text-accent inline-flex items-center gap-1.5">
              Work with me
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent max-w-5xl mx-auto" />

      {/* Problem Preview — Visual bridge to Guides page */}
      <section ref={problemsRef} className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
            What are you dealing with?
          </p>
          <h2 className="font-[--font-display] text-3xl sm:text-5xl md:text-6xl text-text-primary leading-[1.1] mb-5">
            Real problems. Real solutions.
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            25 step-by-step guides organized around the problems that keep small business owners up at night.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto mb-12">
          {problemPreviews.map((problem) => (
            <Link
              key={problem.label}
              to="/guides"
              className="group glass glass-shadow rounded-2xl p-6 sm:p-7 no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: problem.color }}
                />
                <span className="font-semibold text-text-primary text-base sm:text-lg group-hover:text-accent transition-colors">
                  {problem.label}
                </span>
              </div>
              <p className="text-sm sm:text-[15px] text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/guides"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          >
            Browse All Guides
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent max-w-5xl mx-auto" />

      {/* Archetype Quiz Teaser */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="glass glass-shadow-lg rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-6 bg-accent" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                2-Minute Assessment
              </p>
            </div>
            <h2 className="font-[--font-display] text-3xl sm:text-4xl md:text-5xl text-text-primary mb-4 leading-snug">
              Not sure where to start?
            </h2>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg mb-8 max-w-lg">
              Every business owner uses AI differently. Some are natural strategists. Others are creative improvisers. Find your AI archetype and get guides matched to how you already think and work.
            </p>
            <Link
              to="/archetype"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              Take the Quiz
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:max-w-[240px]">
            {[
              { name: 'Architect', color: '#8B6914', bg: '#F5EDD6' },
              { name: 'Alchemist', color: '#5C4A7A', bg: '#EDE8F5' },
              { name: 'Conductor', color: '#2D6A4F', bg: '#E8F5EE' },
              { name: 'Oracle', color: '#1D3557', bg: '#E4EAF5' },
            ].map((type) => (
              <span
                key={type.name}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium border backdrop-blur-sm"
                style={{
                  borderColor: type.color + '30',
                  backgroundColor: type.bg + 'cc',
                  color: type.color,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: type.color }} />
                {type.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
