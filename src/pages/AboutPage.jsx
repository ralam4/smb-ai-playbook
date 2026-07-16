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
    text: 'Years of hands-on work building software and operations systems for businesses where every dollar counts.',
  },
  {
    n: 2,
    color: 'mint',
    text: 'Deep practical experience with the modern AI stack — large language models, prompt engineering, agentic workflows, and the integration work that makes them useful in production.',
  },
  {
    n: 3,
    color: 'butter',
    text: 'A bias toward shipping. The Playbook itself is the proof — every guide here is something I’d hand to a real business owner and expect them to actually use.',
  },
]

export default function AboutPage() {
  useSEO({
    title: 'About — SMB AI Playbook',
    description:
      'Rafee Alam built the SMB AI Playbook because most AI advice online is written for engineering teams, not small business owners with real problems to solve.',
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
              I&rsquo;m Rafee Alam. I&rsquo;ve spent years working at the intersection of software, operations, and small business. The Playbook started as a free resource because most AI advice on the internet is written for engineering teams that small businesses don&rsquo;t have. Consulting is what I do when a business needs more than a guide can provide.
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
                <p className="text-base text-ink leading-[1.7]">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionBand>

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
