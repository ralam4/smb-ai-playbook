import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import guides from '../data/guides'
import industries from '../data/industries'
import useProAccess from '../hooks/useProAccess'
import GridPattern from '../components/GridPattern'

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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-transparent to-transparent pointer-events-none" />
        <GridPattern
          width={48}
          height={48}
          x={-1}
          y={-1}
          className="fill-accent/[0.03] stroke-border-strong/40 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black_20%,transparent_80%)]"
          squares={[[2, 3], [5, 1], [8, 5], [3, 7], [12, 2], [7, 8], [10, 6]]}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-8">
            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-8 bg-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              You’re in
            </p>
            <div className="h-px w-8 bg-accent" />
          </div>

          {guide ? (
            <>
              <h1 className="font-[--font-display] text-4xl sm:text-5xl md:text-6xl text-text-primary leading-[1.1] mb-6">
                <em className="italic text-accent">&ldquo;{guide.title}&rdquo;</em>{' '}
                is unlocked.
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
                Thanks for supporting the Playbook. The full guide is now available on this browser. Access persists — come back any time.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to={`/guide/${guide.slug}`}
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  Open the guide
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                {industry && (
                  <Link
                    to={`/pro/${industry.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border-2 border-border-strong text-text-primary hover:border-accent hover:text-accent transition-colors cursor-pointer"
                  >
                    More {industry.name} guides
                  </Link>
                )}
              </div>
              <p className="mt-10 text-xs text-text-secondary/70 max-w-md mx-auto leading-relaxed">
                Access is tied to this browser. If you need it on another device, email{' '}
                <a href="mailto:ralam70@gmail.com" className="text-accent hover:underline">
                  ralam70@gmail.com
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <h1 className="font-[--font-display] text-4xl sm:text-5xl md:text-6xl text-text-primary leading-[1.1] mb-6">
                Thank you.
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl mx-auto mb-10">
                Something went sideways — we couldn’t match your purchase to a specific guide on this device. Forward your Stripe receipt to{' '}
                <a href="mailto:ralam70@gmail.com" className="text-accent hover:underline">
                  ralam70@gmail.com
                </a>{' '}
                and we’ll unlock it manually within one business day.
              </p>
              <Link
                to="/pro"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-colors cursor-pointer"
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
