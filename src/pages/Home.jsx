import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import GuideCard from '../components/GuideCard'
import BusinessFilter from '../components/BusinessFilter'
import GridPattern from '../components/GridPattern'
import guides from '../data/guides'

export default function Home() {
  const [filter, setFilter] = useState('all')
  const [filterMode, setFilterMode] = useState('business')
  const guidesRef = useRef(null)

  const filteredGuides = filter === 'all'
    ? guides
    : filterMode === 'business'
      ? guides.filter((g) => g.tag === filter)
      : guides.filter((g) => g.problems && g.problems.includes(filter))

  const handleModeChange = (mode) => {
    setFilterMode(mode)
    setFilter('all')
  }

  const scrollToGuides = () => {
    guidesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-transparent to-transparent pointer-events-none" />

        {/* Grid pattern background */}
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
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
          <div className="animate-fade-up delay-4 mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={scrollToGuides}
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              Explore the Guides
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Link
              to="/archetype"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer"
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

      {/* Archetype Quiz Teaser */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="glass glass-shadow-lg rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-accent" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                2-Minute Assessment
              </p>
            </div>
            <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mb-3 leading-snug">
              Not sure where to start?
            </h2>
            <p className="text-text-secondary leading-relaxed text-[15px] mb-6 max-w-lg">
              Every business owner uses AI differently. Some are natural strategists. Others are creative improvisers. Find your AI archetype and get guides matched to how you already think and work.
            </p>
            <Link
              to="/archetype"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              Take the Quiz
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 md:max-w-[220px]">
            {[
              { name: 'Architect', color: '#8B6914', bg: '#F5EDD6' },
              { name: 'Alchemist', color: '#5C4A7A', bg: '#EDE8F5' },
              { name: 'Conductor', color: '#2D6A4F', bg: '#E8F5EE' },
              { name: 'Oracle', color: '#1D3557', bg: '#E4EAF5' },
            ].map((type) => (
              <span
                key={type.name}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border backdrop-blur-sm"
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

      {/* Problem Library */}
      <section ref={guidesRef} id="guides" className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px w-6 bg-accent" />
          <p className="animate-fade-up text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            Problem Library
          </p>
        </div>
        <h2 className="animate-fade-up delay-1 font-[--font-display] text-3xl sm:text-4xl text-text-primary mb-3">
          Find your situation.
        </h2>
        <p className="animate-fade-up delay-2 text-text-secondary max-w-lg mb-8 leading-relaxed">
          Each guide is built around a specific problem in a specific type of business.
          Pick yours to filter, or browse them all.
        </p>

        {/* Business type filter */}
        <div className="animate-fade-up delay-3 mb-10">
          <BusinessFilter
            activeFilter={filter}
            onFilterChange={setFilter}
            filterMode={filterMode}
            onModeChange={handleModeChange}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {filteredGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-secondary">No guides for this category yet. More coming soon.</p>
          </div>
        )}
      </section>

    </>
  )
}
