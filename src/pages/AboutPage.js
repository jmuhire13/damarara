import React from 'react';
import Values from '../components/Values/Values';
import './Pages.css';

const teamMembers = [
  {
    name: 'Founder & CEO',
    role: 'Brand Visionary',
    bio: 'Leading Damarara\'s mission to bring Rwanda\'s finest tea and coffee to the world while empowering local farming communities.',
  },
  {
    name: 'Head of Production',
    role: 'Quality & Processing',
    bio: 'Overseeing every step from harvest to packaging, ensuring each batch meets Damarara\'s exacting quality standards.',
  },
  {
    name: 'Community Manager',
    role: 'Farmer Relations',
    bio: 'Building lasting partnerships with highland farmers, facilitating training programs and fair trade practices.',
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
          <div className="about-grid">
            <div className="about-text">
              <h2 className="about-heading">Our Mission</h2>
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
            <div className="about-visual">
              {/* IMAGE PLACEHOLDER — Replace with team/farm photo */}
              <div className="image-placeholder about-image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span>Team / Farm Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section about-section--dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">The people behind every cup</p>
          </div>
          <div className="about-team-grid">
            {teamMembers.map((member) => (
              <div className="about-team-card" key={member.name}>
                {/* IMAGE PLACEHOLDER — Replace with team member photo */}
                <div className="about-team-avatar">
                  <div className="image-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M20 21a8 8 0 00-16 0" />
                    </svg>
                    <span>Photo</span>
                  </div>
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
