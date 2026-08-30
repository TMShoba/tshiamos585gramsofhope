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
            <h3>Volunteering</h3>
            <p>
              Give your time, skills and energy to support the
              foundation's work with families and awareness campaigns.
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
            <h3>Partnerships</h3>
            <p>
              Partner with the foundation as an organisation, business or
              healthcare institution to support awareness and family
              programmes.
            </p>
            <Link
              className="btn btn-primary"
              to="/#contact"
              style={{ marginTop: '18px' }}
            >
              Become a Partner
            </Link>
          </div>
          <div className="card">
            <div className="icon">∞</div>
            <h3>Donations</h3>
            <p>
              Host a fundraiser or give directly — every donation helps us
              reach more NICU families with support and resources.
            </p>
            <Link
              className="btn btn-primary"
              to="/donate"
              style={{ marginTop: '18px' }}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved