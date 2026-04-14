import React from 'react';
import Contact from '../components/Contact/Contact';
import './Pages.css';

const ContactPage = () => {
  return (
    <main className="page page--with-nav-offset">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">Get in Touch</h1>
          <p className="page__hero-subtitle">
            Have a question, want to place a bulk order, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </div>

      <Contact />
    </main>
  );
};

export default ContactPage;
