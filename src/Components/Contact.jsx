import { useState } from 'react'

// ─────────────────────────────────────────────────────────
// ⚠️ Sign up for a free account at https://formspree.io, create a
// new form, and replace the ID below with your real one
// (e.g. 'https://formspree.io/f/abcdwxyz'). Until this is set to a
// real endpoint, submissions will fail and visitors will see the
// fallback "email us directly" message.
// ─────────────────────────────────────────────────────────
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
const contactEmail = 'info@tshiamos585gramsofhope.org'

const initialForm = {
  name: '',
  email: '',
  reason: 'General Enquiry',
  message: '',
  company: '', // honeypot field — real visitors never fill this in
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot check — if this hidden field got filled in, it's a bot.
    // Pretend success so bots don't learn to avoid the field.
    if (form.company) {
      setStatus('success')
      return
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })

      if (response.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <div className="kicker">Contact Us</div>
          <h2>Help us give hope a louder voice.</h2>
          <p className="lead">
            Whether you are a parent, healthcare professional, organisation,
            donor or supporter, your interest can help this message reach
            further.
          </p>

          {status === 'success' ? (
            <p className="form-success" style={{ textAlign: 'left' }}>
              Thank you — your message has been sent. We'll be in touch soon 💜
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-real">
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
                className="hp-field"
                aria-hidden="true"
              />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Your Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-reason">Reason for Contact</label>
                <select
                  id="contact-reason"
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                >
                  <option>General Enquiry</option>
                  <option>Volunteering</option>
                  <option>Partnership / Sponsorship</option>
                  <option>Media / Press</option>
                  <option>Donation Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <p className="form-error">
                  Please fill in your name, email and message, then try
                  again. You can also email us directly at{' '}
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <div
          className="contact-card"
          style={{
            background: 'linear-gradient(145deg,#fff,#f8eefb)',
            color: 'var(--ink)',
          }}
        >
          <div>
            <h3 style={{ color: 'var(--deep)' }}>Foundation Enquiries</h3>
            <p style={{ color: 'var(--muted)' }}>
              <strong>Email:</strong> {contactEmail}
            </p>
            <p style={{ color: 'var(--muted)' }}>
              <strong>Contact Number:</strong> 078 868 2623
            </p>
            <p style={{ color: 'var(--muted)' }}>
              <strong>Location:</strong> South Africa
            </p>
            <a
              className="btn btn-light"
              href={`mailto:${contactEmail}`}
              style={{ marginTop: '12px' }}
            >
              Email Us Directly →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact

