import React from 'react';
import { assets } from '../../assets/assets';
import './Story.css';

const Story = ({ compact = false }) => {
  return (
    <section className={`story ${compact ? 'story--compact' : ''}`}>
      <div className="section-header">
        <div className="section-number">— 01 —</div>
        <h2 className="section-title">Our Heritage</h2>
        <p className="section-subtitle">
          A story rooted in Rwanda's highland farms, nurtured by tradition, and refined through craftsmanship
        </p>
      </div>

      <div className="story__content container">
        <div className="story__text">
          <p>
            In the misty highlands of Rwanda, where the morning light touches the land with golden fingers, our story begins. Generations of farmers have tended these fertile hills, cultivating tea and coffee with knowledge passed down through time.
          </p>
          <p>
            Damarara represents more than a beverage. It embodies the spirit of Rwandan soil, the dedication of our farmers, and the heritage of a nation. Each leaf is handpicked at the peak of perfection, carrying with it the essence of our homeland.
          </p>
          <p>
            We honor tradition while embracing modern quality standards, ensuring that every cup delivers the authentic taste of Rwanda. Our commitment extends beyond the product—we empower farmers, support communities, and preserve the craft that defines our identity.
          </p>
        </div>

        <div className="story__visual">
          <img src={assets.tea} alt="Rwanda Highlands" className="story__image" />
          <div className="story__visual-overlay">Rwanda</div>
        </div>
      </div>
    </section>
  );
};

export default Story;
