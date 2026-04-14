import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/history', label: 'History' },
    { path: '/products', label: 'Products' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo">
        {/* LOGO PLACEHOLDER — Replace src with your logo file */}
        <div className="logo-placeholder">Logo</div>
        <span className="navbar__brand">Damarara</span>
      </Link>

      <ul className={`navbar__links ${mobileMenuOpen ? 'navbar__links--open' : ''}`}>
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="navbar__toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
      </button>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div className="navbar__overlay" onClick={() => setMobileMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
