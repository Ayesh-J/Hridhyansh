import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-xl">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              {/* Heart SVG */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="logo-icon"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              <span className="logo-text">Hridhyansh</span>
            </Link>
            <p className="footer-tagline">BEST Piece of My Heart.</p>
            <p className="footer-desc">Where parents and children rediscover each other. Conscious family bonding based in Goa, India.</p>
          </div>

          <div className="footer-links-container flex justify-between gap-xl">
            <div className="footer-links-col">
              <h4>Explore</h4>
              <Link to="/about">About Us</Link>
              <Link to="/programs">Programs</Link>
              <Link to="/books">Books</Link>
              <Link to="/blog">Stories</Link>
            </div>
            
            <div className="footer-links-col">
              <h4>Contact</h4>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">WhatsApp Us</a>
              <Link to="/contact">Inquire Now</Link>
              <a href="mailto:hello@hridhyansh.in">hello@hridhyansh.in</a>
            </div>
          </div>

          <div className="footer-cta flex-col gap-md">
            <h4>Ready to bond?</h4>
            <p>Your child is waiting. Are you ready?</p>
            <Link to="/programs" className="btn btn-primary">Enroll Now</Link>
            <div className="social-links flex gap-md">
              {/* Instagram SVG */}
              <a href="#" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              
              {/* Facebook SVG */}
              <a href="#" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>

              {/* YouTube SVG */}
              <a href="#" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hridhyansh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer