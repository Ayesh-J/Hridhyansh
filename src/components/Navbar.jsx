import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // Heart removed to avoid unused import
import { CONTACT } from '../config/contact'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Books', path: '/books' },
    { name: 'Stories', path: '/blog' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  const enrollLink =
    `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.messages.enroll)}`

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img
            src="/LOGO.png"
            alt="Hridhyansh"
            className="logo-img"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-links desktop-only">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={enrollLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-btn"
          >
            Start for ₹999
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button className="mobile-menu-btn mobile-only" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={enrollLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mobile-nav-btn"
            onClick={() => setIsOpen(false)}
          >
            Start for ₹999
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar