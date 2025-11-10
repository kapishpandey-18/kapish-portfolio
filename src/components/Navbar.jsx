import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-neutral-800/50 shadow-lg">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between md:justify-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/assets/profile.svg" 
            alt="Kapish Pandey" 
            className="w-10 h-10 rounded-full border-2 border-blue-500/50 group-hover:border-blue-400 transition-colors"
          />
          <span className="hidden sm:block font-semibold tracking-wide text-blue-500 group-hover:text-blue-400 transition-colors">Kapish Pandey</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1 w-6 h-5 justify-center"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-full bg-neutral-100 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-neutral-100 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-neutral-100 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link to="/#projects" className="hover:text-blue-500 transition-colors">Projects</Link>
          <Link to="/#services" className="hover:text-blue-500 transition-colors">Services</Link>
          <Link to="/case-studies" className="hover:text-blue-500 transition-colors">Case Studies</Link>
          <Link to="/experience" className="hover:text-blue-500 transition-colors">Experience</Link>
          <Link to="/products-visuals" className="hover:text-blue-500 transition-colors">Products Visuals</Link>
          <Link to="/#contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-800/50 bg-slate-900/95 backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <Link to="/#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors py-2">Projects</Link>
            <Link to="/#services" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors py-2">Services</Link>
            <Link to="/case-studies" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors py-2">Case Studies</Link>
            <Link to="/experience" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors py-2">Experience</Link>
            <Link to="/products-visuals" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors py-2">Products Visuals</Link>
            <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors py-2">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
