import Blob from '../components/Blob'
import Doodle from '../components/Doodle'
import BlobBadge from '../components/BlobBadge'
import SectionBand from '../components/SectionBand'
import useSEO from '../hooks/useSEO'
import rafeeImg from '../assets/rafee.png'

const MAILTO = 'mailto:ralam70@gmail.com?subject=Feedback%20for%20the%20AI%20Playbook&body=Hi%20Rafee%2C%0A%0AHere%27s%20what%27s%20on%20my%20mind%3A%0A%0A'

const whatToShare = [
  {
    n: 1,
    color: 'peach',
    label: 'Found a bug',
    title: 'Something broken or confusing',
    body: 'A guide that doesn’t load, a prompt that doesn’t work, a purchase that didn’t unlock — tell me exactly what happened and I’ll fix it.',
  },
  {
    n: 2,
    color: 'mint',
    label: 'Guide or agent idea',
    title: 'A topic or industry to cover',
    body: 'Don’t see your industry, or have a specific problem you wish a guide or Agent Pack solved? That’s exactly the kind of thing that shapes what gets built next.',
  },
  {
    n: 3,
    color: 'butter',
    label: 'General feedback',
    title: 'What’s working, what’s not',
    body: 'Used a guide and it actually helped? Used one and it fell flat? Either one is useful — I read every message and it directly shapes what I write next.',
  },
]

const faqs = [
  {
    q: 'What kind of things can I reach out about?',
    a: 'Bugs, guide or Agent Pack ideas, industries you wish were covered, or general feedback on anything in the Playbook. If it’s about improving the site or its content, it’s fair game.',
  },
  {
    q: 'Do you offer paid consulting?',
    a: 'Not at this time. Everything I have to offer lives here — free guides, Pro playbooks, and Agent Packs.',
  },
  {
    q: 'How fast will you respond?',
    a: 'I read every message and try to reply within a few business days. If it’s a purchase or access issue, I’ll prioritize it.',
  },
  {
    q: 'Can I suggest an industry or guide topic?',
    a: 'Yes — that’s one of the most useful things you can send. Tell me the industry, the problem, and roughly how you’d solve it today without AI.',
  },
]

export default function ContactPage() {
  useSEO({
    title: 'Contact — SMB AI Playbook',
    description:
      'Got an idea, found a bug, or want a guide for your industry? Reach out — every message goes to Rafee, and he reads all of them.',
    canonical: '/contact',
  })
  return (
    <>
      {/* Hero — distinct warm sky/peach mix */}
      <section className="relative overflow-hidden grain">
        <Blob variant={2} color="sky" float className="absolute -top-16 -right-20 w-96 h-96 opacity-40 pointer-events-none" />
        <Blob variant={5} color="peach" className="absolute bottom-0 -left-16 w-72 h-72 opacity-40 pointer-events-none hidden sm:block" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <Doodle variant="arrow-curve" color="accent" className="w-6 h-6" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Get in touch
            </p>
          </div>
          <h1 className="font-[--font-display] font-semibold text-[2.75rem] sm:text-6xl md:text-7xl text-ink leading-[1.05] max-w-3xl">
            Got an idea, a bug, or{' '}
            <span className="relative inline-block">
              <em className="font-[--font-display] italic text-accent">something to say</em>
              <Doodle variant="squiggle-underline" color="accent" className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-3 sm:h-4" />
            </span>
            ?
          </h1>
          <p className="mt-8 sm:mt-10 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl">
            This Playbook gets better because people who actually run small businesses tell me what&rsquo;s missing, what&rsquo;s confusing, or what they wish existed. That&rsquo;s what this page is for.
          </p>
        </div>
      </section>

      {/* What to share cards */}
      <SectionBand tone="sand" wave className="overflow-hidden">
        <Blob variant={3} color="mint" className="absolute -right-24 top-10 w-72 h-72 opacity-25 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4">
              What to send
            </p>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1] max-w-2xl mx-auto">
              Any of this counts.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whatToShare.map((card) => (
              <div
                key={card.label}
                className="soft-card soft-card-hover p-8 sm:p-10 flex flex-col"
              >
                <BlobBadge n={card.n} color={card.color} size={56} className="mb-6" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                  {card.label}
                </p>
                <h3 className="font-[--font-display] font-semibold text-2xl text-ink mb-4 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[15px] sm:text-base text-ink-soft leading-[1.7]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionBand>

      {/* Contact CTA — human touch with Rafee's photo */}
      <section className="relative overflow-hidden">
        <Blob variant={4} color="butter" className="absolute -left-20 top-0 w-64 h-64 opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="soft-card p-10 sm:p-14 text-center">
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <Doodle variant="sparkle" color="butter" className="w-5 h-5" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                Get in touch
              </p>
              <Doodle variant="sparkle" color="butter" className="w-5 h-5" />
            </div>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink mb-5 leading-[1.1]">
              What&rsquo;s on your mind?
            </h2>
            <p className="text-base sm:text-lg text-ink-soft leading-[1.7] max-w-xl mx-auto mb-8">
              Found a bug, have an idea for a guide or Agent Pack, or just want to say hi? Send a note — I read every message and reply within a few business days.
            </p>

            {/* Human touch: small headshot on a peach blob */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <Blob variant={1} color="peach" className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] pointer-events-none" />
                <img
                  src={rafeeImg}
                  alt="Rafee Alam"
                  width={400}
                  height={400}
                  className="relative z-[1] w-full h-full rounded-full object-cover border-[3px] border-surface shadow-[0_6px_16px_-6px_rgba(30,57,50,0.3)]"
                />
              </div>
              <p className="text-sm sm:text-base text-ink-soft italic text-left max-w-[14rem]">
                You&rsquo;ll be talking to me, not a bot.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={MAILTO}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 border-border-strong text-ink hover:border-accent hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <SectionBand tone="sand" wave className="overflow-hidden">
        <Blob variant={5} color="sky" className="absolute -right-16 bottom-10 w-60 h-60 opacity-25 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="mb-12 sm:mb-14">
            <div className="flex items-center gap-2.5 mb-5">
              <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                Frequently asked
              </p>
            </div>
            <h2 className="font-[--font-display] font-semibold text-3xl sm:text-5xl text-ink leading-[1.1]">
              Questions, answered.
            </h2>
          </div>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="soft-card p-6 sm:p-8">
                <h3 className="font-[--font-display] font-semibold text-xl sm:text-2xl text-ink mb-3 leading-snug">
                  {faq.q}
                </h3>
                <p className="text-base sm:text-lg text-ink-soft leading-[1.7]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionBand>
    </>
  )
}
