import { useEffect } from 'react'
import FAQ from '../Components/FAQ.jsx'

function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <FAQ />
}

export default FAQPage