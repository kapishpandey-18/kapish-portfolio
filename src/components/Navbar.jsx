import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { PRODUCT_VISUALS_ENABLED } from "../constants/featureFlags";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#projects", label: "Projects" },
  { to: "/#services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/experience", label: "Experience" },
  { to: "/dsa", label: "DSA" },
  ...(PRODUCT_VISUALS_ENABLED ? [{ to: "/products-visuals", label: "Products Visuals" }] : []),
  { to: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Detect active section on scroll (only on home page)
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "services", "contact"];
      const scrollPosition = window.scrollY + 150; // offset for navbar height

      let currentSection = "home"; // default to home

      // Check each section and find which one is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          // If we've scrolled past this section's start, it's the active one
          if (scrollPosition >= offsetTop) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (to) => {
    if (!to) return false;

    // Home route - only active when at top of page (home section visible)
    if (to === "/") {
      return location.pathname === "/" && !location.hash && activeSection === "home";
    }

    // For route pages like /case-studies
    if (!to.includes("#")) {
      // Special case: highlight "Case Studies" tab for all case study sub-routes
      if (to === "/case-studies") {
        return location.pathname.startsWith("/case-studies");
      }
      return location.pathname === to;
    }

    // For hash anchors like /#projects
    const [, hash] = to.split("#");
    return location.pathname === "/" && (location.hash === `#${hash}` || activeSection === hash);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-neutral-800/50 shadow-lg">
      <nav
        aria-label="Primary navigation"
        className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-center"
      >
        {/* Mobile menu button - positioned absolutely on the right */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute right-4 flex flex-col gap-1 w-6 h-5 justify-center"
          aria-label="Toggle main navigation"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
        >
          <span
            className={`block h-0.5 w-full bg-neutral-100 transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-neutral-100 transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-neutral-100 transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Desktop menu */}
        <div id="primary-navigation" className="hidden md:flex gap-6 text-sm" role="menubar">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                "transition-all duration-300 px-2 py-1 rounded " +
                (isActive(link.to)
                  ? "text-white border-b-2 border-blue-500"
                  : "text-neutral-300 hover:text-blue-500")
              }
              aria-current={isActive(link.to) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-neutral-800/50 bg-slate-900/95 backdrop-blur-md"
          role="menu"
        >
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500 transition-colors py-2"
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
