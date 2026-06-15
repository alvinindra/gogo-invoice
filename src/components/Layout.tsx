import { useEffect, useState, type ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { useStore } from '../store/AppStore'
import { ThemeToggle } from './ThemeToggle'
import { CloseIcon, MenuIcon } from './icons'

const BASE_URL = import.meta.env?.BASE_URL ?? '/'

const LINKS = [
  { to: '/', end: true, label: 'New invoice' },
  { to: '/history', end: false, label: 'History' },
  { to: '/companies', end: false, label: 'Companies' },
  { to: '/data', end: false, label: 'Backup' },
]

export default function Layout({ children }: { children: ReactNode }) {
  const { saveError } = useStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  // Close the mobile drawer on Escape, and lock body scroll while it's open.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="app">
      <header className="nav">
        <div className="nav-inner">
          <NavLink to="/" className="brand" onClick={close}>
            <img src={`${BASE_URL}icon.svg`} alt="" />
            <span>Gogo Invoice</span>
          </NavLink>

          <span className="nav-spacer" />

          {/* Desktop: inline links. Hidden on phones, where the drawer is used. */}
          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className="nav-link">
                {l.label}
              </NavLink>
            ))}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-drawer"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <CloseIcon className="btn-icon" />
            ) : (
              <MenuIcon className="btn-icon" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile drawer — a sibling of <header> so its `position: fixed` is sized
          by the viewport (an ancestor with backdrop-filter would otherwise clip
          it to the nav bar). Shown only under 600px. */}
      <div
        className={`nav-backdrop ${menuOpen ? 'is-open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />
      <aside
        id="nav-drawer"
        className={`nav-drawer ${menuOpen ? 'is-open' : ''}`}
        aria-label="Menu"
        aria-hidden={!menuOpen}
      >
        <div className="nav-drawer__head">
          <span className="nav-drawer__title">Menu</span>
          <button
            type="button"
            className="nav-drawer__close"
            aria-label="Close menu"
            onClick={close}
          >
            <CloseIcon className="btn-icon" />
          </button>
        </div>
        <nav className="nav-drawer__links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className="nav-link"
              onClick={close}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {saveError ? (
        <div className="save-error" role="alert">
          Couldn't save your changes — browser storage may be full. Export a backup, then
          remove a large logo or some old invoices.
        </div>
      ) : null}

      <main className="main">{children}</main>

      <footer className="footer">
        Gogo Invoice · your data stays on this device ·{' '}
        <a
          href="https://github.com/hallucinogen/gogo-invoice"
          target="_blank"
          rel="noreferrer noopener"
        >
          Open source on GitHub
        </a>{' '}
        ·{' '}
        <a href={`${BASE_URL}llms.txt`} target="_blank" rel="noreferrer noopener">
          Automation / agent API
        </a>
      </footer>
    </div>
  )
}
