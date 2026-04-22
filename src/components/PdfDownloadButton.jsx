import { useState } from 'react'

function slugifyFilename(title) {
  return title
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export default function PdfDownloadButton({ guide, className = '' }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleDownload() {
    if (loading) return
    setLoading(true)
    setError(null)

    try {
      const [{ pdf }, GuidePDFModule] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./GuidePDF'),
      ])
      const GuidePDF = GuidePDFModule.default

      const blob = await pdf(<GuidePDF guide={guide} />).toBlob()
      const url = URL.createObjectURL(blob)
      const filename = `SMB-AI-Playbook-${slugifyFilename(guide.title)}.pdf`

      const a = document.createElement('a')
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)

      // Release the blob after a short delay
      setTimeout(() => URL.revokeObjectURL(url), 3000)
    } catch (err) {
      console.error('PDF generation failed', err)
      setError('Could not generate PDF. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={handleDownload}
        disabled={loading}
        className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-wait focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12" />
            </svg>
            Generating PDF…
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Download PDF
          </>
        )}
      </button>
      {error && (
        <p className="mt-2 text-xs text-red-600">{error}</p>
      )}
    </div>
  )
}
