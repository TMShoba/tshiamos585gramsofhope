function AddMemoryCard({ memory }) {
  return (
    <div className="memory-card">
      <div className="memory-card-head">
        {memory.photo ? (
          <img className="memory-card-photo" src={memory.photo} alt={memory.name} />
        ) : (
          <div className="memory-card-photo">
            {memory.name.trim().charAt(0).toUpperCase() || '♡'}
          </div>
        )}
        <div>
          <div className="memory-card-name">{memory.name}</div>
          <div className="memory-card-badges">
            {memory.weight && <span className="memory-badge">{memory.weight}</span>}
            {memory.gestationalAge && (
              <span className="memory-badge">{memory.gestationalAge}</span>
            )}
          </div>
        </div>
      </div>
      {memory.moment && <span className="memory-tag">{memory.moment}</span>}
      <p className="memory-card-text">"{memory.memory}"</p>
    </div>
  )
}

export default AddMemoryCard