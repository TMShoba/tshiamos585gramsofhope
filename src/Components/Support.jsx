const contactEmail = 'info@tshiamos585gramsofhope.org'

function Support() {
    return (
      <section className="section contact" id="support">
        <div className="container contact-grid">
          <div>
            <div className="kicker" style={{ color: '#e7c9f7' }}>
              Get Support
            </div>
            <h2>You do not have to navigate the journey alone.</h2>
            <p className="lead">
              This section can connect parents and families with the
              foundation's support resources, community information and
              verified contacts.
            </p>
            <a
              className="btn btn-pink"
              href="#contact"
              style={{ marginTop: '22px' }}
            >
              Request Support →
            </a>
          </div>
          <div className="contact-card">
            <h3>Support &amp; Enquiries</h3>
            <p>
              <strong>Email:</strong> info@tshiamos585gramsofhope.org
            </p>
            <p>
              <strong>Contact Number:</strong> 078 868 2623
            </p>
            <p>
              <strong>Location:</strong> South Africa
            </p>
            <a
              className="btn btn-light"
              href={`mailto:${contactEmail}`}
              style={{ marginTop: '12px' }}
            >
              Send an Email →
            </a>
          </div>
        </div>
      </section>
    )
  }
      
  export default Support

