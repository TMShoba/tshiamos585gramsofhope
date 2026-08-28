import { useEffect, useState } from 'react'
import MemoryModal from './MemoryModal.jsx'
import AddMemoryCard from './AddMemoryCard.jsx'
import StoryModal from './StoryModal.jsx'
import StoryCard from './StoryCard.jsx'

const MEMORY_KEY = 'tshiamos-memory-wall'
const SUCCESS_KEY = 'tshiamos-success-stories'
const HOPE_KEY = 'tshiamos-hope-stories'
const PAGE_SIZE = 6

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

const seedSuccessStories = [
  {
    id: 'success-seed-1',
    name: 'The Mokoena Family',
    text: 'Born at 26 weeks weighing just 780g, our daughter spent 96 days in the NICU. Today she is a fearless 4-year-old who loves running in the garden.',
    photo: null,
  },
]

const seedHopeStories = [
  {
    id: 'hope-seed-1',
    name: 'A NICU Mom',
    text: 'To any parent just starting this journey — the wires and machines look frightening now, but they are helping your baby fight. It does get brighter.',
    photo: null,
  },
]

function loadFromStorage(key, seed) {
  if (typeof window === 'undefined') return seed
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return seed
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : seed
  } catch {
    return seed
  }
}

function useLocalStorageList(key, seed) {
  const [items, setItems] = useState(() => loadFromStorage(key, seed))

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(items))
    } catch {
      // localStorage may be unavailable — safe to ignore
    }
  }, [key, items])

  const addItem = (item) => setItems((prev) => [item, ...prev])

  return [items, addItem]
}

const tabs = [
  { key: 'memories', label: 'Family Memories' },
  { key: 'success', label: 'Success Stories' },
  { key: 'hope', label: 'Hope Stories' },
]

function Stories() {
  const [memories, addMemory] = useLocalStorageList(MEMORY_KEY, seedMemories)
  const [successStories, addSuccessStory] = useLocalStorageList(
    SUCCESS_KEY,
    seedSuccessStories
  )
  const [hopeStories, addHopeStory] = useLocalStorageList(HOPE_KEY, seedHopeStories)

  const [showMemoryModal, setShowMemoryModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showHopeModal, setShowHopeModal] = useState(false)

  const [activeTab, setActiveTab] = useState('memories')
  const [visibleCounts, setVisibleCounts] = useState({
    memories: PAGE_SIZE,
    success: PAGE_SIZE,
    hope: PAGE_SIZE,
  })

  const listsByTab = {
    memories,
    success: successStories,
    hope: hopeStories,
  }
  const emptyTextByTab = {
    memories: 'Be the first to share a memory 💜',
    success: 'Be the first to share a success story 💜',
    hope: 'Be the first to share a message of hope 💜',
  }

  const activeList = listsByTab[activeTab]
  const visibleCount = visibleCounts[activeTab]
  const visibleItems = activeList.slice(0, visibleCount)
  const hasMore = activeList.length > visibleCount

  const showMore = () => {
    setVisibleCounts((prev) => ({ ...prev, [activeTab]: prev[activeTab] + PAGE_SIZE }))
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
              onClick={() => setShowMemoryModal(true)}
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
            <button
              type="button"
              className="btn btn-light"
              style={{ marginTop: '18px' }}
              onClick={() => setShowSuccessModal(true)}
            >
              Share Your Story
            </button>
          </article>
          <article className="card">
            <div className="icon">∞</div>
            <h3>Hope Stories</h3>
            <p>Help create a growing community of encouragement.</p>
            <button
              type="button"
              className="btn btn-light"
              style={{ marginTop: '18px' }}
              onClick={() => setShowHopeModal(true)}
            >
              Tell Your Story
            </button>
          </article>
        </div>

        <div className="memory-wall-tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`memory-wall-tab${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
              <span className="memory-wall-tab-count">{listsByTab[tab.key].length}</span>
            </button>
          ))}
        </div>

        <div className="memory-wall-grid">
          {visibleItems.length === 0 && (
            <p className="memory-wall-empty">{emptyTextByTab[activeTab]}</p>
          )}
          {activeTab === 'memories' &&
            visibleItems.map((m) => <AddMemoryCard key={m.id} memory={m} />)}
          {activeTab === 'success' &&
            visibleItems.map((s) => (
              <StoryCard
                key={s.id}
                entry={s}
                tagLabel="Success Story"
                tagClassName="memory-tag--success"
              />
            ))}
          {activeTab === 'hope' &&
            visibleItems.map((h) => (
              <StoryCard
                key={h.id}
                entry={h}
                tagLabel="Hope Story"
                tagClassName="memory-tag--hope"
              />
            ))}
        </div>

        {hasMore && (
          <div className="memory-wall-more">
            <button type="button" className="btn btn-light" onClick={showMore}>
              Show more
            </button>
          </div>
        )}
      </div>

      {showMemoryModal && (
        <MemoryModal
          onClose={() => setShowMemoryModal(false)}
          onSubmit={addMemory}
        />
      )}

      {showSuccessModal && (
        <StoryModal
          title="Share Your Success Story"
          subtitle="Celebrate a journey that inspires hope for other families."
          nameLabel="Your Name or Family Name *"
          namePlaceholder="e.g. The Mokoena Family"
          textLabel="Your Story *"
          textPlaceholder="e.g. From 26 weeks to running around the garden..."
          submitLabel="Share Story"
          successMessage="Thank you for sharing your story 💜"
          onClose={() => setShowSuccessModal(false)}
          onSubmit={addSuccessStory}
        />
      )}

      {showHopeModal && (
        <StoryModal
          title="Share a Message of Hope"
          subtitle="Your words could be exactly what another family needs to hear today."
          nameLabel="Your Name (or 'Anonymous') *"
          namePlaceholder="e.g. A NICU Mom, or your name"
          textLabel="Your Message *"
          textPlaceholder="e.g. To any parent just starting this journey..."
          submitLabel="Share Message"
          successMessage="Thank you for sharing your message 💜"
          onClose={() => setShowHopeModal(false)}
          onSubmit={addHopeStory}
        />
      )}
    </section>
  )
}

export default Stories