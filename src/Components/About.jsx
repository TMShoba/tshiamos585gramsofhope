import { useEffect, useState } from 'react'

const storyParagraphs = [
  "Tshiamo's Hope Foundation was established in September 2026 from a deeply personal journey of faith, resilience, and hope. The foundation was inspired by the remarkable story of Tshiamo, who was born prematurely in 2023 weighing only 585 grams and faced a challenging fight for survival in the Neonatal Intensive Care Unit (NICU).",
  "Like many parents of premature babies, Tshiamo's family experienced the emotional, physical, and financial challenges that accompany an extended NICU stay. The uncertainty, fear, and isolation often felt by families during this period revealed a critical need for greater support, awareness, and advocacy for premature babies and their parents.",
  "What began as a personal story of overcoming adversity grew into a mission to help others navigating similar journeys. Tshiamo's Hope Foundation was founded to provide encouragement, education, and support to families of premature and critically ill newborns while raising awareness about prematurity and its impact on families and communities.",
  "The foundation believes that every premature baby deserves a fighting chance and that no parent should face the NICU journey alone. Through awareness campaigns, community outreach initiatives, family support programs, and partnerships with healthcare institutions, Tshiamo's Hope Foundation seeks to bring hope to families during some of the most difficult moments of their lives.",
  "A key milestone in this mission is the publication of 585 Grams of Hope - Tshiamo's Fight to Live, a memoir that shares Tshiamo's inspiring journey and serves as a source of hope and encouragement for parents facing similar circumstances.",
  " ",
  " ",
  " ",
  "Precious Risimati",
  "Founder"
]

function About() {
  const [storyOpen, setStoryOpen] = useState(false)

  useEffect(() => {
    if (!storyOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setStoryOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [storyOpen])

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <div className="kicker">About</div>
          <h2>Our story, vision and mission.</h2>
          <p className="lead">
            A foundation built around hope, awareness, compassion and
            support.
          </p>
        </div>
        <div className="about-grid">
          <button
            type="button"
            className="info-box info-box-story"
            onClick={() => setStoryOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={storyOpen}
          >
            <h3>Our Story</h3>
            <p>
              A 585-gram beginning became the inspiration behind a
              foundation dedicated to helping others understand and
              navigate prematurity.
            </p>
            <span className="info-box-hint">Click to read more</span>
          </button>
          <div className="info-box">
            <h3>Vision</h3>
            <p>
              To grow a supportive community where every premature baby and
              family is seen, encouraged and supported.
            </p>
          </div>
          <div className="info-box">
            <h3>Mission</h3>
            <p>
              To educate, encourage, connect and provide meaningful
              resources around the experience of prematurity.
            </p>
          </div>
        </div>
      </div>

      {storyOpen && (
        <div
          className="story-modal-backdrop"
          onClick={() => setStoryOpen(false)}
        >
          <div
            className="story-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="our-story-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="story-modal-close"
              onClick={() => setStoryOpen(false)}
              aria-label="Close Our Story"
            >
              ×
            </button>
            <div className="kicker">About Us</div>
            <h2 id="our-story-title">Our Story</h2>
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default About
