import React from 'react';
import Products from '../components/Products/Products';
import Reviews from '../components/Reviews/Reviews';
import './Pages.css';

const ProductsPage = () => {
  return (
    <main className="page page--with-nav-offset">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">Our Collection</h1>
          <p className="page__hero-subtitle">
            From classic black teas to premium reserve blends and artisan coffee — discover the finest flavors Rwanda has to offer.
          </p>
        </div>
      </div>

      <Products />
      <Reviews />
    </main>
  );
};

export default ProductsPage;
