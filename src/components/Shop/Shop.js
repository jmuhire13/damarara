import React from 'react';
import { assets } from '../../assets/assets';
import './Shop.css';

const shopProducts = [
  {
    id: 'classic',
    name: 'Classic Black Tea',
    origin: 'Rwanda Highland Estate',
    icon: '🍃',
    badge: 'Best Seller',
    badgeType: 'default',
    image: assets.tea5,
    description:
      'Our signature black tea, harvested from Rwanda\'s premier highland estates at elevations above 1,800 meters. This full-bodied tea offers a rich, malty flavor with subtle notes of chocolate and a smooth, clean finish. Perfect for morning rituals or afternoon contemplation.',
    details: [
      { label: 'Tasting Notes', value: 'Malt, Chocolate, Smooth' },
      { label: 'Caffeine Level', value: 'Medium-High' },
      { label: 'Brewing Temp', value: '95°C / 203°F' },
      { label: 'Steep Time', value: '3-5 minutes' },
    ],
    sizes: [
      { amount: '100g', price: 12.0 },
      { amount: '250g', price: 28.0 },
      { amount: '500g', price: 52.0 },
    ],
  },
  {
    id: 'herbal',
    name: 'Herbal Wellness Blend',
    origin: 'Organic Rwandan Botanicals',
    icon: '🌿',
    badge: null,
    image: assets.tea6,
    description:
      'A carefully curated blend of indigenous Rwandan herbs combined with traditional wellness botanicals. Featuring lemongrass, ginger, hibiscus, and mint, this caffeine-free infusion promotes relaxation and digestive wellness. Naturally sweet with vibrant, refreshing notes.',
    details: [
      { label: 'Tasting Notes', value: 'Citrus, Floral, Mint' },
      { label: 'Caffeine Level', value: 'None' },
      { label: 'Brewing Temp', value: '100°C / 212°F' },
      { label: 'Steep Time', value: '5-7 minutes' },
    ],
    sizes: [
      { amount: '100g', price: 14.0 },
      { amount: '250g', price: 32.0 },
      { amount: '500g', price: 60.0 },
    ],
  },
  {
    id: 'reserve',
    name: 'Premium Reserve Golden Tips',
    origin: 'Single Estate, Limited Release',
    icon: '✨',
    badge: 'Premium',
    badgeType: 'premium',
    image: assets.tea7,
    description:
      'Our most exclusive offering. Hand-selected golden tips from a single estate, harvested only during peak season. This rare tea delivers an exceptionally delicate, floral cup with notes of honey and muscatel. Each batch is numbered and limited.',
    details: [
      { label: 'Tasting Notes', value: 'Honey, Muscatel, Floral' },
      { label: 'Caffeine Level', value: 'Medium' },
      { label: 'Brewing Temp', value: '85°C / 185°F' },
      { label: 'Steep Time', value: '2-3 minutes' },
    ],
    sizes: [
      { amount: '50g', price: 24.0 },
      { amount: '100g', price: 45.0 },
      { amount: '250g', price: 105.0 },
    ],
  },
  {
    id: 'coffee',
    name: 'Bourbon Coffee — Volcanic Highlands',
    origin: 'Volcanic Soil, 2,000m Elevation',
    icon: '☕',
    badge: 'New',
    badgeType: 'default',
    image: assets.tea8,
    description:
      'Premium bourbon coffee grown in Rwanda\'s volcanic highlands at elevations exceeding 2,000 meters. The rich volcanic soil produces beans with exceptional complexity—bright acidity balanced with deep chocolate and berry notes. Medium roasted to preserve origin character.',
    details: [
      { label: 'Tasting Notes', value: 'Berry, Chocolate, Bright' },
      { label: 'Roast Level', value: 'Medium' },
      { label: 'Process', value: 'Fully Washed' },
      { label: 'Grind Options', value: 'Whole Bean / Ground' },
    ],
    sizes: [
      { amount: '250g', price: 18.0 },
      { amount: '500g', price: 34.0 },
      { amount: '1kg', price: 62.0 },
    ],
  },
];

const ShopItem = ({ product, onAddToOrder }) => {
  const [selectedSize, setSelectedSize] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

  const handleAdd = () => {
    if (quantity === 0) {
      alert('Please select a quantity');
      return;
    }
    onAddToOrder({
      productId: product.id,
      name: product.name,
      icon: product.icon,
      size: product.sizes[selectedSize].amount,
      price: product.sizes[selectedSize].price,
      quantity,
    });
    setQuantity(0);
  };

  return (
    <div className="shop__item">
      <div className="shop__item-visual">
        <img src={product.image} alt={product.name} className="shop__image" />
        {product.badge && (
          <div className={`shop__badge ${product.badgeType === 'premium' ? 'shop__badge--premium' : ''}`}>
            {product.badge}
          </div>
        )}
      </div>

      <div className="shop__item-details">
        <h3 className="shop__item-name">{product.name}</h3>
        <div className="shop__item-origin">{product.origin}</div>
        <p className="shop__item-desc">{product.description}</p>

        <div className="shop__details-grid">
          {product.details.map((detail) => (
            <div className="shop__detail" key={detail.label}>
              <span className="shop__detail-label">{detail.label}</span>
              <span className="shop__detail-value">{detail.value}</span>
            </div>
          ))}
        </div>

        <div className="shop__sizes">
          {product.sizes.map((size, idx) => (
            <div className="shop__size-option" key={size.amount}>
              <input
                type="radio"
                name={`${product.id}-size`}
                id={`${product.id}-${size.amount}`}
                checked={selectedSize === idx}
                onChange={() => setSelectedSize(idx)}
              />
              <label htmlFor={`${product.id}-${size.amount}`}>
                <span className="shop__size-amount">{size.amount}</span>
                <span className="shop__size-price">${size.price.toFixed(2)}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="shop__quantity">
          <label>Quantity:</label>
          <div className="shop__qty-controls">
            <button
              className="shop__qty-btn"
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
            >
              −
            </button>
            <input
              type="number"
              className="shop__qty-input"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(0, Math.min(99, parseInt(e.target.value) || 0)))}
              min="0"
              max="99"
            />
            <button
              className="shop__qty-btn"
              onClick={() => setQuantity(Math.min(99, quantity + 1))}
            >
              +
            </button>
          </div>
        </div>

        <button className="shop__add-btn" onClick={handleAdd}>
          Add to Order
        </button>
      </div>
    </div>
  );
};

const Shop = ({ onAddToOrder }) => {
  return (
    <section className="shop">
      <div className="shop__container container">
        {shopProducts.map((product) => (
          <ShopItem key={product.id} product={product} onAddToOrder={onAddToOrder} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
