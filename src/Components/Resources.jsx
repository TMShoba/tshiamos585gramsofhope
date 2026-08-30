const resourceIntros = [
  {
    title: 'NICU Resources',
    text: "Navigating a NICU journey can feel overwhelming, especially when parents are faced with unfamiliar medical terms, complex decisions, and emotional challenges. This section provides trusted information, educational materials, and guidance to help families better understand their baby's condition and care.",
  },
  {
    title: 'Neonatal Care Resources',
    text: 'Neonatal care focuses on the medical needs of newborn babies, particularly those born prematurely or with health complications. Find easy-to-understand information about newborn development, feeding, growth milestones, medical procedures, follow-up care, and long-term outcomes.',
  },
  {
    title: 'Support Services',
    text: 'No family should have to face the challenges of prematurity alone. Our Support Services connect parents and caregivers with emotional support, counselling resources, peer support networks, healthcare guidance, and community programs.',
  },
  {
    title: 'Practical Tools for Parents and Caregivers',
    text: 'Caring for a premature baby can be a new and sometimes daunting experience. These practical tools — checklists, trackers, and guides — are designed to help families feel more organised, prepared, and confident in their caregiving journey.',
  },
]

const templates = [
  {
    title: 'NICU Parent Daily Journal',
    text: "Keep track of your baby's daily progress, medical updates, questions for doctors, and personal reflections.",
    includes: [
      'Date and daily notes',
      'Weight and growth updates',
      'Medical updates',
      'Questions for healthcare providers',
      'Daily milestones',
      'Parent reflections',
    ],
    file: 'NICU-Daily-Journal.pdf',
  },
  {
    title: 'Questions to Ask Your Medical Team',
    text: "A helpful worksheet to ensure you stay informed about your baby's care and treatment plan.",
    includes: [
      'Diagnosis and treatment questions',
      'Feeding and growth questions',
      'Discharge preparation questions',
    ],
    file: 'Medical-Team-Questions-Template.pdf',
  },
  {
    title: 'Premature Baby Milestone Tracker',
    text: "Celebrate every step of your baby's progress and record important developmental milestones.",
    includes: [
      'Weight milestones',
      'Feeding milestones',
      'Breathing milestones',
      'Developmental achievements',
      'Going-home checklist',
    ],
    file: 'Preemie-Milestone-Tracker.pdf',
  },
  {
    title: 'Kangaroo Care Tracker',
    text: 'Monitor skin-to-skin sessions and observe the benefits for both parent and baby.',
    includes: ['Date and time', 'Duration of session', "Baby's response", 'Parent observations'],
    file: 'Kangaroo-Care-Tracker.pdf',
  },
  {
    title: 'NICU Feeding Log',
    text: "Track feeding schedules and monitor your baby's nutritional progress.",
    includes: ['Feeding times', 'Feeding method', 'Volume consumed', 'Notes and observations'],
    file: 'NICU-Feeding-Log.pdf',
  },
  {
    title: 'Medication and Appointments Tracker',
    text: 'Stay organized with medications, follow-up appointments, and specialist visits.',
    includes: [
      'Medication schedule',
      'Dosage tracker',
      'Appointment calendar',
      'Healthcare provider contacts',
    ],
    file: 'Medication-Appointment-Tracker.pdf',
  },
  {
    title: 'NICU Hospital Bag Checklist',
    text: 'A practical checklist to help parents prepare for extended NICU visits.',
    includes: [
      'Documents and identification',
      'Phone and charger',
      'Notebooks and pens',
      'Comfortable clothing',
      'Self-care essentials',
    ],
    file: 'NICU-Hospital-Bag-Checklist.pdf',
  },
  {
    title: 'Emotional Wellness Check-In',
    text: 'A simple self-assessment tool to help parents monitor their emotional well-being during the NICU journey.',
    includes: [
      'Daily mood tracker',
      'Stress management reminders',
      'Gratitude section',
      'Support contact list',
    ],
    file: 'Parent-Wellness-Tracker.pdf',
  },
  {
    title: 'NICU Discharge Planning Checklist',
    text: 'Prepare for the exciting transition from hospital to home with confidence.',
    includes: [
      'Feeding requirements',
      'Medication instructions',
      'Emergency contacts',
      'Follow-up appointments',
      'Home preparation checklist',
    ],
    file: 'NICU-Discharge-Checklist.pdf',
  },
  {
    title: 'Memory & Milestones Keepsake',
    text: "Capture the special moments and milestones of your baby's NICU journey.",
    includes: [
      'First cuddle',
      'First bottle feed',
      'Reaching 1kg',
      'Coming off oxygen',
      'Going-home day',
      'Photos and personal notes',
    ],
    file: 'NICU-Memory-Book.pdf',
  },
]

function Resources() {
  return (
    <section className="section" id="resources">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Resources</div>
          <h2>Practical tools for parents and families.</h2>
          <p className="lead">
            Trusted information, guidance, and free templates to help you
            feel informed, organised, and supported at every stage of the
            journey.
          </p>
        </div>

        <div className="resource-intro-grid">
          {resourceIntros.map((intro) => (
            <div className="info-box" key={intro.title}>
              <h3>{intro.title}</h3>
              <p>{intro.text}</p>
            </div>
          ))}
        </div>

        <div className="section-head" style={{ marginTop: '48px' }}>
          <div className="kicker">Downloadable Templates</div>
          <h2>Helpful resources you may find here.</h2>
          <p className="lead">
            We're building out a free library of printable guides and
            trackers. Templates marked "Coming soon" are on their way —
            check back, or get in touch if you need one urgently.
          </p>
        </div>

        <div className="tips-grid">
          {templates.map((tpl) => (
            <div className="card" key={tpl.title}>
              <h3 style={{ fontSize: '18px' }}>{tpl.title}</h3>
              <p>{tpl.text}</p>
              <div className="memory-card-badges" style={{ margin: '10px 0 12px' }}>
                {tpl.includes.map((item) => (
                  <span className="memory-badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="resource-download">
                <span className="bank-field-value">{tpl.file}</span>
                <span className="memory-badge">Coming soon</span>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: '36px', textAlign: 'center' }}>
          <div className="kicker">A Message from Tshiamo's Hope Foundation</div>
          <p
            className="quote"
            style={{ margin: '14px auto 0', display: 'inline-block', textAlign: 'left' }}
          >
            "No parent imagines their journey beginning in the NICU. Through
            these resources, we hope to provide comfort, practical support,
            and encouragement. Remember, every gram gained, every milestone
            reached, and every day is a step closer to home."
          </p>
        </div>
      </div>
    </section>
  )
}

export default Resources