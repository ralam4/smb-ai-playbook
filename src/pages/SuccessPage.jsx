import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import guides from '../data/guides'
import industries from '../data/industries'
import useProAccess from '../hooks/useProAccess'
import Blob from '../components/Blob'
import Doodle from '../components/Doodle'

export default function SuccessPage() {
  const { unlock, consumePendingUnlock } = useProAccess()
  const [unlockedSlug, setUnlockedSlug] = useState(null)

  useEffect(() => {
    const slug = consumePendingUnlock()
    if (slug) {
      unlock(slug)
      setUnlockedSlug(slug)
    }
  }, [consumePendingUnlock, unlock])

  const guide = unlockedSlug ? guides.find((g) => g.slug === unlockedSlug) : null
  const industry = guide && guide.industry
    ? industries.find((i) => i.slug === guide.industry)
    : null

  return (
    <>
      <section className="relative overflow-hidden grain">
        <Blob variant={3} color="mint" float className="absolute -top-20 left-1/2 -translate-x-1/2 w-[26rem] h-[26rem] opacity-60 pointer-events-none" />
        <Blob variant={1} color="peach" className="absolute bottom-0 -left-16 w-64 h-64 opacity-35 pointer-events-none" />
        <Blob variant={5} color="butter" className="absolute bottom-10 -right-16 w-56 h-56 opacity-35 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20 text-center">
          {/* Celebratory checkmark badge on a mint blob, with a sparkle burst */}
          <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
            <Blob variant={4} color="mint" className="absolute inset-0 w-full h-full pointer-events-none" />
            <Doodle variant="sparkle" color="butter" className="absolute -top-3 -left-4 w-7 h-7" />
            <Doodle variant="star" color="peach" className="absolute -bottom-2 -right-5 w-8 h-8" />
            <Doodle variant="sparkle" color="accent" className="absolute -top-2 -right-3 w-5 h-5" />
            <svg className="relative w-9 h-9 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <div className="flex items-center justify-center gap-2.5 mb-6">
            <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              You&rsquo;re in
            </p>
            <Doodle variant="asterisk" color="accent" className="w-5 h-5" />
          </div>

          {guide ? (
            <>
              <h1 className="font-[--font-display] font-semibold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] mb-6">
                <em className="italic text-accent">&ldquo;{guide.title}&rdquo;</em>{' '}
                is unlocked.
              </h1>
              <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl mx-auto mb-10">
                Thanks for supporting the Playbook. The full guide is now available on this browser. Access persists — come back any time.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to={`/guide/${guide.slug}`}
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  Open the guide
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                {industry && (
                  <Link
                    to={`/pro/${industry.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 border-border-strong text-ink hover:border-accent hover:text-accent transition-colors cursor-pointer"
                  >
                    More {industry.name} guides
                  </Link>
                )}
              </div>
              <p className="mt-10 text-xs text-ink-soft/70 max-w-md mx-auto leading-relaxed">
                Access is tied to this browser. If you need it on another device, email{' '}
                <a href="mailto:ralam70@gmail.com" className="text-accent hover:underline">
                  ralam70@gmail.com
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <h1 className="font-[--font-display] font-semibold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] mb-6">
                Thank you.
              </h1>
              <p className="text-lg text-ink-soft leading-relaxed max-w-xl mx-auto mb-10">
                Something went sideways — we couldn&rsquo;t match your purchase to a specific guide on this device. Forward your Stripe receipt to{' '}
                <a href="mailto:ralam70@gmail.com" className="text-accent hover:underline">
                  ralam70@gmail.com
                </a>{' '}
                and we&rsquo;ll unlock it manually within one business day.
              </p>
              <Link
                to="/pro"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-colors cursor-pointer"
              >
                Browse Pro guides
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  )
}
