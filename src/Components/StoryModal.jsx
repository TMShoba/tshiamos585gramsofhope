import { useEffect, useRef, useState } from 'react'

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

function StoryModal({
  title,
  subtitle,
  nameLabel,
  namePlaceholder,
  textLabel,
  textPlaceholder,
  submitLabel,
  successMessage,
  onClose,
  onSubmit,
}) {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [photo, setPhoto] = useState(null)
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

  const handlePhotoChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const dataUrl = await readFileAsDataURL(file)
      setPhoto(dataUrl)
    } catch {
      setError('Could not read that photo — please try a different file.')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !text.trim()) {
      setError('Please add a name and your story.')
      return
    }
    onSubmit({
      id: `story-${Date.now()}`,
      name: name.trim(),
      text: text.trim(),
      photo,
    })
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
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="story-modal-title">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h3 id="story-modal-title">{title}</h3>
        <p className="modal-subtitle">{subtitle}</p>

        {justAdded ? (
          <p className="form-success">{successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="story-photo">Photo (optional)</label>
              <div className="photo-upload">
                {photo ? (
                  <img className="photo-upload-preview" src={photo} alt="Preview" />
                ) : (
                  <div className="photo-upload-preview">♡</div>
                )}
                <input
                  id="story-photo"
                  className="photo-upload-input"
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handlePhotoChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="story-name">{nameLabel}</label>
              <input
                id="story-name"
                type="text"
                placeholder={namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="story-text">{textLabel}</label>
              <textarea
                id="story-text"
                placeholder={textPlaceholder}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            {error && <p className="form-error">{error}</p>}

            <div className="form-actions">
              <button type="button" className="btn btn-light" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {submitLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default StoryModal