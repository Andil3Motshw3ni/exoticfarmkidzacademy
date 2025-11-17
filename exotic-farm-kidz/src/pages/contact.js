import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <h1>Contact Us</h1>
          <p>Have questions? We'd love to hear from you. Send us a message or book a visit!</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info-grid">
            <div className="info-card">
              <div className="info-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Visit Us</h3>
              <p>Main Road, Farmville</p>
              <p className="info-detail">Easy access with ample parking</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Call Us</h3>
              <p><a href="tel:+27780000000">+27 78 000 0000</a></p>
              <p className="info-detail">Mon - Sat: 8AM - 5PM</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p><a href="mailto:info@exoticfarmkidz.org">info@exoticfarmkidz.org</a></p>
              <p className="info-detail">We respond within 24 hours</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Opening Hours</h3>
              <p>Mon - Sat: 8:00 AM - 5:00 PM</p>
              <p className="info-detail">Sunday: Closed</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-card">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <div className="map-placeholder">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
              <line x1="9" y1="3" x2="9" y2="18"/>
              <line x1="15" y1="6" x2="15" y2="21"/>
            </svg>
            <h3>Find Us on the Map</h3>
            <p>Replace this placeholder with an embedded Google Map showing your location.</p>
            <div className="map-instructions">
              <p>To add a map:</p>
              <ol>
                <li>Go to Google Maps</li>
                <li>Search for your location</li>
                <li>Click "Share" → "Embed a map"</li>
                <li>Copy the iframe code</li>
                <li>Replace this placeholder</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-card">
              <h3>What ages do you accept?</h3>
              <p>We welcome children aged 2 to 8 years old. Our programs are designed to be age-appropriate for different developmental stages.</p>
            </div>
            
            <div className="faq-card">
              <h3>Do I need to book in advance?</h3>
              <p>Yes, we recommend booking at least 48 hours in advance to ensure availability, especially for weekend sessions and group visits.</p>
            </div>
            
            <div className="faq-card">
              <h3>What should my child bring?</h3>
              <p>Comfortable clothes that can get dirty, closed-toe shoes, sunscreen, a hat, and a water bottle. We provide snacks and all activity materials.</p>
            </div>
            
            <div className="faq-card">
              <h3>Are the animals safe?</h3>
              <p>All our animals are gentle, well-trained, and regularly health-checked. Animal interactions are always supervised by trained staff.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
