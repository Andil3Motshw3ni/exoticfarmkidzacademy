import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className={`header-banner ${scrolled ? 'scrolled' : ''}`}>
      {/* Animated Clouds */}
      <div className="clouds-container" aria-hidden="true">
        <svg className="clouds" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <g className="cloud cloud1">
            <ellipse cx="100" cy="60" rx="60" ry="24" fill="white" opacity="0.8" />
            <ellipse cx="140" cy="50" rx="45" ry="18" fill="white" opacity="0.8" />
            <ellipse cx="80" cy="50" rx="40" ry="16" fill="white" opacity="0.8" />
          </g>
          <g className="cloud cloud2">
            <ellipse cx="700" cy="80" rx="70" ry="28" fill="white" opacity="0.7" />
            <ellipse cx="750" cy="70" rx="55" ry="22" fill="white" opacity="0.7" />
            <ellipse cx="680" cy="70" rx="50" ry="20" fill="white" opacity="0.7" />
          </g>
          <g className="cloud cloud3">
            <ellipse cx="400" cy="40" rx="50" ry="20" fill="white" opacity="0.6" />
            <ellipse cx="430" cy="35" rx="35" ry="14" fill="white" opacity="0.6" />
          </g>
        </svg>
      </div>

      <div className="header-inner">
        <Link href="/" className="brand">
          <img src="/images/logo.svg" alt="Exotic Farm Kidz Academy Logo" className="logo" />
          <div className="brand-text">
            <h1>Exotic Farm Kidz Academy</h1>
            <p className="tag">NPO Registration No: 238-935</p>
          </div>
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          aria-label="Toggle Menu" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Home
            </Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              Gallery
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
