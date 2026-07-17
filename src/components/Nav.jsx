import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors px-2 py-1 ${
    isActive ? 'text-accent' : 'text-ink-soft hover:text-accent'
  }`

const AGENTS_DOT = <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />

// One source of truth for the menu so desktop links and the mobile panel can't drift.
const MENU_LINKS = [
  { to: '/guides', label: 'Guides' },
  { to: '/pro', label: 'Pro' },
  { to: '/agents', label: 'Agents', dot: true },
  { to: '/archetype', label: 'Quiz' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const mobileLinkClass = ({ isActive }) =>
  `flex items-center justify-between px-5 py-3 rounded-2xl text-base font-medium transition-colors ${
    isActive ? 'text-accent bg-accent-light/60' : 'text-ink hover:text-accent hover:bg-sand'
  }`

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the panel whenever the route changes (covers back/forward too).
  // Adjusting state during render is React's recommended alternative to a
  // setState-in-effect for derived resets.
  const [prevPathname, setPrevPathname] = useState(pathname)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    if (open) setOpen(false)
  }

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div className="glass glass-shadow rounded-full pl-5 pr-3 sm:pl-6 sm:pr-3 py-2.5 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-baseline gap-1.5 no-underline group flex-shrink-0">
          <span className="font-[--font-display] font-semibold text-[1.35rem] leading-none text-ink tracking-tight group-hover:text-accent transition-colors">
            AI Playbook
          </span>
          <span className="hidden md:inline text-[11px] text-ink-soft font-medium tracking-wide uppercase">
            for Small Business
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
          {MENU_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${navLinkClass({ isActive })} hidden sm:inline-flex items-center gap-1.5`
              }
            >
              {item.label}
              {item.dot && AGENTS_DOT}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-1 sm:ml-2 inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap bg-accent text-white hover:bg-accent-hover transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            Work with me
          </Link>
          {/* Mobile menu toggle — two bars that morph into an X */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-ink hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <span className="relative block w-4.5 h-3" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 w-full h-[2px] rounded-full bg-current transition-transform duration-200 ${
                  open ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] rounded-full bg-current transition-transform duration-200 ${
                  open ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <div
        id="mobile-menu"
        className={`sm:hidden absolute top-full left-0 right-0 mt-2 origin-top transition-[opacity,transform] duration-200 ease-out ${
          open
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-2 scale-[0.98] pointer-events-none invisible'
        }`}
      >
        <div className="soft-card p-3">
          <div className="flex flex-col gap-0.5">
            {MENU_LINKS.map((item) => (
              <NavLink key={item.to} to={item.to} className={mobileLinkClass}>
                <span className="inline-flex items-center gap-2">
                  {item.label}
                  {item.dot && AGENTS_DOT}
                </span>
                {item.dot && (
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    New
                  </span>
                )}
              </NavLink>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-2 flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            Work with me
          </Link>
        </div>
      </div>
    </nav>
  )
}
