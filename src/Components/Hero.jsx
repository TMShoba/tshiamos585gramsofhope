import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">Every tiny life matters</div>
          <h1>
            585 grams.
            <br />
            <span>A lifetime of hope.</span>
          </h1>
          <p>
            Tshiamos 585 Grams of Hope Foundation is a place for awareness,
            education, encouragement and practical support for premature
            babies and their families.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/journey">
              Start with Tshiamo's journey →
            </Link>
            <Link className="btn btn-pink" to="/donate">
              Donate
            </Link>
            <a className="btn btn-light" href="#support">
              Get support
            </a>
          </div>
   
            {/* <div className="hero-social">
              <div className="hero-social-title">Follow our journey</div>
              <div className="social-links">
                <a
                  className="social-link"
                  href="https://www.facebook.com/tshiamos585grams"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  f
                </a>
                <a
                  className="social-link instagram"
                  href="https://www.instagram.com/tshiamos585grams"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  ◎
                </a>
                <a
                  className="social-link x"
                  href="https://x.com/tshiamos585grams"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  title="X"
                >
                  𝕏
                </a>
                <a
                  className="social-link tiktok"
                  href="https://www.tiktok.com/@tshiamos585grams"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  ♪
                </a>
              </div>
              <div className="hero-social-handle">@tshiamos585grams</div>
            </div> */}
          </div>
   
          <div className="hero-logo-card">
            <img
              className="hero-logo-img"
              src={logo}
              alt="Tshiamos 585 Grams of Hope Foundation logo"
            />
          </div>
        </div>
      </section>
    )
  }
   
  export default Hero