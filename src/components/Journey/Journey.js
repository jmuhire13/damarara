import React from 'react';
import './Journey.css';

const journeySteps = [
  {
    number: '01',
    title: 'Highland Harvest',
    text: 'In the cool, misty mornings of Rwanda\'s highlands, our skilled farmers hand-select only the finest tea leaves and coffee cherries. Each picking is timed to perfection, ensuring optimal flavor development at elevations above 1,800 meters.',
  },
  {
    number: '02',
    title: 'Careful Collection',
    text: 'Freshly harvested leaves and cherries are carefully gathered and transported from our network of highland farms. Every step is handled with care to preserve the natural oils and aromatics that define our signature taste.',
  },
  {
    number: '03',
    title: 'Artisan Processing',
    text: 'At our modern facility in Kigali, traditional techniques meet contemporary precision. Our master processors oversee every stage—from withering and rolling to fermentation and drying—ensuring consistent quality in every batch.',
  },
  {
    number: '04',
    title: 'Refined Packaging',
    text: 'Each product is thoughtfully packaged to preserve freshness and purity. Our packaging reflects the journey—from the highland farms to your table—with elegant simplicity and sustainable materials.',
  },
];

const Journey = () => {
  return (
    <section className="journey">
      <div className="section-header">
        <div className="section-number">— 04 —</div>
        <h2 className="section-title">The Journey</h2>
        <p className="section-subtitle">
          From highland harvest to your cup — every step handled with care
        </p>
      </div>

      <div className="journey__timeline container">
        {journeySteps.map((step, index) => (
          <div className={`journey__item ${index % 2 !== 0 ? 'journey__item--reverse' : ''}`} key={step.number}>
            <div className="journey__number">{step.number}</div>
            <div className="journey__content">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
            <div className="journey__dot" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
