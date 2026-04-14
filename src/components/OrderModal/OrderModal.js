import React, { useState } from 'react';
import { HiX } from 'react-icons/hi';
import './OrderModal.css';

const OrderModal = ({ isOpen, onClose, orderItems, onOrderComplete, convertPrice }) => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [orderSuccess, setOrderSuccess] = useState(null);

  if (!isOpen) return null;

  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = () => {
    const { name, email, phone, address } = customer;

    if (!name || !email || !phone || !address) {
      alert('Please fill in all required fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    const orderSummary = {
      customer,
      items: orderItems,
      total,
      orderDate: new Date().toISOString(),
      orderRef: `DAM-${Date.now().toString().slice(-8)}`,
    };

    // TODO: Send to backend API (Express → MongoDB + email notification)
    console.log('✅ Order submitted:', orderSummary);

    setOrderSuccess(orderSummary);
  };

  const handleClose = () => {
    if (orderSuccess) {
      onOrderComplete();
    }
    setOrderSuccess(null);
    setCustomer({ name: '', email: '', phone: '', address: '', notes: '' });
    onClose();
  };

  return (
    <div className="order-modal__overlay">
      <div className="order-modal">
        <button className="order-modal__close" onClick={handleClose} aria-label="Close">
          <HiX size={28} />
        </button>

        <h2 className="order-modal__title">Complete Your Order</h2>

        <div className="order-modal__body">
          {orderSuccess ? (
            /* Success State */
            <div className="order-modal__success">
              <div className="order-modal__success-icon">✓</div>
              <h3>Order Submitted Successfully!</h3>
              <p>
                Thank you, <strong>{orderSuccess.customer.name}</strong>! We'll contact you at{' '}
                <strong>{orderSuccess.customer.email}</strong> to confirm your order.
              </p>
              <p className="order-modal__ref">
                Order Reference: <strong>{orderSuccess.orderRef}</strong>
              </p>
              <p className="order-modal__success-total">
                Total: <strong>{convertPrice(orderSuccess.total)}</strong>
              </p>
              <button className="order-modal__done-btn" onClick={handleClose}>
                Done
              </button>
            </div>
          ) : (
            /* Checkout Form */
            <>
              {/* Order Review */}
              <div className="order-modal__review">
                <h3>Order Summary</h3>
                {orderItems.map((item) => (
                  <div className="order-modal__review-item" key={item.id}>
                    <span>
                      {item.name} ({item.size}) × {item.quantity}
                    </span>
                    <span>{convertPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              {/* Customer Form */}
              <div className="order-modal__form">
                <h3>Your Details</h3>

                <div className="order-modal__form-group">
                  <label htmlFor="cust-name">Full Name *</label>
                  <input
                    id="cust-name"
                    type="text"
                    placeholder="Your full name"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  />
                </div>

                <div className="order-modal__form-group">
                  <label htmlFor="cust-email">Email *</label>
                  <input
                    id="cust-email"
                    type="email"
                    placeholder="your@email.com"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  />
                </div>

                <div className="order-modal__form-group">
                  <label htmlFor="cust-phone">Phone *</label>
                  <input
                    id="cust-phone"
                    type="tel"
                    placeholder="+250 7XX XXX XXX"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  />
                </div>

                <div className="order-modal__form-group">
                  <label htmlFor="cust-address">Delivery Address *</label>
                  <input
                    id="cust-address"
                    type="text"
                    placeholder="Your delivery address in Kigali"
                    value={customer.address}
                    onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  />
                </div>

                <div className="order-modal__form-group">
                  <label htmlFor="cust-notes">Notes (optional)</label>
                  <textarea
                    id="cust-notes"
                    rows="3"
                    placeholder="Any special instructions..."
                    value={customer.notes}
                    onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                  />
                </div>
              </div>

              {/* Total & Submit */}
              <div className="order-modal__total">
                <span>Total</span>
                <span className="order-modal__total-amount">{convertPrice(total)}</span>
              </div>

              <button className="order-modal__submit-btn" onClick={handleSubmit}>
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
