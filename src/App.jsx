import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import GuidesPage from './pages/GuidesPage'
import GuidePage from './pages/GuidePage'
import ArchetypePage from './pages/ArchetypePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guide/:slug" element={<GuidePage />} />
          <Route path="/archetype" element={<ArchetypePage />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
