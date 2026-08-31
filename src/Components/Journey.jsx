import { Link } from 'react-router-dom'

function Journey() {
  return (
    <section className="section story" id="journey">
      <div className="container story-grid">
        <div className="number-card">
          <div className="big">585</div>
          <div className="unit">grams of courage</div>
          <p style={{ marginTop: '25px', opacity: 0.85 }}>
            A powerful reminder that a number on a scale can never measure
            the size of a life.
          </p>
        </div>
        <div>
          <div className="kicker">Start with Tshiamo's journey</div>
          <h2>From a fragile beginning to a message of hope.</h2>
          <p className="lead">
            Tshiamos 585 Grams of Hope was born from an extraordinary
            premature-birth journey involving a baby weighing just 585
            grams. That experience became more than a story — it became a
            purpose.
          </p>
          <div className="quote">
            "Small beginnings can become extraordinary stories."
          </div>
          <p className="lead">
            The foundation aims to create a safe, compassionate space where
            parents can find encouragement, communities can learn, and
            organisations can help strengthen support for premature babies
            and their families.
          </p>
          <Link className="btn btn-light" to="/journey" style={{ marginTop: '10px' }}>
            View More →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Journey