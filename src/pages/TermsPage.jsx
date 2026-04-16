import GridPattern from '../components/GridPattern'

export default function TermsPage() {
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
          squares={[[2, 3], [5, 1], [8, 5], [3, 7], [12, 2], [7, 8], [10, 6]]}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-14">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Legal
            </p>
          </div>
          <h1 className="font-[--font-display] text-4xl sm:text-5xl md:text-6xl text-text-primary leading-[1.1]">
            Terms of Service
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
          These Terms of Service govern your use of the SMB AI Playbook
          (smbaiplaybook.xyz), operated by Rafee Alam. By accessing or using the
          site, you agree to be bound by these terms.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          1. Use of the site
        </h2>
        <p>
          The free guides on this site are provided for informational purposes
          only and do not constitute professional or legal advice. You are
          responsible for evaluating whether and how to apply any guidance to
          your business.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          2. Paid content
        </h2>
        <p>
          Pro guides and consulting services are sold separately. Purchases are
          processed through Stripe. Access to paid content is granted on a
          per-guide basis and is tied to your browser unless otherwise stated.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          3. Intellectual property
        </h2>
        <p>
          All content on this site is owned by SMB AI Playbook unless otherwise
          credited. You may use the prompts and frameworks within your own
          business. Republishing or reselling guide content is not permitted.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          4. Limitation of liability
        </h2>
        <p>
          To the maximum extent permitted by law, SMB AI Playbook is not liable
          for any damages arising from your use of the site or its content.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          5. Contact
        </h2>
        <p>
          Questions about these terms? Email{' '}
          <a
            href="mailto:ralam70@gmail.com"
            className="text-accent hover:text-accent-hover transition-colors underline underline-offset-4"
          >
            ralam70@gmail.com
          </a>
          .
        </p>
      </div>
      </article>
    </>
  )
}
