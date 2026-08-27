import { useEffect } from 'react'
import GetInvolved from '../Components/GetInvolved.jsx'

function GetInvolvedPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <GetInvolved />
}

export default GetInvolvedPage
