import React from 'react';
import './Values.css';

const valuesData = [
  {
    title: 'Authentic Origin',
    text: 'Every product is 100% Rwandan, sourced directly from our highland farms. We celebrate our roots and never compromise on authenticity.',
  },
  {
    title: 'Farmer Empowerment',
    text: 'We believe in fair partnerships. Our farmers receive fair compensation, training, and support to build sustainable livelihoods for their families.',
  },
  {
    title: 'Quality First',
    text: 'We prioritize quality over mass production. Each batch undergoes rigorous testing to ensure it meets our exacting standards.',
  },
  {
    title: 'Community Support',
    text: 'Beyond our farms, we invest in local communities through education, infrastructure, and sustainable development initiatives.',
  },
  {
    title: 'Environmental Care',
    text: 'Sustainable farming practices protect our land for future generations. We minimize our environmental impact at every stage.',
  },
  {
    title: 'Honest Storytelling',
    text: 'We communicate with transparency and confidence, sharing our journey authentically without over-commercialization.',
  },
];

const Values = () => {
  return (
    <section className="values">
      <div className="section-header">
        <div className="section-number">— 05 —</div>
        <h2 className="section-title">Our Values</h2>
        <p className="section-subtitle">Principles that guide every decision we make</p>
      </div>

      <div className="values__grid container">
        {valuesData.map((item) => (
          <div className="values__item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
