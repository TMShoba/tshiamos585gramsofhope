const tips = [
  {
    title: 'Ask Questions and Stay Informed',
    text: "Don't be afraid to ask doctors and nurses questions about your baby's condition, treatment plan, and progress. Understanding what is happening can help reduce anxiety and empower you to be an active part of your baby's care.",
  },
  {
    title: 'Take One Day at a Time',
    text: 'The NICU journey is often filled with ups and downs. Try to focus on each day rather than worrying too far into the future. Celebrate small victories, such as weight gain, successful feeds, or improvements in breathing.',
  },
  {
    title: "Participate in Your Baby's Care",
    text: 'When possible, take part in activities such as changing diapers, feeding, bathing, or providing skin-to-skin contact (kangaroo care). These moments help strengthen your bond with your baby and support their development.',
  },
  {
    title: 'Look After Yourself',
    text: 'Your baby needs you to be physically and emotionally strong. Remember to eat well, rest, stay hydrated, and seek support when needed. Taking care of yourself is not selfish, it is essential.',
  },
  {
    title: 'Lean on Your Support System',
    text: "Allow family members, friends, and loved ones to help. Whether it's preparing meals, providing transportation, or simply listening, support can make a significant difference during this difficult time.",
  },
  {
    title: 'Connect with Other NICU Parents',
    text: 'Speaking with other parents who have experienced the NICU can provide comfort and reassurance. Their stories and experiences can remind you that you are not alone.',
  },
  {
    title: 'Keep a Journal of Milestones',
    text: "Record your baby's progress, no matter how small. Taking photos, writing notes, or tracking milestones can help you see how far your baby has come and create lasting memories of their journey.",
  },
  {
    title: 'Focus on Bonding',
    text: 'Even when you cannot hold your baby as much as you would like, there are many ways to connect. Talk, read, sing, or simply sit beside your baby. Your voice and presence can be comforting and reassuring.',
  },
  {
    title: 'Accept Your Emotions',
    text: 'It is normal to feel scared, frustrated, guilty, sad, or overwhelmed. Give yourself permission to experience these emotions and seek professional support if you need it. Emotional well-being is an important part of the NICU journey.',
  },
  {
    title: 'Hold on to Hope',
    text: "Many premature babies overcome incredible challenges and go on to thrive. Progress may be slow at times, but every day is a step forward. Trust the medical team, believe in your baby's strength, and remember that hope is a powerful part of the journey.",
  },
]

function Nicu() {
  return (
    <section className="section resources" id="nicu">
      <div className="container">
        <div className="section-head">
          <div className="kicker">NICU Journey</div>
          <h2>What to expect in the NICU.</h2>
          <p className="lead">
            The Neonatal Intensive Care Unit is a specialised hospital unit
            for premature babies and newborns with serious health
            conditions — often becoming their first home as they grow
            stronger.
          </p>
        </div>

        <div className="info-grid-2">
          <div className="info-box">
            <h3>Neonatal Intensive Care Unit</h3>
            <p>
              The Neonatal Intensive Care Unit (NICU) is a specialised
              hospital unit that provides advanced medical care for
              premature babies and newborns with serious health
              conditions. The NICU is equipped with highly trained
              healthcare professionals and specialised equipment designed
              to support babies who need help with breathing, feeding,
              growth, and development. For many premature babies, the
              NICU becomes their first home as they receive the care they
              need to become stronger and healthier.
            </p>
          </div>
          <div className="info-box">
            <h3>NICU Support</h3>
            <p>
              A NICU journey can be one of the most challenging
              experiences a family will face. NICU support provides
              parents and caregivers with information, emotional
              encouragement, practical resources, and a community of
              people who understand their journey. At Tshiamo's Hope
              Foundation, we believe that supporting families is just as
              important as caring for the baby. Through education,
              advocacy, and shared experiences, we help families navigate
              the emotional and practical realities of life in the NICU.
            </p>
          </div>
        </div>

        <div className="info-grid-2" style={{ marginTop: '20px' }}>
          <div className="info-box">
            <h3>Premature Baby Care</h3>
            <p>
              Premature babies require specialised care because they are
              born before their bodies have fully developed. Depending on
              their needs, they may require assistance with breathing,
              feeding, temperature regulation, and protection from
              infections. Medical teams work closely with families to
              monitor growth and development while providing the best
              possible care. Every premature baby is unique, and their
              care plan is designed to help them reach important
              milestones and prepare for life beyond the hospital.
            </p>
          </div>
          <div className="info-box">
            <h3>What Families Can Expect</h3>
            <p>
              A NICU stay can last anywhere from a few days to several
              months, depending on a baby's condition and progress.
              Parents may experience a range of emotions, including fear,
              worry, hope, and joy as they celebrate milestones such as
              gaining weight, breathing independently, and feeding
              successfully. Although the journey can be overwhelming,
              families are not alone — doctors, nurses, therapists, social
              workers, and support organisations work together every step
              of the way.
            </p>
          </div>
        </div>

        <div className="section-head" style={{ marginTop: '48px' }}>
          <div className="kicker">Tips for Parents</div>
          <h2>Tips for parents during a NICU stay.</h2>
          <p className="lead">
            Having a baby in the NICU can be overwhelming and emotionally
            challenging. While every family's journey is different, here
            are ways to navigate it with greater confidence and hope.
          </p>
        </div>

        <div className="tips-grid">
          {tips.map((tip) => (
            <div className="card" key={tip.title}>
              <h3 style={{ fontSize: '18px' }}>{tip.title}</h3>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>

        <div className="remember-box" style={{ marginTop: '36px' }}>
          <strong>Remember</strong>
          <p>
            You are your baby's biggest advocate and greatest source of
            love. The NICU may be where your journey begins, but it does
            not define your baby's future.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Nicu