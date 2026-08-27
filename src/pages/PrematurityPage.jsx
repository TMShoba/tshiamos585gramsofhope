import { useEffect } from 'react'
import Prematurity from '../Components/Prematurity.jsx'

function PrematurityPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Prematurity />
}

export default PrematurityPage
