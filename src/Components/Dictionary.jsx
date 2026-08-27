const dictionarySections = [
  {
    letter: 'A',
    terms: [
      {
        term: 'Apnea',
        definition:
          "A temporary pause in a baby's breathing. This is common in premature babies because the part of the brain that controls breathing is still developing.",
      },
      {
        term: 'Apgar Score',
        definition:
          "A quick assessment performed shortly after birth to check a baby's heart rate, breathing, muscle tone, reflexes, and skin colour.",
      },
    ],
  },
  {
    letter: 'B',
    terms: [
      {
        term: 'Bilirubin',
        definition:
          'A yellow substance produced when red blood cells break down. High levels can cause jaundice in newborns.',
      },
      {
        term: 'Bradycardia',
        definition:
          'A slower-than-normal heart rate. Premature babies may occasionally experience bradycardia episodes that are closely monitored by NICU staff.',
      },
      {
        term: 'Breastmilk Fortifier',
        definition:
          'Extra nutrients added to breastmilk to help premature babies grow and gain weight.',
      },
    ],
  },
  {
    letter: 'C',
    terms: [
      {
        term: 'CPAP (Continuous Positive Airway Pressure)',
        definition:
          "A machine that provides gentle air pressure through small tubes in the baby's nose to help keep the lungs open.",
      },
      {
        term: 'Corrected Age',
        definition:
          "A baby's age based on their due date rather than their actual birth date. This helps measure growth and development more accurately in premature babies.",
      },
    ],
  },
  {
    letter: 'D',
    terms: [
      {
        term: 'Desaturation (Desat)',
        definition:
          'A decrease in oxygen levels in the blood. NICU staff monitor oxygen levels closely and respond if they drop too low.',
      },
      {
        term: 'Developmental Care',
        definition:
          "Special care techniques designed to support a baby's growth, comfort, and brain development while in the NICU.",
      },
    ],
  },
  {
    letter: 'E',
    terms: [
      {
        term: 'Enteral Feeding',
        definition:
          'Providing nutrition directly into the stomach through a feeding tube when a baby cannot feed by mouth.',
      },
      {
        term: 'Extremely Premature',
        definition: 'A baby born before 28 weeks of pregnancy.',
      },
    ],
  },
  {
    letter: 'F',
    terms: [
      {
        term: 'Feeding Tube',
        definition:
          'A thin tube placed through the nose or mouth into the stomach to provide milk and nutrients.',
      },
      {
        term: 'Full-Term Baby',
        definition: 'A baby born between 37 and 42 weeks of pregnancy.',
      },
    ],
  },
  {
    letter: 'G',
    terms: [
      {
        term: 'Gestational Age',
        definition:
          'The number of weeks a baby has spent developing in the womb before birth.',
      },
      {
        term: 'Gram',
        definition:
          'A unit used to measure weight. Premature babies may weigh less than 1,000 grams at birth.',
      },
    ],
  },
  {
    letter: 'H',
    terms: [
      {
        term: 'Heart Monitor',
        definition:
          "A machine that continuously tracks a baby's heart rate and breathing.",
      },
      {
        term: 'Hypothermia',
        definition:
          "A condition where a baby's body temperature becomes too low. Premature babies often need incubators to help maintain their temperature.",
      },
    ],
  },
  {
    letter: 'I',
    terms: [
      {
        term: 'Incubator',
        definition:
          'A heated, enclosed bed that helps premature babies stay warm and protected while they grow.',
      },
      {
        term: 'Infection',
        definition:
          'An illness caused by bacteria, viruses, or other germs. Premature babies are more vulnerable to infections because their immune systems are still developing.',
      },
      {
        term: 'IV (Intravenous Line)',
        definition:
          'A small tube placed in a vein to provide fluids, nutrition, or medication.',
      },
    ],
  },
  {
    letter: 'J',
    terms: [
      {
        term: 'Jaundice',
        definition:
          "A common condition that causes a baby's skin and eyes to look yellow due to high bilirubin levels.",
      },
    ],
  },
  {
    letter: 'K',
    terms: [
      {
        term: 'Kangaroo Care',
        definition:
          "Skin-to-skin contact between a parent and baby. This helps regulate the baby's temperature, breathing, heart rate, and promotes bonding.",
      },
    ],
  },
  {
    letter: 'L',
    terms: [
      {
        term: 'Low Birth Weight',
        definition:
          'A baby born weighing less than 2.5 kilograms (2,500 grams).',
      },
      {
        term: 'Lungs',
        definition:
          'Organs responsible for breathing. Premature babies often need assistance because their lungs may not be fully developed.',
      },
    ],
  },
  {
    letter: 'M',
    terms: [
      {
        term: 'Mechanical Ventilator',
        definition:
          'A machine that helps a baby breathe when they cannot do so effectively on their own.',
      },
      {
        term: 'Milestones',
        definition:
          'Important developmental achievements such as breathing without support, feeding independently, or reaching a certain weight.',
      },
    ],
  },
  {
    letter: 'N',
    terms: [
      {
        term: 'Nasal Cannula',
        definition:
          "Small tubes placed in a baby's nose to deliver oxygen.",
      },
      {
        term: 'Neonatal',
        definition:
          'A term relating to newborn babies, especially during the first 28 days of life.',
      },
      {
        term: 'NICU (Neonatal Intensive Care Unit)',
        definition:
          'A specialised hospital unit that provides advanced care for premature and critically ill newborn babies.',
      },
    ],
  },
  {
    letter: 'O',
    terms: [
      {
        term: 'Oxygen Saturation',
        definition:
          "The amount of oxygen in a baby's blood. This is monitored continuously in the NICU.",
      },
    ],
  },
  {
    letter: 'P',
    terms: [
      {
        term: 'Prematurity',
        definition:
          'When a baby is born before completing 37 weeks of pregnancy.',
      },
      {
        term: 'Premature Baby (Preemie)',
        definition:
          'A baby born too early before reaching full-term development.',
      },
      {
        term: 'Phototherapy',
        definition:
          'A special light treatment used to treat jaundice in newborns.',
      },
    ],
  },
  {
    letter: 'R',
    terms: [
      {
        term: 'Respiratory Distress Syndrome (RDS)',
        definition:
          'A breathing problem common in premature babies because their lungs are not fully developed.',
      },
      {
        term: 'Respiratory Support',
        definition:
          'Medical assistance provided to help a baby breathe.',
      },
    ],
  },
  {
    letter: 'S',
    terms: [
      {
        term: 'Sepsis',
        definition:
          'A serious infection in the bloodstream that requires immediate medical treatment.',
      },
      {
        term: 'Skin-to-Skin Contact',
        definition:
          "Another term for Kangaroo Care, where a baby rests directly on a parent's chest.",
      },
    ],
  },
  {
    letter: 'T',
    terms: [
      {
        term: 'Tube Feeding',
        definition:
          'A method of feeding milk through a small tube when a baby is unable to feed from the breast or bottle.',
      },
      {
        term: 'Twin-to-Twin Transfusion Syndrome (TTTS)',
        definition:
          'A condition that can affect identical twins sharing a placenta during pregnancy.',
      },
    ],
  },
  {
    letter: 'U',
    terms: [
      {
        term: 'Ultrasound',
        definition:
          'A safe imaging test that uses sound waves to create pictures of parts of the body, including the brain, heart, and organs.',
      },
    ],
  },
  {
    letter: 'V',
    terms: [
      {
        term: 'Ventilator',
        definition:
          'A machine that assists or controls breathing when a baby needs additional respiratory support.',
      },
      {
        term: 'Vital Signs',
        definition:
          'Measurements that include heart rate, breathing rate, oxygen levels, and temperature.',
      },
    ],
  },
  {
    letter: 'W',
    terms: [
      {
        term: 'Weight Gain',
        definition:
          "One of the most important indicators of a premature baby's growth and progress in the NICU.",
      },
    ],
  },
]

function Dictionary() {
  return (
    <section className="section dictionary-page" id="dictionary">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Medical Dictionary</div>
          <h2>Understand the words you hear.</h2>
          <p className="lead">
            Common medical and NICU terms explained in simple, parent-friendly
            language.
          </p>
        </div>

        <nav className="dictionary-letters" aria-label="Jump to letter">
          {dictionarySections.map(({ letter }) => (
            <a key={letter} href={`#letter-${letter}`}>
              {letter}
            </a>
          ))}
        </nav>

        <div className="dictionary-list">
          {dictionarySections.map(({ letter, terms }) => (
            <section
              key={letter}
              className="dictionary-group"
              id={`letter-${letter}`}
            >
              <h3 className="dictionary-letter">{letter}</h3>
              <div className="dictionary-terms">
                {terms.map(({ term, definition }) => (
                  <article key={term} className="dictionary-term">
                    <h4>{term}</h4>
                    <p>{definition}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dictionary
