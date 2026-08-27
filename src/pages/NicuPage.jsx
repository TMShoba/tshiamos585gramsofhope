import { useEffect } from 'react'
import Nicu from '../Components/Nicu.jsx'

function NicuPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Nicu />
}

export default NicuPage
