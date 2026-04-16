import GridPattern from '../components/GridPattern'

export default function RefundPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-transparent to-transparent pointer-events-none" />
        <GridPattern
          width={48}
          height={48}
          x={-1}
          y={-1}
          className="fill-accent/[0.03] stroke-border-strong/40 [mask-image:radial-gradient(ellipse_80%_70%_at_30%_40%,black_20%,transparent_80%)]"
          squares={[[4, 2], [7, 5], [11, 1], [2, 8], [14, 4], [9, 7], [1, 3]]}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-14">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Legal
            </p>
          </div>
          <h1 className="font-[--font-display] text-4xl sm:text-5xl md:text-6xl text-text-primary leading-[1.1]">
            Refund Policy
          </h1>
          <p className="mt-6 text-sm text-text-secondary">
            Last updated: April 2026
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* TODO: replace with lawyer-reviewed copy before enabling payments */}
      <div className="prose prose-lg max-w-none text-text-primary text-base sm:text-lg leading-[1.7] space-y-6">
        <p>
          We want you to feel confident about your purchase. This policy
          describes how refunds work for Pro guides and consulting engagements.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          1. Pro guides
        </h2>
        <p>
          If a Pro guide doesn't deliver what was promised, email us within 14
          days of purchase and we'll issue a full refund — no questions, no
          forms. Just tell us what didn't land so we can make it better for the
          next person.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          2. Consulting engagements
        </h2>
        <p>
          Consulting work is scoped and quoted individually. Refund terms for
          consulting are agreed in the engagement contract, not by this policy.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
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
