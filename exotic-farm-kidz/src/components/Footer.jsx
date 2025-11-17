import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/images/logo.svg" alt="Exotic Farm Kidz Academy" />
          <div>
            <h3>Exotic Farm Kidz Academy</h3>
            <p className="npo">NPO Registration No: 238-935</p>
            <p className="mission">Nurturing curious minds through farm-based play and learning.</p>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Main Road, Farmville
          </p>
          <p>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +27 78 000 0000
          </p>
          <p>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            info@exoticfarmkidz.org
          </p>
        </div>

        <div className="footer-hours">
          <h4>Opening Hours</h4>
          <p>Monday - Saturday</p>
          <p className="hours">8:00 AM - 5:00 PM</p>
          <p className="closed">Sunday: Closed</p>
        </div>
      </div>

      <div className="copyright">
        <p>© {new Date().getFullYear()} Exotic Farm Kidz Academy. All rights reserved.</p>
        <p className="credits">Designed with care for little learners</p>
      </div>
    </footer>
  )
}
