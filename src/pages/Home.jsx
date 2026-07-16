import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import Blob from '../components/Blob'
import Doodle from '../components/Doodle'
import BlobBadge from '../components/BlobBadge'
import SectionBand from '../components/SectionBand'
import architectImg from '../assets/mascots/architect.png'
import { AGENTS_PRICE_DISPLAY } from '../config/agents'

// Pastel chip treatment for the 4 problem categories: soft fill + deep-ink text.
const problemPreviews = [
  { label: 'Get Customers', chip: 'bg-peach-light', dot: 'var(--color-peach)', description: 'Fill your schedule and get noticed.' },
  { label: 'Fix Profits', chip: 'bg-mint-light', dot: 'var(--color-mint)', description: 'Cut waste and price smarter.' },
  { label: 'Fix Operations', chip: 'bg-sky-light', dot: 'var(--color-sky)', description: 'Streamline and stop drowning.' },
  { label: 'Scale Up', chip: 'bg-butter-light', dot: 'var(--color-butter)', description: 'Grow without the chaos.' },
]

const howItWorks = [
  {
    n: 1,
    color: 'peach',
    doodle: 'star',
    title: 'Browse real problems',
    desc: 'Find the one that matches your business — no jargon, no tech-speak.',
  },
  {
    n: 2,
    color: 'mint',
    doodle: 'arrow-curve',
    title: 'Follow the guide',
    desc: 'Step-by-step, with prompts you can copy and paste as-is.',
  },
  {
    n: 3,
    color: 'butter',
    doodle: 'sparkle',
    title: 'Use tools you have',
    desc: 'ChatGPT, Claude — no special software, no engineering team.',
  },
]

const threeWays = [
  {
    n: 1, color: 'peach', to: '/guides', title: 'Beginner Playbook', cta: 'Browse guides',
    tag: 'Free',
    body: 'Step-by-step guides for the problems that keep small business owners up at night. Free, no signup required.',
  },
  {
    n: 2, color: 'mint', to: '/pro', title: 'Pro Guides', cta: 'Browse libraries',
    tag: 'Pro',
    body: 'Industry-specific playbooks — multi-step frameworks, prompts, and templates built for your business type. $5 per guide.',
  },
  {
    n: 3, color: 'butter', to: '/contact', title: 'Work with Rafee', cta: 'Work with me',
    tag: 'Consulting',
    body: 'End-to-end AI consulting when the problem is bigger than a guide can solve. Scoping, implementation, ongoing support.',
  },
]

const Arrow = () => (
  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default function Home() {
  const problemsRef = useScrollReveal()

  return (
    <>
      {/* ── Hero ── blob composition + doodle-underlined key word */}
      <section className="relative overflow-hidden grain">
        {/* Organic blob composition (distinct from About's photo-led hero) */}
        <Blob variant={1} color="peach" float className="absolute -top-24 -right-16 w-[26rem] h-[26rem] opacity-90 pointer-events-none" />
        <Blob variant={4} color="mint" float className="absolute top-40 -left-24 w-80 h-80 opacity-70 pointer-events-none" />
        <Blob variant={2} color="butter" className="absolute bottom-4 right-1/3 w-40 h-40 opacity-60 rotate-12 pointer-events-none hidden sm:block" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28">
          <div className="animate-fade-up flex items-center gap-2.5 mb-8">
            <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              The SMB AI Playbook
            </p>
          </div>

          <h1 className="animate-fade-up delay-1 font-[--font-display] font-semibold text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-ink leading-[1.02] tracking-[-0.01em] max-w-3xl">
            AI that{' '}
            <span className="relative inline-block">
              <em className="font-[--font-display] italic text-accent">actually</em>
              <Doodle variant="squiggle-underline" color="accent" className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-3 sm:h-4" />
            </span>{' '}
            helps your small business.
          </h1>

          <p className="animate-fade-up delay-2 mt-9 sm:mt-11 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-xl">
            Most AI advice is written for companies with engineering teams.
            This is built for the owner who has <strong className="text-ink font-semibold">real problems to solve</strong> —
            free guides to start, and end-to-end consulting when the problem is bigger than a guide can solve.
          </p>

          {/* Hero CTAs */}
          <div className="animate-fade-up delay-3 mt-11 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/guides"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              Explore the Guides
              <Arrow />
            </Link>
            <Link
              to="/archetype"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer"
            >
              Discover Your AI Archetype
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ── 3 soft cards with BlobBadges + spot doodles */}
      <SectionBand tone="sand" wave className="overflow-hidden">
        <Blob variant={3} color="peach" className="absolute -right-20 top-10 w-72 h-72 opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
              How it works
            </p>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.08] max-w-2xl mx-auto">
              Three steps. No engineering degree required.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {howItWorks.map((step) => (
              <div key={step.n} className="soft-card soft-card-hover relative p-8 flex flex-col overflow-hidden">
                <Doodle variant={step.doodle} color={step.color} className="absolute top-6 right-6 w-7 h-7 opacity-80" />
                <BlobBadge n={step.n} color={step.color} size={60} className="mb-6" />
                <h3 className="font-[--font-display] font-semibold text-xl text-ink mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[15px] text-ink-soft leading-[1.7]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionBand>

      {/* ── Three ways to use this ── soft cards */}
      <section className="relative overflow-hidden">
        <Blob variant={5} color="sky" className="absolute -left-24 bottom-0 w-80 h-80 opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
              Three ways to use this
            </p>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1] max-w-2xl mx-auto">
              Free guides for everyone. Deeper help when you need it.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {threeWays.map((way) => (
              <Link
                key={way.to}
                to={way.to}
                className="group soft-card soft-card-hover p-8 sm:p-9 no-underline flex flex-col cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-6">
                  <BlobBadge n={way.n} color={way.color} size={52} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                    {way.tag}
                  </span>
                </div>
                <h3 className="font-[--font-display] font-semibold text-2xl text-ink mb-3 leading-snug group-hover:text-accent transition-colors">
                  {way.title}
                </h3>
                <p className="text-[15px] text-ink-soft leading-[1.7] mb-6 flex-1">
                  {way.body}
                </p>
                <span className="text-sm font-semibold text-accent inline-flex items-center gap-1.5">
                  {way.cta}
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent Packs promo ── slim band, new premium tier */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <Link
            to="/agents"
            className="group relative soft-card soft-card-hover no-underline overflow-hidden flex flex-col sm:flex-row items-center gap-6 p-7 sm:p-9 cursor-pointer"
          >
            <Blob variant={2} color="mint" className="absolute -left-14 -top-14 w-48 h-48 opacity-40 pointer-events-none" />
            <div className="relative flex items-center gap-2.5 flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-mint-light text-ink">
                <Doodle variant="sparkle" color="mint" className="w-3.5 h-3.5" />
                New &middot; Agent Packs
              </span>
            </div>
            <p className="relative flex-1 text-[15px] sm:text-lg text-ink leading-relaxed">
              Not another chatbot subscription — blueprints to build an{' '}
              <strong className="font-semibold">AI employee</strong> that runs one job in your business every
              day. {AGENTS_PRICE_DISPLAY} per pack, 3 blueprints included.
            </p>
            <span className="relative flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Explore Agent Packs
              <Arrow />
            </span>
          </Link>
        </div>
      </section>

      {/* ── Problem preview ── pastel-chip soft cards */}
      <SectionBand tone="sand" wave className="overflow-hidden">
        <Blob variant={2} color="mint" className="absolute -right-16 -top-8 w-72 h-72 opacity-30 pointer-events-none" />
        <div ref={problemsRef} className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
              What are you dealing with?
            </p>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl md:text-6xl text-ink leading-[1.08] mb-5">
              Real problems.{' '}
              <span className="relative inline-block">
                <em className="font-[--font-display] italic text-accent">Real</em>
                <Doodle variant="squiggle-underline" color="accent" className="absolute left-0 -bottom-2 w-full h-3" />
              </span>{' '}
              solutions.
            </h2>
            <p className="text-ink-soft text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              25 step-by-step guides organized around the problems that keep small business owners up at night.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto mb-12">
            {problemPreviews.map((problem) => (
              <Link
                key={problem.label}
                to="/guides"
                className="group soft-card soft-card-hover p-6 sm:p-7 no-underline cursor-pointer"
              >
                <span className={`inline-flex items-center gap-2 rounded-full ${problem.chip} px-3.5 py-1.5 mb-4`}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: problem.dot }} />
                  <span className="text-[13px] font-semibold text-ink">{problem.label}</span>
                </span>
                <p className="text-[15px] text-ink-soft leading-relaxed group-hover:text-ink transition-colors">
                  {problem.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/guides"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              Browse All Guides
              <Arrow />
            </Link>
          </div>
        </div>
      </SectionBand>

      {/* ── Archetype quiz teaser ── soft card featuring a mascot */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="relative soft-card overflow-hidden p-8 sm:p-12 flex flex-col md:flex-row items-center gap-10">
            <Blob variant={1} color="butter" className="absolute -left-16 -bottom-16 w-72 h-72 opacity-40 pointer-events-none" />
            <div className="relative flex-1">
              <div className="flex items-center gap-2.5 mb-4">
                <Doodle variant="sparkle" color="accent" className="w-5 h-5" />
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                  2-Minute Assessment
                </p>
              </div>
              <h2 className="font-[--font-display] font-semibold text-3xl sm:text-4xl md:text-5xl text-ink mb-4 leading-[1.08]">
                Not sure where to start?
              </h2>
              <p className="text-ink-soft leading-relaxed text-base sm:text-lg mb-8 max-w-lg">
                Every business owner uses AI differently. Some are natural strategists. Others are creative improvisers. Find your AI archetype and get guides matched to how you already think and work.
              </p>
              <Link
                to="/archetype"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                Take the Quiz
                <Arrow />
              </Link>
            </div>
            <div className="relative flex-shrink-0">
              <Blob variant={3} color="mint" className="absolute inset-0 w-full h-full scale-110 opacity-80 pointer-events-none" />
              <img
                src={architectImg}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={200}
                height={200}
                className="relative w-40 sm:w-48 h-auto drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
