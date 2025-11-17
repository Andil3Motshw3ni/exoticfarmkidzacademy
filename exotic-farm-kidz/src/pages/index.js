import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="animate-fade-up">Welcome to Exotic Farm Kidz Academy</h2>
            <p className="hero-subtitle animate-fade-up delay-1">Nurturing curious minds through farm-based play and learning.</p>
            <p className="hero-description animate-fade-up delay-2">
              Where children ages 2-8 discover the joy of nature, animals, and outdoor learning in a safe, supervised environment.
            </p>
            <div className="cta-row animate-fade-up delay-3">
              <a className="btn primary" href="#programs">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                Explore Our Programs
              </a>
              <Link href="/contact" className="btn secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Book a Visit
              </Link>
            </div>
          </div>
          
          <div className="hero-image animate-fade-up delay-2">
            <img src="/images/hero-farm.svg" alt="Children playing at the farm" />
            <div className="hero-badge">
              <span className="badge-number">2-8</span>
              <span className="badge-text">Years Old</span>
            </div>
          </div>
        </div>
        
        {/* Floating Animals */}
        <div className="floating-animals" aria-hidden="true">
          <img src="/images/animals/chicken.svg" alt="" className="animal animal-1" />
          <img src="/images/animals/cow.svg" alt="" className="animal animal-2" />
          <img src="/images/animals/sheep.svg" alt="" className="animal animal-3" />
        </div>
      </section>

      {/* Programs Section */}
      <section className="section programs" id="programs">
        <div className="container">
          <div className="section-header">
            <h2>Programs & Activities</h2>
            <p>Fun, educational experiences designed for growing minds</p>
          </div>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3>Early Learning</h3>
              <p>Age-appropriate educational activities that spark curiosity and build foundational skills through play.</p>
              <ul>
                <li>Alphabet & Numbers</li>
                <li>Colors & Shapes</li>
                <li>Story Time</li>
              </ul>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Outdoor Play</h3>
              <p>Safe outdoor activities promoting physical development and social skills in nature.</p>
              <ul>
                <li>Nature Walks</li>
                <li>Playground Games</li>
                <li>Group Activities</li>
              </ul>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/>
                  <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>
                  <path d="M8 14v.5"/>
                  <path d="M16 14v.5"/>
                  <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/>
                  <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/>
                </svg>
              </div>
              <h3>Animal Interactions</h3>
              <p>Hands-on experience with friendly farm animals, teaching responsibility and compassion.</p>
              <ul>
                <li>Feeding Time</li>
                <li>Petting & Handling</li>
                <li>Animal Care Basics</li>
              </ul>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
                </svg>
              </div>
              <h3>Water Play</h3>
              <p>Seasonal splash activities in our supervised waterpark area for cooling summer fun.</p>
              <ul>
                <li>Splash Pool</li>
                <li>Water Games</li>
                <li>Summer Specials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3>Open Days</h3>
              <p>Monday - Saturday</p>
              <span className="stat-detail">8:00 AM - 5:00 PM</span>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Age Groups</h3>
              <p>2 — 8 Years</p>
              <span className="stat-detail">Age-appropriate activities</span>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Safety First</h3>
              <p>Supervised Activities</p>
              <span className="stat-detail">Trained caregivers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section gallery-preview">
        <div className="container">
          <div className="section-header">
            <h2>Moments at the Farm</h2>
            <p>Capturing the joy and wonder of learning through play</p>
          </div>
          <Gallery />
          <div className="gallery-cta">
            <Link href="/gallery" className="btn secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Parents Say</h2>
            <p>Trusted by families in our community</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              <p className="testimonial-text">
                "My child absolutely loves coming here! The staff are incredibly warm and caring, and the animal interactions have taught my son so much about responsibility."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">LM</div>
                <div>
                  <strong>Lerato Moyo</strong>
                  <span>Parent of Thabo (4 years)</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              <p className="testimonial-text">
                "Excellent outdoor learning experiences! The nature walks and farm activities have really brought out my daughter's curiosity about the world around her."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">PN</div>
                <div>
                  <strong>Precious Nkosi</strong>
                  <span>Parent of Amahle (6 years)</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              <p className="testimonial-text">
                "Highly recommend the weekend sessions! It's the perfect blend of fun and learning. My kids always come home excited to tell us what they learned."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div>
                  <strong>Sarah van der Merwe</strong>
                  <span>Parent of twins (3 years)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Visit?</h2>
            <p>Schedule a tour to see our facilities and meet our caring team. We'd love to show you around!</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Contact Us
              </Link>
              <a href="tel:+27780000000" className="btn secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
