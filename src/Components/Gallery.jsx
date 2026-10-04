import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import imgIncubator from '../assets/Gallery/tshiamo-01-incubator.jpeg'
import videoNicu from '../assets/Gallery/tshiamo-02-video.mp4'
import imgChristmasNicu from '../assets/Gallery/tshiamo-03-christmas-nicu.jpeg'
import imgNicuTeam from '../assets/Gallery/tshiamo-04-nicu-team.jpeg'
import imgDummies from '../assets/Gallery/tshiamo-05-dummies.jpeg'
import imgNappies from '../assets/Gallery/tshiamo-06-nappies.jpeg'
import imgBeanies from '../assets/Gallery/tshiamo-07-beanies.jpeg'
import imgFormula from '../assets/Gallery/tshiamo-08-formula.jpeg'
import imgDedication from '../assets/Gallery/tshiamo-09-dedication.jpeg'
import imgFirstBirthdayA from '../assets/Gallery/tshiamo-10-first-birthday-a.jpeg'
import imgFirstBirthdayB from '../assets/Gallery/tshiamo-11-first-birthday-b.jpeg'
import imgTraditionalWrap from '../assets/Gallery/tshiamo-12-traditional-wrap.jpeg'
import imgSecondBirthday from '../assets/Gallery/tshiamo-13-second-birthday.jpeg'
import imgSiblings from '../assets/Gallery/tshiamo-14-siblings.jpeg'
import imgPlaytimeA from '../assets/Gallery/tshiamo-15-playtime-a.jpeg'

// ─────────────────────────────────────────────────────────
// ⚠️ These captions are our best guess from the photos alone —
// please read through and correct any details, dates, or
// milestones that aren't quite right before this goes live.
// ─────────────────────────────────────────────────────────
const milestones = [
  {
    type: 'image',
    src: imgIncubator,
    date: '23 November 2023',
    caption: 'The very beginning — 585 grams of fight.',
  },
  {
    type: 'image',
    src: imgChristmasNicu,
    date: '25 December 2023',
    caption: 'Christmas in the NICU — celebrating together, machines and all.',
  },
  {
    type: 'image',
    src: imgNicuTeam,
    date: '4 May 2024',
    caption: 'A good day with the incredible NICU team who became family.',
  },
  {
    type: 'video',
    src: videoNicu,
    date: '14 February 2024',
    caption: 'A short clip from our NICU days together.',
  },
  {
    type: 'image',
    src: imgDummies,
    caption: "Small keepsakes from a season we'll never forget.",
  },
  {
    type: 'image',
    src: imgNappies,
    caption: 'Every size a reminder of how far she has come.',
  },
  {
    type: 'image',
    src: imgBeanies,
    caption: 'Handmade with love — the tiniest hats and mittens.',
  },
  {
    type: 'image',
    src: imgFormula,
    caption: 'From premature formula to growing-up milk — a feeding journey of its own.',
  },
  {
    type: 'image',
    src: imgDedication,
    date: '4 May 2024',
    caption: "A blessing and a thank you — Tshiamo's dedication day.",
  },
  {
    type: 'image',
    src: imgFirstBirthdayA,
    date: '14 October 2024',
    caption: 'Turning one — the milestone we prayed for.',
  },
  {
    type: 'image',
    src: imgFirstBirthdayB,
    date: '14 October 2024',
    caption: 'Cake, curiosity, and a whole lot of joy.',
  },
  {
    type: 'image',
    src: imgTraditionalWrap,
    caption: 'Wrapped in tradition and love with Big sister Paballo',
  },
  {
    type: 'image',
    src: imgSiblings,
    date: '14 October 2024',
    caption: 'Life at home, Tshiamo with her brother Odirile and Oreeditse',
  },
  {
    type: 'image',
    src: imgSecondBirthday,
    date: '14 October 2025',
    caption: 'Two years old, and thriving.',
  },
  {
    type: 'image',
    src: imgPlaytimeA,
    date: '07 August 2026',
    caption: "Just an ordinary afternoon — the kind we once weren't sure we'd get.",
  },
]

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const closeLightbox = () => setActiveIndex(null)

  useEffect(() => {
    if (activeIndex === null) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Tshiamo's Journey</div>
          <h2>A gallery of milestones.</h2>
          <p className="lead">
            From an incubator to a giggling toddler — every photo here is a
            small victory. Thank you for celebrating them with us.
          </p>
        </div>

        <div className="gallery-grid">
          {milestones.map((item, index) => (
            <div className="gallery-item" key={item.src}>
              {item.type === 'video' ? (
                <video
                  className="gallery-media"
                  src={item.src}
                  controls
                  preload="metadata"
                />
              ) : (
                <button
                  type="button"
                  className="gallery-media-button"
                  onClick={() => setActiveIndex(index)}
                  aria-label="View larger photo"
                >
                  <img className="gallery-media" src={item.src} alt={item.caption} />
                </button>
              )}
       <p className="gallery-date">{item.date}</p>
       <p className="gallery-caption">{item.caption}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link className="btn btn-light" to="/#stories">
            Share Your Own Story →
          </Link>
        </div>
      </div>

      {activeIndex !== null && milestones[activeIndex].type === 'image' && (
        <div
          className="modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          <div className="lightbox">
            <button
              type="button"
              className="modal-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              className="lightbox-img"
              src={milestones[activeIndex].src}
              alt={milestones[activeIndex].caption}
            />
            <p className="lightbox-date">{milestones[activeIndex].date}</p>
            <p className="lightbox-caption">{milestones[activeIndex].caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery

