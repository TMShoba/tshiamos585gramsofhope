import { useEffect, useState } from 'react'

const TARGET_DATE = new Date(2026, 10, 17, 0, 0, 0) // 17 November 2026

function getSnapshot() {
  const now = new Date()
  const diff = Math.max(0, TARGET_DATE.getTime() - now.getTime())

  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)

  return { days, hours, minutes, seconds, isToday: diff === 0 }
}

const pad = (value) => String(value).padStart(2, '0')

function Countdown() {
  const [snapshot, setSnapshot] = useState(getSnapshot)

  useEffect(() => {
    const timer = setInterval(() => {
      setSnapshot(getSnapshot())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { value: snapshot.days, label: 'Days', short: 'D' },
    { value: pad(snapshot.hours), label: 'Hours', short: 'H' },
    { value: pad(snapshot.minutes), label: 'Minutes', short: 'M' },
    { value: pad(snapshot.seconds), label: 'Seconds', short: 'S' },
  ]

  return (
    <div className="nav-countdown" role="region" aria-label="World Prematurity Day countdown">
      <div className="container nav-countdown-inner">
        <div className="nav-countdown-text">
          <p className="nav-countdown-label">
            <span className="nav-countdown-dot" aria-hidden="true"></span>
            World Prematurity Day
            <span className="nav-countdown-date">17 Nov</span>
          </p>
          <p className="nav-countdown-message">
            {snapshot.isToday
              ? 'It’s here — every tiny life matters.'
              : 'Every tiny life matters. Join us in purple.'}
          </p>
        </div>

        {!snapshot.isToday && (
          <div
            className="countdown-timer"
            aria-label={`${snapshot.days} days, ${snapshot.hours} hours and ${snapshot.minutes} minutes to go`}
          >
            {units.map((unit, index) => (
              <div className="countdown-group" key={unit.label} aria-hidden="true">
                {index > 0 && <span className="countdown-sep">:</span>}
                <div className="countdown-unit">
                  <strong>{unit.value}</strong>
                  <small>
                    <span className="countdown-long">{unit.label}</span>
                    <span className="countdown-short">{unit.short}</span>
                  </small>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Countdown
