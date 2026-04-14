import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Products.css';

const productsData = [
  {
    id: 'classic',
    icon: '🍃',
    name: 'Classic Black Tea',
    image: assets.tea1,
    description:
      'Rich, full-bodied tea from Rwanda\'s finest estates. A bold cup with notes of malt and a smooth finish that speaks to generations of expertise.',
  },
  {
    id: 'herbal',
    icon: '🌿',
    name: 'Herbal Blends',
    image: assets.tea8,
    description:
      'Carefully curated herbal infusions combining traditional Rwandan botanicals with wellness-focused ingredients for a naturally soothing experience.',
  },
  {
    id: 'reserve',
    icon: '✨',
    name: 'Premium Reserve',
    image: assets.tea3,
    description:
      'Limited selection of our most exceptional harvests. Single-origin, small-batch teas representing the pinnacle of Rwandan tea craftsmanship.',
  },
  {
    id: 'coffee',
    icon: '☕',
    name: 'Coffee Collection',
    image: assets.tea4,
    description:
      'Artisan coffee sourced from Rwanda\'s volcanic highlands. Complex flavor profiles ranging from bright and citrusy to deep and chocolatey.',
  },
];

const Products = ({ showLink = false }) => {
  return (
    <section className="products">
      <div className="section-header">
        <div className="section-number">— 02 —</div>
        <h2 className="section-title">Our Collection</h2>
        <p className="section-subtitle">
          Everyday premium: accessible yet refined selections that honor our commitment to quality
        </p>
      </div>

      <div className="products__grid container">
        {productsData.map((product) => (
          <div className="products__card" key={product.id}>
            <div className="products__card-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="products__card-icon">{product.icon}</div>
            <h3 className="products__card-name">{product.name}</h3>
            <p className="products__card-desc">{product.description}</p>
          </div>
        ))}
      </div>

      {showLink && (
        <div className="products__cta">
          <Link to="/shop" className="products__cta-link">
            View Full Collection →
          </Link>
        </div>
      )}
    </section>
  );
};

export { productsData };
export default Products;
