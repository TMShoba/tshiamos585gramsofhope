import { useEffect, useRef, useState } from 'react'

const momentOptions = [
  'First Hold',
  'Kangaroo Care',
  'Discharge Day',
  'Milestone',
  'Other',
]

const emptyForm = {
  name: '',
  weight: '',
  gestationalAge: '',
  moment: momentOptions[0],
  memory: '',
  photo: null,
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

function MemoryModal({ onClose, onSubmit }) {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const [justAdded, setJustAdded] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhotoChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const dataUrl = await readFileAsDataURL(file)
      setForm((prev) => ({ ...prev, photo: dataUrl }))
    } catch {
      setError('Could not read that photo — please try a different file.')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.memory.trim()) {
      setError("Please add baby's name/initials and a short memory.")
      return
    }
    const newMemory = {
      id: `memory-${Date.now()}`,
      name: form.name.trim(),
      weight: form.weight.trim(),
      gestationalAge: form.gestationalAge.trim(),
      moment: form.moment,
      memory: form.memory.trim(),
      photo: form.photo,
    }
    onSubmit(newMemory)
    setJustAdded(true)
    setTimeout(() => {
      onClose()
    }, 900)
  }

  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="memory-modal-title">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h3 id="memory-modal-title">Add a Family Memory</h3>
        <p className="modal-subtitle">
          Share a photo and a small piece of your journey for the wall.
        </p>

        {justAdded ? (
          <p className="form-success">Thank you for sharing your memory 💜</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="memory-photo">Photo (optional)</label>
              <div className="photo-upload">
                {form.photo ? (
                  <img className="photo-upload-preview" src={form.photo} alt="Preview" />
                ) : (
                  <div className="photo-upload-preview">♡</div>
                )}
                <input
                  id="memory-photo"
                  className="photo-upload-input"
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handlePhotoChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="memory-name">Baby's Name or Initials *</label>
              <input
                id="memory-name"
                type="text"
                name="name"
                placeholder="e.g. T.M. or Baby Naledi"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="memory-weight">Birth Weight</label>
                <input
                  id="memory-weight"
                  type="text"
                  name="weight"
                  placeholder="e.g. 858g"
                  value={form.weight}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="memory-gestation">Gestational Age</label>
                <input
                  id="memory-gestation"
                  type="text"
                  name="gestationalAge"
                  placeholder="e.g. 26 weeks"
                  value={form.gestationalAge}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="memory-moment">Moment</label>
              <select id="memory-moment" name="moment" value={form.moment} onChange={handleChange}>
                {momentOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="memory-text">Your Memory *</label>
              <textarea
                id="memory-text"
                name="memory"
                placeholder="e.g. The first time we held her, or the day we finally brought her home..."
                value={form.memory}
                onChange={handleChange}
              />
            </div>

            {error && <p className="form-error">{error}</p>}

            <div className="form-actions">
              <button type="button" className="btn btn-light" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add to Memory Wall
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default MemoryModal