import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'What is Tshiamos 585 Grams of Hope Foundation?',
    a: "We're a foundation dedicated to raising awareness about premature birth and supporting NICU families through education, community, and practical resources — inspired by Tshiamo's own journey after being born weighing just 585 grams.",
  },
  {
    q: 'Is the foundation a registered non-profit?',
    a: 'Yes, The registration number is [2026/ 705598 /08] We believe in being transparent with our supporters about our registration status.',
  },
  {
    q: 'How can I donate?',
    a: "Visit our Donate page for local EFT and international wire transfer details, along with a unique reference code to include with your payment so we can confirm it's yours.",
  },
  {
    q: 'How can I volunteer or partner with the foundation?',
    a: 'Head to our Get Involved page, or use the contact form on this site — let us know whether you\'re interested in volunteering, a partnership, or sponsorship, and we\'ll follow up.',
  },
  {
    q: 'What is the Memory Wall, and is my information public?',
    a: "The Memory Wall lets families share a photo, memory, or milestone. Right now, entries are saved privately in your own browser rather than shared publicly across all visitors — we're working on making it a fully shared community wall in future.",
  },
  {
    q: 'How do I share my success story or a message of hope?',
    a: 'On the Memory Wall section of our homepage, you\'ll find "Share Your Story" and "Tell Your Story" buttons that open a short form for Success Stories and Hope Stories.',
  },
  {
    q: 'Where is the foundation based?',
    a: '[Johannesburg/Ormonde] We are based in South Africa and support families locally and internationally.',
  },
  {
    q: "I'm a NICU parent right now — can you help directly?",
    a: "While we can't provide medical care, our NICU Journey and Resources pages offer guidance, tips, and a growing library of templates. For anything medical, please speak to your baby's care team — they know your situation best.",
  },
  {
    q: "I couldn't find my question here — how do I get in touch?",
    a: (
      <>
        Use the contact form on our{' '}
        <Link to="/#contact">Contact page</Link>, or email us directly at{' '}
        hello@tshiamos585.org.
      </>
    ),
  },
]

function FAQ() {
  const [openIds, setOpenIds] = useState(new Set())

  const toggle = (index) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="kicker">FAQ</div>
          <h2>Frequently asked questions.</h2>
          <p className="lead">
            Answers to the questions we're asked most often. Can't find what
            you're looking for? <Link to="/#contact">Get in touch</Link>.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIds.has(index)
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ