function Contact() {
    return (
      <section className="section" id="contact">
        <div className="container contact-grid">
          <div>
            <div className="kicker">9 • Contact Us</div>
            <h2>Help us give hope a louder voice.</h2>
            <p className="lead">
              Whether you are a parent, healthcare professional,
              organisation, donor or supporter, your interest can help this
              message reach further.
            </p>
          </div>
          <div
            className="contact-card"
            style={{ background: 'linear-gradient(145deg,#fff,#f8eefb)', color: 'var(--ink)' }}
          >
            <h3 style={{ color: 'var(--deep)' }}>Foundation Enquiries</h3>
            <p style={{ color: 'var(--muted)' }}>
              <strong>Email:</strong> hello@tshiamos585.org
            </p>
            <p style={{ color: 'var(--muted)' }}>
              <strong>Location:</strong> South Africa
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '15px' }}>
              Replace the contact details with the foundation's official
              details before launch.
            </p>
            <a
              className="btn btn-primary"
              href="mailto:hello@tshiamos585.org"
              style={{ marginTop: '12px' }}
            >
              Contact the Foundation →
            </a>
          </div>
        </div>
      </section>
    )
  }
   
  export default Contact