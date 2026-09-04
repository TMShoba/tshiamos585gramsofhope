import { useEffect, useState } from 'react'

const TARGET_DATE = new Date(2026, 10, 15, 0, 0, 0) // 15 November 2026

function getSnapshot() {
  const now = new Date()
  const diff = Math.max(0, TARGET_DATE.getTime() - now.getTime())

  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)

  const message =
    now.getTime() >= TARGET_DATE.getTime()
      ? 'World Prematurity Day is here — every tiny life matters.'
      : 'Counting down to World Prematurity Day'

  return { days, hours, minutes, seconds, message }
}

function Countdown() {
  const [snapshot, setSnapshot] = useState(getSnapshot)

  useEffect(() => {
    const timer = setInterval(() => {
      setSnapshot(getSnapshot())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="nav-countdown" aria-label="World Prematurity Day countdown">
      <div className="container nav-countdown-inner">
        <p className="nav-countdown-label">15 November 2026</p>
        <p className="nav-countdown-message" aria-live="polite">
          {snapshot.message}
        </p>
        <div className="countdown-timer" aria-live="polite">
          <div className="countdown-unit">
            <strong>{snapshot.days}</strong>
            <small>Days</small>
          </div>
          <div className="countdown-unit">
            <strong>{String(snapshot.hours).padStart(2, '0')}</strong>
            <small>Hours</small>
          </div>
          <div className="countdown-unit">
            <strong>{String(snapshot.minutes).padStart(2, '0')}</strong>
            <small>Minutes</small>
          </div>
          <div className="countdown-unit">
            <strong>{String(snapshot.seconds).padStart(2, '0')}</strong>
            <small>Seconds</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown