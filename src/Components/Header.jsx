import { Link } from 'react-router-dom'
import Countdown from './Countdown.jsx'
import logo from '../assets/logo.jpeg'

function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
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

        <div className="mobile-menu" aria-hidden="true"></div>
      </div>
      <Countdown />
    </header>
  )
}

export default Header
