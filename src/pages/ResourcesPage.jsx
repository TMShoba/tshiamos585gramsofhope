import { useEffect } from 'react'
import Resources from '../Components/Resources.jsx'

function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Resources />
}

export default ResourcesPage
