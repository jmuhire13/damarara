import React from 'react';
import Story from '../components/Story/Story';
import Journey from '../components/Journey/Journey';
import './Pages.css';

const HistoryPage = () => {
  return (
    <main className="page page--with-nav-offset">
      {/* Page Hero Banner */}
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">Our Heritage</h1>
          <p className="page__hero-subtitle">
            The story of Damarara — rooted in Rwanda's misty highlands, grown with tradition, and shared with the world.
          </p>
        </div>
      </div>

      <Story />
      <Journey />
    </main>
  );
};

export default HistoryPage;
