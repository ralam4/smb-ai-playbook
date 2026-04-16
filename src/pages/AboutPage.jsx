import { Link } from 'react-router-dom'
import GridPattern from '../components/GridPattern'

export default function AboutPage() {
  return (
    <>
      {/* Hero / bio */}
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-transparent to-transparent pointer-events-none" />
        <GridPattern
          width={48}
          height={48}
          x={-1}
          y={-1}
          className="fill-accent/[0.03] stroke-border-strong/40 [mask-image:radial-gradient(ellipse_80%_70%_at_30%_40%,black_20%,transparent_80%)]"
          squares={[
            [3, 2], [6, 4], [10, 1], [2, 6], [13, 3],
            [8, 7], [14, 6], [5, 9], [11, 8], [1, 4],
          ]}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              About
            </p>
          </div>
          <h1 className="font-[--font-display] text-[2.75rem] sm:text-6xl md:text-7xl text-text-primary leading-[1.05] max-w-3xl">
            I help small businesses{' '}
            <em className="font-[--font-display] italic text-accent">actually use</em>{' '}
            AI.
          </h1>
          {/* TODO: final bio — replace placeholder copy */}
          <p className="mt-8 sm:mt-10 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
            I&rsquo;m Rafee Alam. I&rsquo;ve spent years working at the intersection of software, operations, and small business. The Playbook started as a free resource because most AI advice on the internet is written for engineering teams that small businesses don&rsquo;t have. Consulting is what I do when a business needs more than a guide can provide.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      </section>

      {/* Credentials */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Background
          </p>
          <h2 className="font-[--font-display] text-3xl sm:text-5xl text-text-primary leading-[1.1] max-w-2xl mx-auto">
            What I bring to the table.
          </h2>
        </div>
        <div className="glass glass-shadow-lg rounded-2xl p-10 sm:p-14 max-w-3xl mx-auto">
          {/* TODO: replace with final credentials list */}
          <ul className="space-y-7 text-text-primary leading-[1.7]">
            <li className="flex gap-5">
              <span className="font-[--font-mono] text-xs font-medium text-accent bg-accent-light/60 rounded-md px-2 py-1 self-start mt-1 flex-shrink-0">
                01
              </span>
              <p className="text-base sm:text-lg">
                Years of hands-on work building software and operations systems for businesses where every dollar counts.
              </p>
            </li>
            <li className="flex gap-5">
              <span className="font-[--font-mono] text-xs font-medium text-accent bg-accent-light/60 rounded-md px-2 py-1 self-start mt-1 flex-shrink-0">
                02
              </span>
              <p className="text-base sm:text-lg">
                Deep practical experience with the modern AI stack — large language models, prompt engineering, agentic workflows, and the integration work that makes them useful in production.
              </p>
            </li>
            <li className="flex gap-5">
              <span className="font-[--font-mono] text-xs font-medium text-accent bg-accent-light/60 rounded-md px-2 py-1 self-start mt-1 flex-shrink-0">
                03
              </span>
              <p className="text-base sm:text-lg">
                A bias toward shipping. The Playbook itself is the proof — every guide here is something I&rsquo;d hand to a real business owner and expect them to actually use.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent max-w-5xl mx-auto" />

      {/* Why the Playbook exists */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Why this exists
            </p>
          </div>
          <h2 className="font-[--font-display] text-3xl sm:text-5xl text-text-primary leading-[1.1]">
            The advice gap.
          </h2>
        </div>
        <div className="space-y-6 text-lg sm:text-xl text-text-primary leading-[1.7]">
          <p>
            Most AI content on the internet is written for engineers, by engineers. The advice assumes you have a technical team, a budget for experiments, and time to figure out what&rsquo;s real and what&rsquo;s hype.
          </p>
          <p>
            Small business owners don&rsquo;t have any of that. They have a business to run, a list of problems that don&rsquo;t care about which AI model is trending this week, and a healthy skepticism about anything that promises to fix everything.
          </p>
          <p>
            The Playbook is what I wish existed when I started having these conversations. The free guides are the philosophy — practical, problem-first, no hype. Consulting is the same philosophy delivered hands-on, when the problem is bigger than a guide can solve.
          </p>
        </div>
      </section>

      {/* TODO(phase 1b): testimonials grid */}
      {/* TODO(phase 1b): case studies / before-after */}

      <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent max-w-5xl mx-auto" />

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="glass glass-shadow-lg rounded-2xl p-10 sm:p-14 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Let&rsquo;s talk
            </p>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-[--font-display] text-3xl sm:text-5xl text-text-primary mb-5 leading-[1.1]">
            Have a problem worth talking about?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-[1.7] max-w-xl mx-auto mb-10">
            Tell me what you&rsquo;re working on. I&rsquo;ll tell you whether I can help.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            Work with me
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
