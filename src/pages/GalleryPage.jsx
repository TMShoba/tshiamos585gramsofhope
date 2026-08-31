import { useEffect } from 'react'
import Gallery from '../Components/Gallery.jsx'

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Gallery />
}

export default GalleryPage