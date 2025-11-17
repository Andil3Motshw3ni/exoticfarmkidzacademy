import { useState } from 'react'

export default function Gallery({ images = [] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const defaultImages = Array.from({ length: 6 }).map((_, i) => ({
    src: `/images/gallery/photo${i + 1}.svg`,
    alt: `Farm activity ${i + 1}`
  }))

  const galleryImages = images.length > 0 
    ? images.map(src => ({ src, alt: 'Gallery image' }))
    : defaultImages

  return (
    <>
      <section className="gallery">
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className="gallery-card"
              onClick={() => openLightbox(i)}
            >
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                  <path d="M11 8v6M8 11h6"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <button 
            className="lightbox-prev" 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[currentImage].src} alt={galleryImages[currentImage].alt} />
            <p className="lightbox-counter">{currentImage + 1} / {galleryImages.length}</p>
          </div>
          
          <button 
            className="lightbox-next" 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
