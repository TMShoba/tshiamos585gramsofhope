import { Link } from 'react-router-dom'

function GetInvolved() {
  return (
    <section className="section involve" id="involved">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Get Involved</div>
          <h2>There is a place for everyone.</h2>
          <p className="lead">
            Individuals, organisations and communities can help grow the
            message of hope.
          </p>
        </div>
        <div className="involve-grid">
          <div className="card">
            <div className="icon">♡</div>
            <h3>Volunteer</h3>
            <p>
              Give your time, skills and energy to support the
              foundation's work.
            </p>
            <Link
              className="btn btn-primary"
              to="/#contact"
              style={{ marginTop: '18px' }}
            >
              Volunteer
            </Link>
          </div>
          <div className="card">
            <div className="icon">✦</div>
            <h3>Sponsor</h3>
            <p>
              Partner with the foundation to support awareness and family
              programmes.
            </p>
            <Link
              className="btn btn-primary"
              to="/#contact"
              style={{ marginTop: '18px' }}
            >
              Become a Sponsor
            </Link>
          </div>
          <div className="card">
            <div className="icon">∞</div>
            <h3>Fundraise</h3>
            <p>
              Help raise funds and awareness for the foundation's
              initiatives.
            </p>
            <Link
              className="btn btn-primary"
              to="/#contact"
              style={{ marginTop: '18px' }}
            >
              Start Fundraising
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
