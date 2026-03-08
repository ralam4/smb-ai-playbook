import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="w-full border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 no-underline group">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-[--font-display] text-sm leading-none">AI</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-[--font-display] text-lg text-text-primary tracking-tight group-hover:text-accent transition-colors">
              AI Playbook
            </span>
            <span className="hidden sm:inline text-[11px] text-text-secondary font-medium tracking-wide uppercase">
              for Small Business
            </span>
          </div>
        </Link>
        <a
          href="https://www.linkedin.com/in/rafeeulalam"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors text-sm group"
        >
          <span className="hidden sm:inline">by</span>
          <span className="font-medium">Rafee Alam</span>
          <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </a>
      </div>
    </nav>
  )
}
