import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__brand-section">
          {/* LOGO PLACEHOLDER — Replace with actual logo */}
          <div className="logo-placeholder footer__logo-img">Logo</div>
          <div className="footer__brand-name">Damarara</div>
          <p className="footer__tagline">
            From the misty hills of Rwanda to your cup. Premium tea and coffee crafted with care, honoring tradition and empowering communities.
          </p>
        </div>

        <div className="footer__section">
          <h4>Products</h4>
          <ul className="footer__links">
            <li><Link to="/products">Classic Black Tea</Link></li>
            <li><Link to="/products">Herbal Blends</Link></li>
            <li><Link to="/products">Premium Reserve</Link></li>
            <li><Link to="/products">Coffee Collection</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Company</h4>
          <ul className="footer__links">
            <li><Link to="/history">Our Story</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Follow</h4>
          <ul className="footer__links">
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Damarara Tea & Coffee. All rights reserved. Proudly Rwandan.</p>
      </div>
    </footer>
  );
};

export default Footer;
