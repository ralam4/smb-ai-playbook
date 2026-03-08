export default function DownloadButton({ filename, label = 'Download all prompts (.md)' }) {
  return (
    <a
      href={`/downloads/${filename}`}
      download
      className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border-2 border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-200 no-underline"
    >
      <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      {label}
    </a>
  )
}
