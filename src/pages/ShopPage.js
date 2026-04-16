import React from 'react';
import Shop from '../components/Shop/Shop';
import './Pages.css';

const ShopPage = ({ onAddToOrder }) => {
  return (
    <main className="page page--with-nav-offset">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">Shop Our Collection</h1>
          <p className="page__hero-subtitle">
            Browse our full collection. Select your size, choose your quantity, and place your order.
          </p>
          <p className="page__hero-subtitle">
            Select your favorites and place your order.
          </p>
        </div>
      </div>

      <Shop onAddToOrder={onAddToOrder} />
    </main>
  );
};

export default ShopPage;
