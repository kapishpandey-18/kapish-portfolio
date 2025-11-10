import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (to) => {
    if (!to) return false
    // anchor links like '/#projects'
    if (to.includes('#')) {
      const [, hash] = to.split('#')
      return location.pathname === '/' && location.hash === `#${hash}`
    }
    return location.pathname === to
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-neutral-800/50 shadow-lg">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-center">
        {/* Mobile menu button - positioned absolutely on the right */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute right-4 flex flex-col gap-1 w-6 h-5 justify-center"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-full bg-neutral-100 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-neutral-100 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-neutral-100 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-sm">
          {[
            { to: '/#about', label: 'About' },
            { to: '/#projects', label: 'Projects' },
            { to: '/#services', label: 'Services' },
            { to: '/case-studies', label: 'Case Studies' },
            { to: '/experience', label: 'Experience' },
            { to: '/products-visuals', label: 'Products Visuals' },
            { to: '/#contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                'transition-colors px-2 py-1 rounded ' +
                (isActive(link.to)
                  ? 'text-white border-b-2 border-blue-500'
                  : 'text-neutral-300 hover:text-blue-500')
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-800/50 bg-slate-900/95 backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <Link to="/#about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors py-2">About</Link>
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
