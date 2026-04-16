import React from 'react';
import Values from '../components/Values/Values';
import ceoImage from '../assets/images/ceo.jpeg';
import './Pages.css';

const teamMembers = [
  {
    name: 'Founder & CEO',
    role: 'Brand Visionary',
    image: ceoImage,
    bio: 'Leading Damarara\'s mission to bring Rwanda\'s finest tea and coffee to the world while empowering local farming communities.',
  },
];

const AboutPage = () => {
  return (
    <main className="page page--with-nav-offset">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">About Damarara</h1>
          <p className="page__hero-subtitle">
            More than a brand — a symbol of Rwandan soil, farmers, and heritage combined with modern quality standards.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="about-heading" style={{ marginBottom: '2rem' }}>Our Mission</h2>
            <p>
              Damarara Tea & Coffee is a proudly Rwandan premium brand built around authenticity, quality, and community impact. We represent the journey of tea and coffee from Rwanda's highland farms to consumers worldwide, emphasizing purity, tradition, and craftsmanship.
            </p>
            <p>
              We are positioned as more than a beverage brand. Damarara is a symbol of Rwandan soil, the dedication of our farmers, and the heritage of a nation — combined with modern quality standards that ensure every cup delivers an exceptional experience.
            </p>
            <p>
              Our commitment extends beyond the product. We empower farmers through fair partnerships, invest in local communities, and preserve the craft that defines Rwandan tea and coffee culture.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section about-section--dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">The person behinds every cup</p>
          </div>
          <div className="about-team-grid">
            {teamMembers.map((member) => (
              <div className="about-team-card" key={member.name}>
                <div className="about-team-avatar" style={{ overflow: 'hidden' }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ width: '90%', height: '110%', objectFit: 'cover', transform: 'scale(1.3)' }} 
                  />
                </div>
                <h3>{member.name}</h3>
                <span className="about-team-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Values />
    </main>
  );
};

export default AboutPage;
