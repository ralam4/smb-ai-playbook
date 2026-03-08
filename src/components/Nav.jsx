import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="w-full border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="font-[--font-display] text-lg text-text-primary tracking-tight">
            AI Playbook
          </span>
          <span className="text-xs text-text-secondary font-medium tracking-wide uppercase">
            for Small Business
          </span>
        </Link>
        <a
          href="https://www.linkedin.com/in/rafeeulalam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent transition-colors text-sm"
        >
          by Rafee Alam
        </a>
      </div>
    </nav>
  )
}
