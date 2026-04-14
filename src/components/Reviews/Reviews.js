import React, { useState } from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi';
import './Reviews.css';

// Sample reviews — in production these come from MongoDB
const initialReviews = [
  {
    id: 1,
    name: 'Amahoro Jean',
    rating: 5,
    text: 'The Classic Black Tea is unlike anything I have tried before. You can truly taste the quality and care that goes into every cup. Proudly Rwandan!',
    date: '2026-03-15',
    product: 'Classic Black Tea',
  },
  {
    id: 2,
    name: 'Grace Uwimana',
    rating: 4,
    text: 'I love the Herbal Wellness Blend — it is so refreshing after a long day. The lemongrass and mint combination is perfect. Will definitely reorder.',
    date: '2026-03-22',
    product: 'Herbal Wellness Blend',
  },
  {
    id: 3,
    name: 'Patrick Habimana',
    rating: 5,
    text: 'Bourbon Coffee from Damarara is incredible. The volcanic highlands really do produce something special. Best coffee I have had in Kigali.',
    date: '2026-04-01',
    product: 'Bourbon Coffee',
  },
];

const StarRating = ({ rating, onRate, interactive = false, size = 20 }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="reviews__stars">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = interactive ? star <= (hover || rating) : star <= rating;
        return interactive ? (
          <button
            key={star}
            type="button"
            className="reviews__star-btn"
            onClick={() => onRate(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            {filled ? <HiStar size={size} /> : <HiOutlineStar size={size} />}
          </button>
        ) : (
          <span key={star} className="reviews__star-display">
            {filled ? <HiStar size={size} /> : <HiOutlineStar size={size} />}
          </span>
        );
      })}
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    rating: 0,
    text: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text || formData.rating === 0) {
      alert('Please fill in your name, review, and star rating.');
      return;
    }

    const newReview = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0],
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: '', product: '', rating: 0, text: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="reviews">
      <div className="section-header">
        <div className="section-number">— Customer Reviews —</div>
        <h2 className="section-title">What People Say</h2>
        <p className="section-subtitle">
          Hear from our community of tea and coffee lovers
        </p>
      </div>

      <div className="reviews__wrapper container">
        {/* Review Form */}
        <div className="reviews__form-section">
          <h3 className="reviews__form-title">Share Your Experience</h3>

          {submitted && (
            <div className="reviews__success">
              ✓ Thank you! Your review has been submitted.
            </div>
          )}

          <div className="reviews__form">
            <div className="reviews__form-group">
              <label htmlFor="review-name">Your Name *</label>
              <input
                id="review-name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="reviews__form-group">
              <label htmlFor="review-product">Product (optional)</label>
              <select
                id="review-product"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              >
                <option value="">Select a product</option>
                <option value="Classic Black Tea">Classic Black Tea</option>
                <option value="Herbal Wellness Blend">Herbal Wellness Blend</option>
                <option value="Premium Reserve Golden Tips">Premium Reserve Golden Tips</option>
                <option value="Bourbon Coffee">Bourbon Coffee</option>
              </select>
            </div>

            <div className="reviews__form-group">
              <label>Your Rating *</label>
              <StarRating
                rating={formData.rating}
                onRate={(r) => setFormData({ ...formData, rating: r })}
                interactive
                size={28}
              />
            </div>

            <div className="reviews__form-group">
              <label htmlFor="review-text">Your Review *</label>
              <textarea
                id="review-text"
                rows="4"
                placeholder="Tell us about your experience..."
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              />
            </div>

            <button className="reviews__submit-btn" onClick={handleSubmit}>
              Submit Review
            </button>
          </div>
        </div>

        {/* Reviews Display */}
        <div className="reviews__list">
          {reviews.map((review) => (
            <div className="reviews__card" key={review.id}>
              <div className="reviews__card-header">
                <div className="reviews__card-avatar">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="reviews__card-name">{review.name}</div>
                  {review.product && (
                    <div className="reviews__card-product">{review.product}</div>
                  )}
                </div>
                <div className="reviews__card-date">{review.date}</div>
              </div>
              <StarRating rating={review.rating} size={16} />
              <p className="reviews__card-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
