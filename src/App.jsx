import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import SkillsMatrix from "./components/SkillsMatrix";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import SkipToContent from "./components/SkipToContent";
import Seo from "./components/Seo";
import { PRODUCT_VISUALS_ENABLED } from "./constants/featureFlags";

// Lazy load pages for better performance
const CaseStudiesIndex = lazy(() => import("./pages/case-studies/Index.jsx"));
const CSBBS = lazy(() => import("./pages/case-studies/BBS.jsx"));
const CSCleanMyCar = lazy(() => import("./pages/case-studies/CleanMyCar.jsx"));
const CSJioAds = lazy(() => import("./pages/case-studies/JioAds.jsx"));
const ExperiencePage = lazy(() => import("./pages/Experience.jsx"));
const DsaPage = lazy(() => import("./pages/Dsa.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const ProductsVisualsPage = PRODUCT_VISUALS_ENABLED
  ? lazy(() => import("./pages/ProductsVisuals.jsx"))
  : null;

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Default to top (Home section) when landing on home page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Seo
        title="Product-Focused Full Stack Engineer"
        description="Portfolio of Kapish Pandey—building zero-to-one SaaS, fintech, and marketplace products with React, Node.js, and thoughtful UX."
        pathname="/"
      />
      <Hero />
      <About />
      <Projects />
      <Services />
      <SkillsMatrix />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-studies" element={<CaseStudiesIndex />} />
              <Route path="/case-studies/bbs" element={<CSBBS />} />
              <Route path="/case-studies/cleanmycar" element={<CSCleanMyCar />} />
              <Route path="/case-studies/jioads" element={<CSJioAds />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/dsa" element={<DsaPage />} />
              {PRODUCT_VISUALS_ENABLED && (
                <Route path="/products-visuals" element={<ProductsVisualsPage />} />
              )}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
