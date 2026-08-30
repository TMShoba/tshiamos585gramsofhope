import { useEffect } from 'react'
import Donate from '../Components/Donate.jsx'

function DonatePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Donate />
}

export default DonatePage