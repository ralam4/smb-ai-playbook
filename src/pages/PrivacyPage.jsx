import GridPattern from '../components/GridPattern'

export default function PrivacyPage() {
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
          squares={[[3, 2], [6, 4], [10, 1], [2, 6], [13, 3], [8, 7], [5, 9]]}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-14">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              Legal
            </p>
          </div>
          <h1 className="font-[--font-display] text-4xl sm:text-5xl md:text-6xl text-text-primary leading-[1.1]">
            Privacy Policy
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
          This Privacy Policy describes how SMB AI Playbook collects, uses, and
          protects information when you use smbaiplaybook.xyz.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          1. What we collect
        </h2>
        <p>
          When you sign up for the newsletter, we collect your email address.
          When you purchase a Pro guide, Stripe processes payment information on
          our behalf — we do not store credit card details. We use Vercel
          Analytics to understand aggregate site usage; this does not collect
          personal information.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          2. How we use it
        </h2>
        <p>
          Email addresses are used solely to send updates about new guides and
          resources. We do not sell or share your information with third
          parties.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          3. Local storage
        </h2>
        <p>
          The site uses your browser's local storage to remember which Pro
          guides you have unlocked. This information stays on your device.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          4. Your rights
        </h2>
        <p>
          You can unsubscribe from emails at any time using the link in any
          newsletter, or by emailing us directly. You can request deletion of
          your data by contacting us.
        </p>

        <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mt-10 mb-4">
          5. Contact
        </h2>
        <p>
          Privacy questions? Email{' '}
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
