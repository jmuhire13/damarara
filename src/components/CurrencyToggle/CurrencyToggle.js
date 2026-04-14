import React from 'react';
import './CurrencyToggle.css';

const CurrencyToggle = ({ currency, onToggle }) => {
  return (
    <div className="currency-toggle">
      <button
        className={`currency-toggle__btn ${currency === 'USD' ? 'currency-toggle__btn--active' : ''}`}
        onClick={() => onToggle('USD')}
      >
        USD $
      </button>
      <button
        className={`currency-toggle__btn ${currency === 'RWF' ? 'currency-toggle__btn--active' : ''}`}
        onClick={() => onToggle('RWF')}
      >
        RWF
      </button>
    </div>
  );
};

export default CurrencyToggle;
