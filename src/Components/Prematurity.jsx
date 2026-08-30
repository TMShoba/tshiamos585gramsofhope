const causes = [
  'High blood pressure during pregnancy',
  'Diabetes and other maternal health conditions',
  'Multiple pregnancies (twins, triplets, or more)',
  'Infections during pregnancy',
  'Problems with the placenta or cervix',
  'Smoking, alcohol, or substance use during pregnancy',
  'High levels of stress and poor maternal health',
]

const challenges = [
  'Breathing difficulties',
  'Feeding and digestive problems',
  'Increased risk of infections',
  'Difficulty maintaining body temperature',
  'Vision and hearing complications',
  'Developmental delays',
]

function Prematurity() {
  return (
    <section className="section" id="prematurity">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Understanding Prematurity</div>
          <h2>What is prematurity?</h2>
          <p className="lead">
            Prematurity occurs when a baby is born before 37 weeks of
            pregnancy — and it remains one of the leading causes of newborn
            health complications worldwide.
          </p>
        </div>

        <div className="info-grid-2">
          <div className="info-box">
            <h3>What Is Prematurity</h3>
            <p>
              Prematurity occurs when a baby is born before 37 weeks of
              pregnancy. Because they arrive earlier than expected,
              premature babies may not have had enough time to fully
              develop in the womb. As a result, they often require
              specialised medical care to help them grow, develop, and
              overcome early health challenges. Prematurity affects
              millions of families worldwide and remains one of the
              leading causes of newborn health complications.
            </p>
          </div>
          <div className="info-box">
            <h3>Premature Birth</h3>
            <p>
              A premature birth, also known as a preterm birth, happens
              when a baby is born before completing the normal 40-week
              pregnancy period. Babies born prematurely can range from
              slightly early to extremely premature. The earlier a baby is
              born, the greater the likelihood that they will need
              additional medical support, often in a Neonatal Intensive
              Care Unit (NICU). Despite these challenges, many premature
              babies go on to live healthy and fulfilling lives with
              proper care and support.
            </p>
          </div>
        </div>

        <div className="info-grid-2" style={{ marginTop: '24px' }}>
          <div className="card">
            <h3>Causes</h3>
            <p style={{ marginBottom: '14px' }}>
              In many cases, the exact cause of a premature birth is
              unknown. However, several factors can increase the risk of
              delivering early, including:
            </p>
            <ul className="info-list">
              {causes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Challenges</h3>
            <p style={{ marginBottom: '14px' }}>
              Premature babies face unique challenges because some of
              their organs may not be fully developed at birth. These
              challenges can include:
            </p>
            <ul className="info-list">
              {challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="lead" style={{ marginTop: '24px', fontStyle: 'italic' }}>
          It is important to remember that premature birth can happen to
          anyone, even when a mother has done everything possible to have
          a healthy pregnancy.
        </p>

        <div className="remember-box" style={{ marginTop: '36px' }}>
          <strong>How It Affects Babies and Families</strong>
          <p>
            Prematurity affects more than just the baby; it impacts the
            entire family. Parents often experience fear, anxiety, and
            emotional exhaustion as they navigate medical treatments, long
            hospital stays, and uncertainty about their baby's future. For
            babies, the journey may involve weeks or months in the NICU
            before they are strong enough to go home — and for families,
            every small milestone becomes a victory. While the journey can
            be difficult, it is also filled with hope. With the support of
            healthcare professionals, family, and organisations like
            Tshiamo's Hope Foundation, many premature babies thrive and go
            on to achieve incredible things. Every journey is different,
            but no family should have to walk it alone. 💜
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prematurity