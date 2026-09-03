// ─────────────────────────────────────────────────────────
// ⚠️ Replace these with the real people you'd like to thank.
// Add or remove entries freely — each one just needs a name,
// a role/relationship, and a short thank-you message.
// ─────────────────────────────────────────────────────────
const tributes = [
    {
      name: '[Dr. Jane Doe]',
      role: 'Neonatologist',
      message:
        '[Add a short thank-you message about the care and expertise they brought to your journey.]',
    },
    {
      name: '[The NICU Nursing Team]',
      role: 'NICU Nurses',
      message:
        '[Add a thank-you message for the day-to-day care, patience, and comfort they gave your family.]',
    },
    {
      name: '[Family Member Name]',
      role: 'Family',
      message: '[Add a thank-you message for the support they gave during the hardest days.]',
    },
    {
      name: '[Friend Name]',
      role: 'Friend',
      message: '[Add a thank-you message for showing up when it mattered most.]',
    },
    {
      name: '[Hospital / Unit Name]',
      role: 'Hospital',
      message: '[Add a thank-you message for the facility and care team as a whole.]',
    },
    {
      name: '[Church / Community Group]',
      role: 'Community',
      message: '[Add a thank-you message for the prayers, meals, or support from your community.]',
    },
  ]
  
  function Tribute() {
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
              <div className="memory-card" key={person.name}>
                <div className="memory-card-head">
                  <div className="memory-card-photo">
                    {person.name.replace(/[[\]]/g, '').trim().charAt(0).toUpperCase() || '♡'}
                  </div>
                  <div>
                    <div className="memory-card-name">{person.name}</div>
                    <div className="bank-field-label">{person.role}</div>
                  </div>
                </div>
                <p className="memory-card-text">"{person.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Tribute