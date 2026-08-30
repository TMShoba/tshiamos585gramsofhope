import { Link } from 'react-router-dom'

function QuickActions() {
  return (
    <section className="quick">
      <div className="container quick-grid">
        <div className="quick-card">
          <strong>Learn about prematurity</strong>
          <span>
            Understand premature birth and the journey families may face.
          </span>
          <Link className="btn btn-light" to="/prematurity">
            Learn More →
          </Link>
        </div>
        <div className="quick-card">
          <strong>Share your story</strong>
          <span>Your experience may give another family hope.</span>
          <Link className="btn btn-light" to="/#stories">
            Share Your Story →
          </Link>
        </div>
        <div className="quick-card">
          <strong>Get support</strong>
          <span>Find information and resources for families.</span>
          <Link className="btn btn-light" to="/#support">
            Get Support →
          </Link>
        </div>
        <div className="quick-card" id="donate">
          <strong>Donate</strong>
          <span>Help us build awareness and support programmes.</span>
          <Link className="btn btn-pink" to="/donate">
            Donate →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default QuickActions