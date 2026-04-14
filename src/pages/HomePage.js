import React from 'react';
import Hero from '../components/Hero/Hero';
import Story from '../components/Story/Story';
import Products from '../components/Products/Products';
import Journey from '../components/Journey/Journey';
import Reviews from '../components/Reviews/Reviews';
import './Pages.css';

const HomePage = () => {
  return (
    <main className="page">
      <Hero />
      <Story compact />
      <Products showLink />
      <Journey />
      <Reviews />
    </main>
  );
};

export default HomePage;
