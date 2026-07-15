import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ShareCard from './ShareCard'
import Blob from './Blob'
import Doodle from './Doodle'
import guides from '../data/guides'

// Maps each archetype to one of the shared pastel blob colors (closest match
// to that archetype's wash tone) so the result page leans harder into its
// own color system with a matching Blob composition.
const BLOB_COLOR_BY_ARCHETYPE = {
  architect: 'butter',
  alchemist: 'peach',
  conductor: 'mint',
  oracle: 'sky',
}

export default function ArchetypeResult({ resultType, onRetake }) {
  const [copied, setCopied] = useState(false)
  const cardRef = useRef(null)

  const matchedGuides = guides.filter((g) =>
    resultType.recommendedGuides?.includes(g.slug),
  )

  const blobColor = BLOB_COLOR_BY_ARCHETYPE[resultType.id] || 'peach'

  const handleCopy = () => {
    navigator.clipboard.writeText(resultType.linkedinCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSaveImage = () => {
    const img = cardRef.current?.querySelector('img')
    if (!img) return
    const link = document.createElement('a')
    link.href = img.src
    link.download = `ai-archetype-${resultType.id}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div style={{ backgroundColor: resultType.colors.wash }}>
      {/* Reveal hero — matching Blob composition */}
      <section className="relative overflow-hidden px-4 sm:px-6 pt-16 sm:pt-24 pb-12">
        <Blob variant={1} color={blobColor} float className="absolute -top-16 -right-20 w-80 h-80 opacity-40 pointer-events-none" />
        <Blob variant={3} color={blobColor} className="absolute bottom-0 -left-20 w-64 h-64 opacity-30 pointer-events-none hidden sm:block" />

        <div className="relative opacity-0 animate-fade-up mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <Doodle variant="sparkle" color={blobColor} className="w-5 h-5" />
            <p
              className="font-[--font-mono] text-xs font-semibold uppercase tracking-widest"
              style={{ color: resultType.colors.primary }}
            >
              Your AI Archetype is
            </p>
            <Doodle variant="sparkle" color={blobColor} className="w-5 h-5" />
          </div>

          <h1
            className="font-[--font-display] italic text-5xl sm:text-6xl md:text-7xl mb-3"
            style={{ color: resultType.colors.anchor }}
          >
            {resultType.name}
          </h1>

          {/* Tagline pill */}
          <div className="flex justify-center mb-8">
            <span
              className="inline-block rounded-full px-5 py-2 text-sm font-medium font-[--font-display] shadow-sm"
              style={{
                color: resultType.colors.anchor,
                backgroundColor: 'rgba(255,255,255,0.65)',
              }}
            >
              &ldquo;{resultType.tagline}&rdquo;
            </span>
          </div>
        </div>
      </section>

      {/* Card + description section */}
      <section className="relative overflow-hidden px-4 sm:px-6 pb-16">
        <Blob variant={5} color={blobColor} className="absolute top-1/3 right-0 w-72 h-72 opacity-20 pointer-events-none hidden lg:block" />
        <div className="relative opacity-0 animate-fade-up delay-1 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left: Share card */}
            <div ref={cardRef} className="mx-auto max-w-lg lg:max-w-none">
              <ShareCard resultType={resultType} />

              {/* Action buttons under card */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                <button
                  onClick={handleSaveImage}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 bg-surface transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                  style={{
                    borderColor: resultType.colors.primary,
                    color: resultType.colors.primary,
                  }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Save Image
                </button>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                  style={{ backgroundColor: '#C4622D' }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  {copied ? 'Copied ✓' : 'Copy LinkedIn Post'}
                </button>
              </div>
            </div>

            {/* Right: Description + stats */}
            <div className="lg:pt-4">
              <p className="text-ink text-base sm:text-lg leading-relaxed mb-8">
                {resultType.description}
              </p>

              {/* AI Edge + Watch Out — soft cards */}
              <div className="space-y-4 mb-8">
                <div className="soft-card p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: resultType.colors.primary }}
                    />
                    <p className="font-[--font-mono] text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
                      Your AI Edge
                    </p>
                  </div>
                  <p
                    className="font-semibold text-base"
                    style={{ color: resultType.colors.anchor }}
                  >
                    {resultType.aiEdge}
                  </p>
                </div>

                <div className="soft-card p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-ink-soft/40" />
                    <p className="font-[--font-mono] text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
                      Watch out for
                    </p>
                  </div>
                  <p className="font-medium text-ink text-sm leading-relaxed">
                    {resultType.watchOut}
                  </p>
                </div>
              </div>

              {/* Recommended Guides */}
              {matchedGuides.length > 0 && (
                <div>
                  <p className="font-[--font-mono] text-[11px] font-semibold uppercase tracking-wider text-ink-soft mb-4">
                    Recommended Guides for You
                  </p>
                  <div className="space-y-3">
                    {matchedGuides.map((guide) => (
                      <Link
                        key={guide.slug}
                        to={`/guide/${guide.slug}`}
                        className="group soft-card soft-card-hover flex items-center gap-3 px-5 py-4"
                      >
                        <span
                          className="w-1 h-8 rounded-full flex-shrink-0"
                          style={{ backgroundColor: resultType.colors.primary }}
                        />
                        <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                          {guide.title}
                        </span>
                        <svg className="w-4 h-4 ml-auto text-ink-soft/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Retake strip */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="soft-card p-6 sm:p-8">
            <p className="text-ink-soft text-sm mb-3">
              Think a different archetype fits you better?
            </p>
            <button
              onClick={onRetake}
              className="text-sm font-semibold underline underline-offset-4 transition-colors cursor-pointer"
              style={{ color: resultType.colors.primary }}
            >
              Retake the Quiz
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
