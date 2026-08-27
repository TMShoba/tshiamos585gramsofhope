import { useEffect, useState } from 'react'
import MemoryModal from "./MemoryModal.jsx";
import AddMemoryCard from "./AddMemoryCard.jsx";

const STORAGE_KEY = 'tshiamos-memory-wall'

const seedMemories = [
  {
    id: 'seed-1',
    name: 'Tshiamo T.',
    weight: '858g',
    gestationalAge: '24 weeks',
    moment: 'Kangaroo Care',
    memory:
      "The first time I held him skin-to-skin, his heartbeat matched mine. That hour changed everything.",
    photo: null,
  },
  {
    id: 'seed-2',
    name: 'Baby Naledi',
    weight: '1.1kg',
    gestationalAge: '28 weeks',
    moment: 'Discharge Day',
    memory:
      '84 days in the NICU and then finally — home. We cried happy tears the whole drive.',
    photo: null,
  },
]

function loadMemories() {
  if (typeof window === 'undefined') return seedMemories
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return seedMemories
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : seedMemories
  } catch {
    return seedMemories
  }
}

function Stories() {
  const [memories, setMemories] = useState(loadMemories)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(memories))
    } catch {
      // localStorage may be unavailable (private browsing, quota, etc.) — safe to ignore
    }
  }, [memories])

  const handleAddMemory = (newMemory) => {
    setMemories((prev) => [newMemory, ...prev])
  }

  return (

    
    <section className="section story" id="stories">
      <div className="container">
        <div className="section-head">
          <div className="kicker">5 • Memory Wall</div>
          <h2>Remember. Celebrate. Honour.</h2>
          <p className="lead">
            A space for families to share memories, milestones, photographs
            and messages of hope.
          </p>
        </div>

        <div className="cards">
          <article className="card">
            <div className="icon">♡</div>
            <h3>Memory Wall</h3>
            <p>
              Share a special memory or milestone from your family's
              journey.
            </p>
            <button
              type="button"
              className="btn btn-light"
              style={{ marginTop: '18px' }}
              onClick={() => setShowModal(true)}
            >
              Add a Memory
            </button>
          </article>
          <article className="card">
            <div className="icon">✦</div>
            <h3>Success Stories</h3>
            <p>
              Celebrate journeys that inspire hope and encourage other
              families.
            </p>
            
            <a
              className="btn btn-light"
              href="#contact"
              style={{ marginTop: '18px' }}
            >
              Share Your Story
            </a>
          </article>
          <article className="card">
            <div className="icon">∞</div>
            <h3>Hope Stories</h3>
            <p>Help create a growing community of encouragement.</p>
            
            <a
              className="btn btn-light"
              href="#contact"
              style={{ marginTop: '18px' }}
            >
              Tell Your Story
            </a>
          </article>
        </div>

        <div className="memory-wall-grid">
          <>{
            memories.length === 0 && (
            <p className="memory-wall-empty">
              Be the first to share a memory 💜
            </p>
          )}
          {memories.map((m) => (
            <AddMemoryCard key={m.id} memory={m} />
          ))}
          </>
        </div>
      </div>

      {showModal && (
        <MemoryModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddMemory}
        />
      )}
    </section>
  )
}

export default Stories