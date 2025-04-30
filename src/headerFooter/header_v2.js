import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import logo from "../images/logo.png";
import './header_v2.css'; // <-- We'll create this CSS file

export function HeaderV2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a navigation link is clicked or route changes
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Add an effect to close the menu if the route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location]); // Dependency array includes location

  return (
    <div className="header">
      <div className="header-logo-text">
        <Link style={{ display: 'flex', alignItems: 'center' }} to="/" onClick={closeMobileMenu}> {/* Added alignment & close */}
          <div className="header-logo">
            <img src={logo} alt="Interno Logo" /> {/* Improved alt text */}
          </div>
          <div className="header-text">
            <p>Interno</p>
          </div>
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu" // Accessibility
        aria-expanded={isMobileMenuOpen}   // Accessibility
        aria-controls="main-nav-menu"      // Accessibility
      >
        {/* Simple 3-line icon using spans */}
        <span />
        <span />
        <span />
      </button>

      {/* Navigation Links */}
      {/* Add 'open' class based on state for mobile view */}
      {/* Add id for aria-controls */}
      <nav className={`header-pages ${isMobileMenuOpen ? 'open' : ''}`} id="main-nav-menu">
        <ul>
          {/* Add onClick={closeMobileMenu} to each link */}
          <li><Link to={`/`} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to={`/team`} onClick={closeMobileMenu}>Team</Link></li>
          <li><Link to={`/services`} onClick={closeMobileMenu}>Services</Link></li>
          <li><Link to={`/projects`} onClick={closeMobileMenu}>Projects</Link></li>
          <li><Link to={`/blog`} onClick={closeMobileMenu}>Blog</Link></li>
          <li><Link to={`/contact`} onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}