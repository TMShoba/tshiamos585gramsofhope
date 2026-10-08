import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Countdown from './Countdown.jsx'
import logo from '../assets/logo.jpeg'

const primaryLinks = [
  { to: '/about', label: 'About' },
  { to: '/prematurity', label: 'Prematurity' },
  { to: '/resources', label: 'Resources' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/events', label: 'Events' },
]

const moreLinks = [
  { to: '/nicu', label: 'NICU Journey' },
  { to: '/dictionary', label: 'Dictionary' },
  { to: '/#stories', label: 'Stories' },
  { to: '/faq', label: 'FAQ' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef(null)
  const headerRef = useRef(null)
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

  // Keep the page offset in sync with the real header height (it changes
  // as the countdown wraps on smaller screens)
  useEffect(() => {
    const header = headerRef.current
    if (!header || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        '--header-offset',
        `${header.offsetHeight}px`
      )
    })
    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  // While the mobile menu is open: lock page scroll, close on Escape,
  // and close if the screen grows to desktop size
  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 851px)')
    const handleResize = (event) => {
      if (event.matches) setMenuOpen(false)
    }
    document.body.classList.add('menu-open')
    document.addEventListener('keydown', handleKey)
    desktop.addEventListener('change', handleResize)
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', handleKey)
      desktop.removeEventListener('change', handleResize)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const isActive = (to) => !to.includes('#') && location.pathname === to

  return (
    <header className="nav" ref={headerRef}>
      <div className="nav-bar">
        <div className="container nav-inner">
          <Link
            className="brand"
            to="/"
            onClick={closeMenu}
            aria-label="Tshiamos 585 Grams of Hope Foundation, home"
          >
            <span className="brand-badge">
              <img className="brand-logo" src={logo} alt="" />
            </span>
            <span className="brand-text" aria-hidden="true">
              <span className="brand-name">Tshiamo&rsquo;s</span>
              <span className="brand-tagline">
                <b>585</b> Grams of Hope
              </span>
            </span>
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

          <div className="mobile-actions">
            <Link
              className={`btn btn-pink mobile-donate${menuOpen ? ' hidden' : ''}`}
              to="/donate"
              onClick={closeMenu}
              tabIndex={menuOpen ? -1 : undefined}
              aria-hidden={menuOpen || undefined}
            >
              Donate
            </Link>
            <button
              type="button"
              className={`mobile-menu${menuOpen ? ' open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="mobile-menu-bar"></span>
              <span className="mobile-menu-bar"></span>
              <span className="mobile-menu-bar"></span>
            </button>
          </div>
        </div>

        <div
          className={`mobile-nav-backdrop${menuOpen ? ' open' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>

        <nav
          id="mobile-nav"
          className={`mobile-nav-panel${menuOpen ? ' open' : ''}`}
          aria-label="Mobile navigation"
          inert={!menuOpen}
        >
          <div className="container mobile-nav-inner">
            <div className="mobile-nav-links">
              {primaryLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={isActive(link.to) ? 'active' : undefined}
                >
                  {link.label}
                  <span aria-hidden="true">›</span>
                </Link>
              ))}
            </div>

            <p className="mobile-nav-heading">More</p>
            <div className="mobile-nav-links">
              {moreLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={isActive(link.to) ? 'active' : undefined}
                >
                  {link.label}
                  <span aria-hidden="true">›</span>
                </Link>
              ))}
            </div>

            <div className="mobile-nav-cta">
              <Link className="btn btn-pink" to="/donate" onClick={closeMenu}>
                Donate
              </Link>
              <Link className="btn btn-primary" to="/#contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <Countdown />
    </header>
  )
}

export default Header
