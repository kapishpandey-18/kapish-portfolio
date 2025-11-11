import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ExperienceSection from './components/Experience'
import Services from './components/Services'
import SkillsMatrix from './components/SkillsMatrix'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

import CaseStudiesIndex from './pages/case-studies/Index.jsx'
import CSBBS from './pages/case-studies/BBS.jsx'
import CSCleanMyCar from './pages/case-studies/CleanMyCar.jsx'
import ExperiencePage from './pages/Experience.jsx'
import ProductsVisualsPage from './pages/ProductsVisuals.jsx'
import NotFound from './pages/NotFound.jsx'

function Home() {
  const location = useLocation()
  
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Default to top (Home section) when landing on home page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])
  
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <SkillsMatrix />
      <ExperienceSection />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudiesIndex />} />
            <Route path="/case-studies/bbs" element={<CSBBS />} />
            <Route path="/case-studies/cleanmycar" element={<CSCleanMyCar />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/products-visuals" element={<ProductsVisualsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
