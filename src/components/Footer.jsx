export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 bg-surface-warm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-[--font-display] text-xs">AI</span>
            </div>
            <p className="text-sm text-text-secondary">
              AI Playbook for Small Business <span className="text-border mx-1.5">|</span> Free forever
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-secondary">Built by</span>
            <a
              href="https://www.linkedin.com/in/rafeeulalam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-text-primary hover:text-accent transition-colors inline-flex items-center gap-1.5 no-underline"
            >
              Rafee Alam
              <svg className="w-4 h-4 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-text-secondary/50">
            More guides coming. Built in public. No signup, no paywall.
          </p>
        </div>
      </div>
    </footer>
  )
}
