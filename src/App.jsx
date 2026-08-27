import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NicuPage from './pages/NicuPage.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import GetInvolvedPage from './pages/GetInvolvedPage.jsx'
import PrematurityPage from './pages/PrematurityPage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import DictionaryPage from './pages/DictionaryPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/nicu" element={<NicuPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/prematurity" element={<PrematurityPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
