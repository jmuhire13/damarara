import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Global Styles
import './styles/variables.css';
import './styles/responsive.css';

// Layout Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CurrencyToggle from './components/CurrencyToggle/CurrencyToggle';
import OrderSidebar from './components/OrderSidebar/OrderSidebar';
import OrderModal from './components/OrderModal/OrderModal';

// Pages
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import ProductsPage from './pages/ProductsPage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Exchange rate: 1 USD ≈ 1,300 RWF (approximate)
const USD_TO_RWF = 1300;

function App() {
  // ─── Currency State ───
  const [currency, setCurrency] = useState('USD');

  const convertPrice = (usdPrice) => {
    if (currency === 'RWF') {
      const rwf = Math.round(usdPrice * USD_TO_RWF);
      return `RWF ${rwf.toLocaleString()}`;
    }
    return `$${usdPrice.toFixed(2)}`;
  };

  // ─── Order State ───
  const [orderItems, setOrderItems] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddToOrder = (item) => {
    const newItem = {
      ...item,
      id: Date.now(),
      total: item.price * item.quantity,
    };
    setOrderItems((prev) => [...prev, newItem]);
    setSidebarOpen(true);
  };

  const handleRemoveItem = (id) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (orderItems.length === 0) return;
    setModalOpen(true);
    setSidebarOpen(false);
  };

  const handleOrderComplete = () => {
    setOrderItems([]);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <CurrencyToggle currency={currency} onToggle={setCurrency} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="/shop"
            element={<ShopPage onAddToOrder={handleAddToOrder} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />

        {/* Floating Order Button */}
        <button
          className="view-order-btn"
          onClick={() => setSidebarOpen(true)}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            padding: '1rem 2rem',
            background: '#d4af37',
            color: '#0a0a0a',
            border: 'none',
            borderRadius: '50px',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600,
            cursor: 'pointer',
            zIndex: 1500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 5px 25px rgba(212, 175, 55, 0.4)',
            fontFamily: "'Montserrat', sans-serif",
            transition: 'all 0.3s ease',
          }}
        >
          Order
          <span
            style={{
              background: '#0a0a0a',
              color: '#d4af37',
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              fontWeight: 700,
            }}
          >
            {orderItems.length}
          </span>
        </button>

        {/* Order Sidebar */}
        <OrderSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          orderItems={orderItems}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
          currency={currency}
          convertPrice={convertPrice}
        />

        {/* Checkout Modal */}
        <OrderModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          orderItems={orderItems}
          onOrderComplete={handleOrderComplete}
          convertPrice={convertPrice}
        />
      </div>
    </Router>
  );
}

export default App;
