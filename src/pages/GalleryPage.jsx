import { useEffect } from 'react'
import Gallery from '../Components/Gallery.jsx'
import PressMentions from '../Components/PressMentions.jsx'

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Gallery />
      <PressMentions />
    </>
  )
}

export default GalleryPage