import Blob from '../components/Blob'
import Doodle from '../components/Doodle'

export default function RefundPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden grain">
        <Blob variant={5} color="peach" className="absolute -top-16 -right-20 w-64 h-64 opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-14">
          <div className="flex items-center gap-2.5 mb-8">
            <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Legal
            </p>
          </div>
          <h1 className="font-[--font-display] font-semibold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1]">
            Refund Policy
          </h1>
          <p className="mt-6 text-sm text-ink-soft">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* TODO: replace with lawyer-reviewed copy before enabling payments */}
      <div className="prose prose-lg max-w-none text-ink text-base sm:text-lg leading-[1.7] space-y-6">
        <p>
          We want you to feel confident about your purchase. This policy
          describes how refunds work for Pro guides and consulting engagements.
        </p>

        <h2 className="font-[--font-display] font-semibold text-2xl sm:text-3xl text-ink mt-10 mb-4">
          1. Pro guides
        </h2>
        <p>
          If a Pro guide doesn't deliver what was promised, email us within 14
          days of purchase and we'll issue a full refund — no questions, no
          forms. Just tell us what didn't land so we can make it better for the
          next person.
        </p>

        <h2 className="font-[--font-display] font-semibold text-2xl sm:text-3xl text-ink mt-10 mb-4">
          2. Consulting engagements
        </h2>
        <p>
          Consulting work is scoped and quoted individually. Refund terms for
          consulting are agreed in the engagement contract, not by this policy.
        </p>

        <h2 className="font-[--font-display] font-semibold text-2xl sm:text-3xl text-ink mt-10 mb-4">
          3. How to request
        </h2>
        <p>
          Email{' '}
          <a
            href="mailto:ralam70@gmail.com?subject=Refund%20request"
            className="text-accent hover:text-accent-hover transition-colors underline underline-offset-4"
          >
            ralam70@gmail.com
          </a>{' '}
          with your purchase email and the guide name. Refunds are processed
          through Stripe and typically arrive in 5–10 business days.
        </p>
      </div>
      </article>
    </>
  )
}
