export default function DataNote({ children }) {
  return (
    <div className="mt-4 rounded-2xl bg-mint-light border border-mint px-5 py-4 flex gap-3">
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-6 h-6 rounded-full bg-white/70 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-[11px] font-bold text-ink uppercase tracking-wider mb-1">
          Data you need
        </p>
        <p className="text-sm text-ink/80 leading-relaxed">{children}</p>
      </div>
    </div>
  )
}
