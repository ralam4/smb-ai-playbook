import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors px-2 py-1 ${
    isActive ? 'text-accent' : 'text-text-secondary hover:text-accent'
  }`

export default function Nav() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl glass glass-shadow rounded-2xl">
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-baseline gap-1.5 no-underline group flex-shrink-0">
          <span className="font-[--font-display] text-lg text-text-primary tracking-tight group-hover:text-accent transition-colors">
            AI Playbook
          </span>
          <span className="hidden md:inline text-[11px] text-text-secondary font-medium tracking-wide uppercase">
            for Small Business
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
          <NavLink to="/guides" className={navLinkClass}>
            Guides
          </NavLink>
          <NavLink to="/pro" className={navLinkClass}>
            Pro
          </NavLink>
          <NavLink to="/archetype" className={({ isActive }) => `${navLinkClass({ isActive })} hidden sm:block`}>
            Quiz
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${navLinkClass({ isActive })} hidden sm:block`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${navLinkClass({ isActive })} hidden sm:block`}>
            Contact
          </NavLink>
          <Link
            to="/contact"
            className="ml-1 sm:ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            Work with me
          </Link>
        </div>
      </div>
    </nav>
  )
}
