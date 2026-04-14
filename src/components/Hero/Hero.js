import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <h1 className="hero__title">Damarara</h1>
        <p className="hero__subtitle">Tea & Coffee</p>
        <p className="hero__tagline">From the misty hills of Rwanda to your cup</p>
        <div className="hero__actions">
          <Link to="/shop" className="hero__btn hero__btn--primary">
            Explore Collection
          </Link>
          <Link to="/history" className="hero__btn hero__btn--secondary">
            Our Story
          </Link>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
