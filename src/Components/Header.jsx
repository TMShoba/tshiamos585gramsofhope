import { useState } from 'react'
import { Link } from 'react-router-dom'
import Countdown from './Countdown.jsx'
import logo from '../assets/logo.jpeg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/" onClick={closeMenu}>
          <div className="logo-mark">♡</div>
          <div className="brand-text">
            Tshiamos
            <small>585 Grams of Hope</small>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/about">About Us</Link>
          <Link to="/prematurity">Prematurity</Link>
          <Link to="/nicu">NICU Journey</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/dictionary">Dictionary</Link>
          <Link to="/#stories">Stories</Link>
          <Link to="/get-involved">Get Involved</Link>
          <Link to="/events">Events</Link>
          <Link to="/#contact">Contact Us</Link>
        </nav>

        <img
          className="header-logo"
          src={logo}
          alt="Tshiamos 585 Grams of Hope Foundation logo"
        />

        <button
          className="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav-panel" aria-label="Mobile navigation">
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/prematurity" onClick={closeMenu}>Prematurity</Link>
          <Link to="/nicu" onClick={closeMenu}>NICU Journey</Link>
          <Link to="/resources" onClick={closeMenu}>Resources</Link>
          <Link to="/dictionary" onClick={closeMenu}>Dictionary</Link>
          <Link to="/#stories" onClick={closeMenu}>Stories</Link>
          <Link to="/get-involved" onClick={closeMenu}>Get Involved</Link>
          <Link to="/events" onClick={closeMenu}>Events</Link>
          <Link to="/#contact" onClick={closeMenu}>Contact Us</Link>
        </nav>
      )}

      <Countdown />
    </header>
  )
}

export default Header
