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
            <a className="btn btn-light" href="#stories">
              Share Your Story →
            </a>
          </div>
          <div className="quick-card">
            <strong>Get support</strong>
            <span>Find information and resources for families.</span>
            <a className="btn btn-light" href="#support">
              Get Support →
            </a>
          </div>
          <div className="quick-card" id="donate">
            <strong>Donate</strong>
            <span>Help us build awareness and support programmes.</span>
            <a className="btn btn-pink" href="#contact">
              Donate →
            </a>
          </div>
        </div>
      </section>
    )
  }
   
  export default QuickActions