function Events() {
  return (
    <section className="section" id="events">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Events</div>
          <h2>Bringing the community together.</h2>
          <p className="lead">
            Events can create awareness, connection and practical support
            for families.
          </p>
        </div>
        <div className="cards">
          <article className="card">
            <div className="icon">01</div>
            <h3>Annual Walks for Hope</h3>
            <p>
              Community walks celebrating hope and raising awareness about
              prematurity.
            </p>
          </article>

          <article className="card">
            <div className="icon">02</div>
            <h3>NICU Family Support Workshops</h3>
            <p>Support-focused workshops for families and caregivers.</p>
          </article>

          <article className="card">
            <div className="icon">03</div>
            <img
              src="public/71XteI3yobL._SL1500_.jpg"
              alt="Book cover: 585 Grams of Hope – Tshiamo's Fight to Live by Precious Risimati"
              style={{ width: "100%", maxWidth: "260px", borderRadius: "8px", marginBottom: "1rem" }}
            />
            <h3>Now Available for Resale: 585 Grams of Hope – Tshiamo's Fight to Live</h3>
            <p>
              Following its launch on <strong>15 November 2026</strong>, the memoir{" "}
              <strong>"585 Grams of Hope – Tshiamo's Fight to Live"</strong> is now
              available for resale. The book shares Tshiamo's inspiring journey of
              resilience, hope and survival, and aims to raise awareness and support
              for premature babies and their families.
            </p>
            <p>
              <strong>Price: R250</strong>. Copies can be bought directly from the
              author, or online using the link below.
            </p>
            <p>
              To buy a copy, call: <a href="tel:+27788682623">078 868 2623</a>
            </p>

            <a
              href="https://a.co/d/04pQMMpW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: "1rem", display: "inline-block" }}
            >
              Buy the Book on Amazon
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Events
