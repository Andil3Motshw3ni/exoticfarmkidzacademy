import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="site-root">
      <Header />
      <main>{children}</main>
      <Footer />
      
      {/* Rolling Hills Background */}
      <div className="rolling-hills" aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path className="hill hill-back" d="M0,100 C240,60 480,140 720,100 C960,60 1200,140 1440,100 L1440,200 L0,200 Z" />
          <path className="hill hill-mid" d="M0,120 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,200 L0,200 Z" />
          <path className="hill hill-front" d="M0,140 C240,110 480,170 720,140 C960,110 1200,170 1440,140 L1440,200 L0,200 Z" />
        </svg>
      </div>
    </div>
  )
}
