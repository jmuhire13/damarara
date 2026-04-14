import React from 'react';
import { HiX } from 'react-icons/hi';
import './OrderSidebar.css';

const OrderSidebar = ({ isOpen, onClose, orderItems, onRemoveItem, onCheckout, currency, convertPrice }) => {
  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && <div className="order-sidebar__overlay" onClick={onClose} />}
      <div className={`order-sidebar ${isOpen ? 'order-sidebar--open' : ''}`}>
        <div className="order-sidebar__header">
          <h3>Your Order</h3>
          <button className="order-sidebar__close" onClick={onClose} aria-label="Close">
            <HiX size={24} />
          </button>
        </div>

        <div className="order-sidebar__items">
          {orderItems.length === 0 ? (
            <p className="order-sidebar__empty">Your order is empty</p>
          ) : (
            orderItems.map((item) => (
              <div className="order-sidebar__item" key={item.id}>
                <div className="order-sidebar__item-header">
                  <div>
                    <div className="order-sidebar__item-name">
                      {item.icon} {item.name}
                    </div>
                  </div>
                  <button
                    className="order-sidebar__item-remove"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    ×
                  </button>
                </div>
                <div className="order-sidebar__item-details">
                  Size: {item.size} | Qty: {item.quantity}
                </div>
                <div className="order-sidebar__item-price">
                  <span>{convertPrice(item.price)} × {item.quantity}</span>
                  <span>{convertPrice(item.price * item.quantity)}</span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="order-sidebar__footer">
          <div className="order-sidebar__total">
            <span>Total</span>
            <span className="order-sidebar__total-amount">{convertPrice(total)}</span>
          </div>
          <button
            className="order-sidebar__checkout-btn"
            disabled={orderItems.length === 0}
            onClick={onCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSidebar;
