import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Countdown from './Countdown.jsx'
import logo from '../assets/logo.jpeg'

const primaryLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/nicu', label: 'NICU Journey' },
  { to: '/resources', label: 'Resources' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/events', label: 'Events' },
]

const moreLinks = [
  { to: '/prematurity', label: 'Prematurity' },
  { to: '/dictionary', label: 'Dictionary' },
  { to: '/#stories', label: 'Stories' },
  { to: '/faq', label: 'FAQ' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef(null)
  const location = useLocation()

  // Close any open menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false)
    setMoreOpen(false)
  }, [location])

  // Close the "More" dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img
            className="brand-logo"
            src={logo}
            alt="Tshiamos 585 Grams of Hope Foundation"
          />
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {primaryLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}

          <div className="nav-more" ref={moreRef}>
            <button
              type="button"
              className="nav-more-trigger"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((open) => !open)}
            >
              More <span aria-hidden="true">▾</span>
            </button>
            {moreOpen && (
              <div className="nav-more-panel" role="menu">
                {moreLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    role="menuitem"
                    onClick={() => setMoreOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="nav-cta">
          <Link className="btn btn-pink" to="/donate">
            Donate
          </Link>
          <Link className="btn btn-primary" to="/#contact">
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`mobile-menu-bar${menuOpen ? ' open' : ''}`}></span>
          <span className={`mobile-menu-bar${menuOpen ? ' open' : ''}`}></span>
          <span className={`mobile-menu-bar${menuOpen ? ' open' : ''}`}></span>
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav-panel" aria-label="Mobile navigation">
          {[...primaryLinks, ...moreLinks].map((link) => (
            <Link key={link.to} to={link.to} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <div className="mobile-nav-cta">
            <Link className="btn btn-pink" to="/donate" onClick={closeMenu}>
              Donate
            </Link>
            <Link className="btn btn-primary" to="/#contact" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </nav>
      )}

      <Countdown />
    </header>
  )
}

export default Header
