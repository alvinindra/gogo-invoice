import { useEffect, useState, type ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { useStore } from '../store/AppStore'
import { ThemeToggle } from './ThemeToggle'
import { CloseIcon, MenuIcon } from './icons'

const BASE_URL = import.meta.env?.BASE_URL ?? '/'

export default function Layout({ children }: { children: ReactNode }) {
  const { saveError } = useStore()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile sheet on Escape, and lock body scroll while it's open.
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
          <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <img src={`${BASE_URL}icon.svg`} alt="" />
            <span>Gogo Invoice</span>
          </NavLink>

          <span className="nav-spacer" />

          <nav
            id="nav-sheet"
            className={`nav-links ${menuOpen ? 'is-open' : ''}`}
            aria-label="Primary"
          >
            <NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>
              New invoice
            </NavLink>
            <NavLink
              to="/history"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              History
            </NavLink>
            <NavLink
              to="/companies"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Companies
            </NavLink>
            <NavLink to="/data" className="nav-link" onClick={() => setMenuOpen(false)}>
              Backup
            </NavLink>
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-sheet"
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

      <div
        className={`nav-backdrop ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

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
