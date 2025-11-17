import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import Link from 'next/link'

export default function GalleryPage() {
  const galleryImages = [
    '/images/gallery/photo1.svg',
    '/images/gallery/photo2.svg',
    '/images/gallery/photo3.svg',
    '/images/gallery/photo4.svg',
    '/images/gallery/photo5.svg',
    '/images/gallery/photo6.svg'
  ]

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </nav>
          <h1>Our Gallery</h1>
          <p>Capturing moments of joy, learning, and discovery at Exotic Farm Kidz Academy</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-intro">
            <div className="gallery-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <p>
              Browse through our collection of photos showcasing the wonderful experiences our little learners have at the farm. 
              From animal interactions to outdoor play, every moment is filled with wonder and discovery.
            </p>
          </div>
          
          <Gallery images={galleryImages} />
          
          <div className="gallery-note">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
            <p>
              <strong>Note:</strong> These are placeholder images. Replace with actual photos from Exotic Farm Kidz Academy activities.
            </p>
          </div>
        </div>
      </section>

      <section className="section gallery-cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Want to See More?</h2>
            <p>Visit us in person and experience the magic of farm-based learning firsthand!</p>
            <Link href="/contact" className="btn primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
