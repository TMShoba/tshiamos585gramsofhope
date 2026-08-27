import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../Components/Hero.jsx'
import QuickActions from '../Components/QuickActions.jsx'
import Journey from '../Components/Journey.jsx'
import Stories from '../Components/Stories.jsx'
import Support from '../Components/Support.jsx'
import Contact from '../Components/Contact.jsx'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.replace('#', '')
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 0)

    return () => window.clearTimeout(timer)
  }, [hash])

  return (
    <>
      <Hero />
      <QuickActions />
      <Journey />
      <Stories />
      <Support />
      <Contact />
    </>
  )
}

export default Home
