function StoryCard({ entry, tagLabel, tagClassName }) {
    return (
      <div className="memory-card">
        <div className="memory-card-head">
          {entry.photo ? (
            <img className="memory-card-photo" src={entry.photo} alt={entry.name} />
          ) : (
            <div className="memory-card-photo">
              {entry.name.trim().charAt(0).toUpperCase() || '♡'}
            </div>
          )}
          <div className="memory-card-name">{entry.name}</div>
        </div>
        {tagLabel && (
          <span className={`memory-tag ${tagClassName || ''}`}>{tagLabel}</span>
        )}
        <p className="memory-card-text">"{entry.text}"</p>
      </div>
    )
  }
  
  export default StoryCard