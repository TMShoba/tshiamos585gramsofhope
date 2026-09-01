import { useEffect, useState } from 'react'

function nextNovember() {
  const now = new Date()
  const year = now.getFullYear()
  let target = new Date(year, 10, 15, 0, 0, 0)
  if (now >= target) {
    target = new Date(year + 1, 10, 15, 0, 0, 0)
  }
  return target
}

function getSnapshot() {
  const now = new Date()
  const target = nextNovember()
  const diff = Math.max(0, target.getTime() - now.getTime())

  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)

  const message =
  now.getMonth() === 10 && now.getDate() >= 15
      ? 'Prematurity Awareness Month is here — every tiny life matters.'
      : 'Counting down to November 15 — Prematurity Awareness Month.'

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
    <div
      className="nav-countdown"
      aria-label="Prematurity Awareness Month countdown"
    >
      <div className="container nav-countdown-inner">
        <p className="nav-countdown-label">
          <span>Nov</span> Prematurity Awareness Month
        </p>
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
