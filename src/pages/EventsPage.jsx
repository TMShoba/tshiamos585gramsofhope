import { useEffect } from 'react'
import Events from '../Components/Events.jsx'

function EventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Events />
}

export default EventsPage
