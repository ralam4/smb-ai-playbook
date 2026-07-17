import { Link } from 'react-router-dom'
import Blob from '../components/Blob'
import Doodle from '../components/Doodle'
import BlobBadge from '../components/BlobBadge'
import SectionBand from '../components/SectionBand'
import useSEO from '../hooks/useSEO'
import rafeeImg from '../assets/rafee.png'

const credentials = [
  {
    n: 1,
    color: 'peach',
    title: 'Product strategy, for real stakes',
    text: '8+ years owning products end-to-end — roadmaps, pricing, go-to-market — across consumer tech, semiconductors, and government. The strategies I’ve built have driven $50M+ in pipeline for some of the biggest technology companies in the world.',
  },
  {
    n: 2,
    color: 'mint',
    title: 'AI that runs in production',
    text: 'Not AI as a talking point — AI as shipped systems. I’ve architected an AI-enabled reporting platform used by 10,000+ federal employees, built GenAI data pipelines that cut testing cycles by 60%, and led agentic-AI strategy for enterprise clients before it had a buzzword.',
  },
  {
    n: 3,
    color: 'butter',
    title: 'An engineer’s bias toward shipping',
    text: 'Electrical engineer by training (ASU), PMP-certified, and a former semiconductor product manager with 21M+ units shipped. The Playbook is built the same way — every guide and agent blueprint is something I’d hand a real owner and expect them to use Monday morning.',
  },
]

const stats = [
  { value: '8+', label: 'years in product & AI strategy' },
  { value: '$50M+', label: 'pipeline driven by my product strategies' },
  { value: '21M+', label: 'hardware units shipped as a PM' },
  { value: '10,000+', label: 'daily users of an AI platform I built' },
]

const path = [
  {
    n: 1,
    color: 'peach',
    era: 'Engineer',
    text: 'Electrical engineering at Arizona State, then avionics work on the B-2 program — where I learned that complex systems only matter if the people using them can trust them.',
  },
  {
    n: 2,
    color: 'butter',
    era: 'Product manager',
    text: 'Owned a $3.5M sensor portfolio at a global semiconductor manufacturer — 21M+ microphones and sensors shipped into cars and consumer devices, 98% on-time delivery, and hard lessons in margins, suppliers, and pricing.',
  },
  {
    n: 3,
    color: 'mint',
    era: 'AI builder',
    text: 'Modernized legacy federal systems into AI-enabled platforms serving 10,000+ employees — RAG architecture, GenAI pipelines, and automation that delivered $2M+ in cost savings.',
  },
  {
    n: 4,
    color: 'sky',
    era: 'Strategy consultant',
    text: 'Now a senior strategy consultant at one of the world’s largest consulting firms, leading AI and product strategy for global tech clients — the same frameworks Fortune-scale companies pay for, translated here for the businesses that can’t.',
  },
]

export default function AboutPage() {
  useSEO({
    title: 'About — SMB AI Playbook',
    description:
      'Rafee Alam is a product strategist and AI consultant — 8+ years across consumer tech, semiconductors, and government — bringing enterprise-grade AI strategy to small business owners.',
    canonical: '/about',
  })
  return (
    <>
      {/* ── Photo-led hero (distinct composition: portrait on a peach blob) ── */}
      <section className="relative overflow-hidden grain">
        <Blob variant={4} color="mint" float className="absolute -top-20 -left-24 w-96 h-96 opacity-50 pointer-events-none" />
        <Blob variant={2} color="butter" className="absolute bottom-0 right-10 w-52 h-52 opacity-40 pointer-events-none hidden sm:block" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24 grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-10 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                About
              </p>
            </div>
            <h1 className="font-[--font-display] font-semibold text-[2.75rem] sm:text-6xl md:text-7xl text-ink leading-[1.02] tracking-[-0.01em]">
              I help small businesses{' '}
              <span className="relative inline-block">
                <em className="font-[--font-display] italic text-accent">actually use</em>
                <Doodle variant="squiggle-underline" color="accent" className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-3 sm:h-4" />
              </span>{' '}
              AI.
            </h1>
            <p className="mt-8 sm:mt-10 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl">
              I&rsquo;m Rafee Alam — an electrical engineer turned product manager turned AI strategy consultant. For 8+ years I&rsquo;ve built product and AI strategies for some of the world&rsquo;s biggest technology companies, shipped 21 million+ hardware units as a semiconductor PM, and put AI systems into production for organizations of 10,000+ people. The Playbook exists because small businesses deserve that same caliber of thinking — without the enterprise price tag.
            </p>
          </div>

          {/* Portrait: photo rounded, sitting on a rotated peach blob, with doodle accents */}
          <div className="relative mx-auto md:mx-0 w-[16rem] sm:w-[19rem] flex-shrink-0">
            <Blob variant={1} color="peach" className="absolute -inset-6 sm:-inset-8 w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] h-[calc(100%+3rem)] sm:h-[calc(100%+4rem)] pointer-events-none" />
            <Doodle variant="sparkle" color="butter" className="absolute -top-3 -right-2 w-9 h-9 z-10" />
            <Doodle variant="loop" color="mint" className="absolute -bottom-5 -left-4 w-16 h-10 z-10" />
            <img
              src={rafeeImg}
              alt="Rafee Alam"
              width={400}
              height={400}
              className="relative z-[1] w-full h-auto rounded-[2rem] -rotate-2 shadow-[0_10px_30px_-12px_rgba(30,57,50,0.25)] border-4 border-surface"
            />
          </div>
        </div>

        {/* Stat strip — the career in four numbers */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 -mt-2 sm:-mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((s) => (
              <div key={s.label} className="soft-card p-5 sm:p-6 text-center">
                <p className="font-[--font-display] font-semibold text-3xl sm:text-4xl text-accent leading-none mb-2">
                  {s.value}
                </p>
                <p className="text-[13px] sm:text-sm text-ink-soft leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials as BlobBadge cards ── */}
      <SectionBand tone="sand" wave className="overflow-hidden">
        <Blob variant={5} color="sky" className="absolute -left-20 top-16 w-72 h-72 opacity-25 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
              Background
            </p>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1] max-w-2xl mx-auto">
              What I bring to the table.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {credentials.map((c) => (
              <div key={c.n} className="soft-card soft-card-hover p-8 flex flex-col">
                <BlobBadge n={c.n} color={c.color} size={60} className="mb-6" />
                <h3 className="font-[--font-display] font-semibold text-xl text-ink mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-[15px] text-ink-soft leading-[1.7]">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionBand>

      {/* ── The path here — career timeline ── */}
      <section className="relative overflow-hidden">
        <Blob variant={2} color="butter" className="absolute -left-24 bottom-10 w-72 h-72 opacity-20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="mb-12">
            <div className="flex items-center gap-2.5 mb-5">
              <Doodle variant="loop" color="accent" className="w-9 h-6" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                The path here
              </p>
            </div>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.08]">
              From avionics to AI,{' '}
              <span className="relative inline-block">
                <em className="font-[--font-display] italic text-accent">translated</em>
                <Doodle variant="squiggle-underline" color="accent" className="absolute left-0 -bottom-2 w-full h-3" />
              </span>{' '}
              for Main Street.
            </h2>
          </div>
          <div className="space-y-6">
            {path.map((step, i) => (
              <div key={step.n} className="relative flex gap-5 sm:gap-6">
                <div className="flex flex-col items-center flex-shrink-0">
                  <BlobBadge n={step.n} color={step.color} size={52} />
                  {i < path.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="flex-1 mt-2 border-l-2 border-dashed border-border-strong"
                    />
                  )}
                </div>
                <div className={i < path.length - 1 ? 'pb-8' : ''}>
                  <h3 className="font-[--font-display] font-semibold text-xl text-ink mb-2 leading-snug">
                    {step.era}
                  </h3>
                  <p className="text-[15px] sm:text-base text-ink-soft leading-[1.7]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why the Playbook exists — advice gap with pull-quote ── */}
      <section className="relative overflow-hidden">
        <Blob variant={3} color="peach" className="absolute -right-24 top-1/4 w-80 h-80 opacity-25 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="mb-12">
            <div className="flex items-center gap-2.5 mb-5">
              <Doodle variant="arrow-curve" color="accent" className="w-7 h-7" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                Why this exists
              </p>
            </div>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.08]">
              The advice{' '}
              <span className="relative inline-block">
                <em className="font-[--font-display] italic text-accent">gap</em>
                <Doodle variant="circle" color="accent" className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+1.5rem)] h-[calc(100%+1rem)]" />
              </span>
              .
            </h2>
          </div>

          <div className="space-y-8 text-lg sm:text-xl text-ink leading-[1.7]">
            <p>
              Most AI content on the internet is written for engineers, by engineers. The advice assumes you have a technical team, a budget for experiments, and time to figure out what&rsquo;s real and what&rsquo;s hype.
            </p>

            {/* Pull-quote treatment for the key line */}
            <figure className="relative my-10 pl-6 sm:pl-8">
              <span aria-hidden="true" className="absolute left-0 top-1 bottom-1 w-1.5 rounded-full bg-accent" />
              <Doodle variant="star" color="butter" className="absolute -left-2 -top-6 w-8 h-8" />
              <blockquote className="font-[--font-display] font-medium text-2xl sm:text-3xl text-ink leading-[1.25]">
                Small business owners don&rsquo;t have any of that. They have a business to run and a list of problems that don&rsquo;t care about which AI model is trending this week.
              </blockquote>
            </figure>

            <p>
              The Playbook is what I wish existed when I started having these conversations. The free guides are the philosophy — practical, problem-first, no hype. Consulting is the same philosophy delivered hands-on, when the problem is bigger than a guide can solve.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA — warm ink band ── */}
      <SectionBand tone="ink" wave className="overflow-hidden">
        <Blob variant={1} color="peach" className="absolute -left-20 -bottom-16 w-80 h-80 opacity-20 pointer-events-none" />
        <Blob variant={4} color="butter" className="absolute -right-16 -top-10 w-64 h-64 opacity-15 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <Doodle variant="sparkle" color="butter" className="w-6 h-6" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-butter">
              Let&rsquo;s talk
            </p>
            <Doodle variant="sparkle" color="butter" className="w-6 h-6" />
          </div>
          <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-[#F4EDE1] mb-5 leading-[1.1]">
            Have a problem worth talking about?
          </h2>
          <p className="text-base sm:text-lg text-[#C9D6CF] leading-[1.7] max-w-xl mx-auto mb-10">
            Tell me what you&rsquo;re working on. I&rsquo;ll tell you whether I can help — you&rsquo;ll be talking to me, not a bot.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-butter/50"
          >
            Work with me
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </SectionBand>
    </>
  )
}
