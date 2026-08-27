function Stories() {
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
              <a
                className="btn btn-light"
                href="#contact"
                style={{ marginTop: '18px' }}
              >
                Add a Memory
              </a>
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
        </div>
      </section>
    )
  }
   
  export default Stories