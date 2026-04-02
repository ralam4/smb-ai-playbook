import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleGuidesClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('guides')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById('guides')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl glass glass-shadow rounded-2xl">
      <div className="px-5 sm:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1.5 no-underline group">
          <span className="font-[--font-display] text-lg text-text-primary tracking-tight group-hover:text-accent transition-colors">
            AI Playbook
          </span>
          <span className="hidden sm:inline text-[11px] text-text-secondary font-medium tracking-wide uppercase">
            for Small Business
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-5">
          <a
            href="#guides"
            onClick={handleGuidesClick}
            className="text-sm font-medium text-text-secondary hover:text-accent transition-colors cursor-pointer px-2 py-1"
          >
            Guides
          </a>
          <Link
            to="/archetype"
            className="text-sm font-medium text-text-secondary hover:text-accent transition-colors px-2 py-1"
          >
            Quiz
          </Link>
          <span className="hidden sm:block w-px h-4 bg-border" />
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
      </div>
    </nav>
  )
}
