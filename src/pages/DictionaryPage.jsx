import { useEffect } from 'react'
import Dictionary from '../Components/Dictionary.jsx'

function DictionaryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Dictionary />
}

export default DictionaryPage
