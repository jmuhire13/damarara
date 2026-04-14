import React, { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all required fields.');
      return;
    }
    // TODO: Connect to backend API (Express + MongoDB)
    console.log('Contact form submitted:', form);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="contact">
      <div className="section-header">
        <div className="section-number">— 06 —</div>
        <h2 className="section-title">Connect With Us</h2>
        <p className="section-subtitle">We'd love to hear from you</p>
      </div>

      <div className="contact__wrapper container">
        {/* Contact Info */}
        <div className="contact__info">
          <div className="contact__info-item">
            <HiMail className="contact__info-icon" />
            <div>
              <span className="contact__info-label">Email</span>
              <a href="mailto:hello@damarara.rw" className="contact__info-value">
                hello@damarara.rw
              </a>
            </div>
          </div>

          <div className="contact__info-item">
            <HiPhone className="contact__info-icon" />
            <div>
              <span className="contact__info-label">Phone</span>
              <a href="tel:+250123456789" className="contact__info-value">
                +250 123 456 789
              </a>
            </div>
          </div>

          <div className="contact__info-item">
            <HiLocationMarker className="contact__info-icon" />
            <div>
              <span className="contact__info-label">Location</span>
              <span className="contact__info-value">Kigali, Rwanda</span>
            </div>
          </div>

          <div className="contact__social">
            <span className="contact__info-label">Follow Us</span>
            <div className="contact__social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact__form-section">
          {sent && (
            <div className="contact__success">
              ✓ Message sent! We'll get back to you soon.
            </div>
          )}

          <div className="contact__form">
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="contact-name">Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-email">Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                rows="5"
                placeholder="Tell us what's on your mind..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button className="contact__submit-btn" onClick={handleSubmit}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
