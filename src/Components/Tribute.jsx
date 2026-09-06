// ─────────────────────────────────────────────────────────
// ⚠️ Replace these with the real people you'd like to thank.
// Add or remove entries freely — each one just needs a name,
// a role/relationship, and a short thank-you message.
// ─────────────────────────────────────────────────────────


const tributes = [
  {
    name: 'God',
    role: 'Our Refuge & Strength',
    message:
      'Thank You for carrying us through every moment of fear and uncertainty during Tshiamo’s NICU journey. Your love, grace, and faithfulness gave us strength, hope, and comfort. Every milestone and every victory is a testament to Your goodness. To God be all the glory for watching over our little girl and bringing her safely home.',
  },
  {
    name: 'Netcare Krugersdorp Hospital',
    role: 'Hospital',
    message:
      'Thank you to the entire team at Netcare Krugersdorp Hospital for the exceptional care, compassion, and support shown to Tshiamo and our family. From her birth to her discharge, every doctor, nurse, therapist, and staff member played a part in helping our little fighter grow stronger each day. We will forever be grateful.',
  },
  {
    name: 'Dr de Jager & Dr Gerin',
    role: 'Paediatricians',
    message:
      'Thank you for the exceptional care, expertise, and dedication you showed Tshiamo throughout her NICU journey. Your guidance gave us confidence, your compassion gave us comfort, and your commitment helped give Tshiamo the best possible start in life. We are forever grateful for the role you played in her story.',
  },
  {
    name: 'Netcare Krugersdorp NICU Nurses',
    role: 'NICU Nursing Team',
    message:
      'Thank you for the love, encouragement, and outstanding care you showed Tshiamo every day. You became so much more than nurses to our family. A special thank you to Sister Thea, Sister Michelle, and Sister Karin for your warmth, compassion, and unwavering support. Your impact on our lives will never be forgotten.',
  },
  {
    name: 'Robyn Tacon',
    role: 'Physiotherapist',
    message:
      'Thank you for your patience, encouragement, and expertise as Tshiamo grew stronger each day. Your gentle approach and commitment to her progress gave us confidence and hope during a challenging time. We are deeply grateful for the role you played in her growth and development.',
  },
  {
    name: 'Rafeehah Amiroodien',
    role: 'Speech Therapist',
    message:
      'Thank you for your care, guidance, and support throughout Tshiamo’s feeding and developmental journey. Your kindness, reassurance, and knowledge made a meaningful difference to both Tshiamo and our family. We are grateful for the compassion and professionalism you showed every step of the way.',
  },
  {
    name: 'Family & Friends',
    role: 'Community Support',
    message:
      'Thank you for your prayers, encouragement, messages, and unwavering support during a challenging and emotional season. Your kindness lifted us on difficult days, your faith strengthened our hope, and your love reminded us that we were never alone. We are grateful to have shared this journey with you.',
  },
]
  
import { useState } from 'react'

function Tribute() {
  const [selectedTribute, setSelectedTribute] = useState(null)

  return (
    <section className="section section-alt" id="tribute">
      <div className="container">
        <div className="section-head">
          <div className="kicker">With Gratitude</div>
          <h2>A tribute to those who walked this journey with us.</h2>
          <p className="lead">
            No family gets through the NICU alone. These are a few of the
            people we'll never be able to thank enough.
          </p>
        </div>

        <div className="tribute-grid">
          {tributes.map((person) => (
            <div
              className="memory-card"
              key={person.name}
              onClick={() => setSelectedTribute(person)}
            >
              <div className="memory-card-head">
                <div className="memory-card-photo">
                  {person.name
                    .replace(/[[\]]/g, '')
                    .trim()
                    .charAt(0)
                    .toUpperCase() || '♡'}
                </div>

                <div>
                  <div className="memory-card-name">{person.name}</div>
                  <div className="bank-field-label">{person.role}</div>
                </div>
              </div>

              <p className="memory-card-text">
                "{person.message}"
              </p>
            </div>
          ))}
        </div>

        {selectedTribute && (
          <div
            className="tribute-modal-backdrop"
            onClick={() => setSelectedTribute(null)}
          >
            <div
              className="tribute-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="tribute-modal-close"
                onClick={() => setSelectedTribute(null)}
              >
                ✕
              </button>

              <h3>{selectedTribute.name}</h3>
              <p className="bank-field-label">
                {selectedTribute.role}
              </p>

              <p className="tribute-modal-message">
                {selectedTribute.message}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Tribute