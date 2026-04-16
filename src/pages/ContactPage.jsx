import GridPattern from '../components/GridPattern'

const MAILTO = 'mailto:ralam70@gmail.com?subject=Let%27s%20talk%20about%20working%20together&body=Hi%20Rafee%2C%0A%0AA%20bit%20about%20my%20business%3A%0A%0AWhat%20I%27m%20trying%20to%20solve%3A%0A%0AThanks%2C'

const engagementCards = [
  {
    label: 'Scoping',
    title: 'Start with the real problem',
    body: 'Most AI projects fail because they start with the tool, not the problem. We begin with a focused conversation about what your business actually needs — and whether AI is even the right answer.',
  },
  {
    label: 'Implementation',
    title: 'Build something that ships',
    body: 'Once we agree on the scope, I build it with you — prompts, workflows, integrations, whatever the job needs. You get working systems, not slide decks.',
  },
  {
    label: 'Ongoing Support',
    title: 'Stay close as it scales',
    body: 'AI projects need maintenance and iteration. I stay engaged after launch — refining what works, killing what doesn\u2019t, and helping your team get fluent enough to run it themselves.',
  },
]

const faqs = [
  {
    q: 'Who do you work with?',
    a: 'Small and mid-sized businesses across services, retail, and operations-heavy industries. If your team is between 5 and 200 people and you have a real problem AI could touch, we should talk.',
  },
  {
    q: 'What does an engagement cost?',
    a: 'It depends on scope. A focused scoping engagement runs in the low four figures; a full implementation is quoted after we agree on what we\u2019re building. I\u2019ll always tell you up front whether your problem is worth the spend.',
  },
  {
    q: 'How long do engagements run?',
    a: 'Anywhere from a two-week scoping sprint to a multi-month build. I don\u2019t do retainers for the sake of retainers.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, before we discuss anything sensitive. Send yours over or use mine.',
  },
]

export default function ContactPage() {
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
          ]}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Work with Rafee
            </p>
          </div>
          <h1 className="font-[--font-display] text-[2.75rem] sm:text-6xl md:text-7xl text-text-primary leading-[1.05] max-w-3xl">
            End-to-end AI consulting for{' '}
            <em className="font-[--font-display] italic text-accent">small and mid-sized</em>{' '}
            businesses.
          </h1>
          <p className="mt-8 sm:mt-10 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
            The Playbook is the philosophy. Consulting is the delivery — scoping, implementation, and ongoing support, sized to your business and your budget.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      </section>

      {/* Engagement model cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
            How engagements work
          </p>
          <h2 className="font-[--font-display] text-3xl sm:text-5xl text-text-primary leading-[1.1] max-w-2xl mx-auto">
            Three phases. One philosophy.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {engagementCards.map((card) => (
            <div
              key={card.label}
              className="glass glass-shadow rounded-2xl p-8 sm:p-10 flex flex-col"
            >
              <span className="font-[--font-mono] text-xs font-medium text-accent bg-accent-light/60 rounded-md px-2 py-1 self-start mb-5">
                {card.label}
              </span>
              <h3 className="font-[--font-display] text-2xl text-text-primary mb-4 leading-snug">
                {card.title}
              </h3>
              <p className="text-[15px] sm:text-base text-text-secondary leading-[1.7]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent max-w-5xl mx-auto" />

      {/* Contact CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="glass glass-shadow-lg rounded-2xl p-10 sm:p-14 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Get in touch
            </p>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-[--font-display] text-3xl sm:text-5xl text-text-primary mb-5 leading-[1.1]">
            Tell me about your business.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-[1.7] max-w-xl mx-auto mb-10">
            Email me with a bit about your business and what you&rsquo;re trying to solve. I&rsquo;ll reply within 2 business days to find a time to talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={MAILTO}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              Email Rafee
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rafeeulalam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border-2 border-border-strong text-text-primary hover:border-accent hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent max-w-5xl mx-auto" />

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="mb-12 sm:mb-14">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Frequently asked
            </p>
          </div>
          <h2 className="font-[--font-display] text-3xl sm:text-5xl text-text-primary leading-[1.1]">
            Questions, answered.
          </h2>
        </div>
        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-border pb-8 last:border-b-0">
              <h3 className="font-[--font-display] text-2xl sm:text-[1.75rem] text-text-primary mb-4 leading-snug">
                {faq.q}
              </h3>
              <p className="text-base sm:text-lg text-text-secondary leading-[1.7]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
