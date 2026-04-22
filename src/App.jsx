import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import GuidesPage from './pages/GuidesPage'
import GuidePage from './pages/GuidePage'
import ProPage from './pages/ProPage'
import ProIndustryPage from './pages/ProIndustryPage'
import SuccessPage from './pages/SuccessPage'
import ArchetypePage from './pages/ArchetypePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import RefundPolicyPage from './pages/RefundPolicyPage'

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
          <Route path="/pro" element={<ProPage />} />
          <Route path="/pro/:slug" element={<ProIndustryPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/archetype" element={<ArchetypePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refunds" element={<RefundPolicyPage />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
