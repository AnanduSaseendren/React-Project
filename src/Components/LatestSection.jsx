import React from 'react';
import './Compleate.css';

const LatestSection = () => {
  return (
    <div className="latest-container">
      <h1 className="latest-heading">latest</h1>
      <div className="latest-underline"></div>

      <div className="latest-grid">
        <div className="grid-item red">
          <span className="magnifier">🔍</span>
        </div>
        <div className="grid-item blue">
          <img src="https://via.placeholder.com/150x100?text=App+UI" alt="App UI" />
        </div>
        <div className="grid-item cyan">
          <img src="https://via.placeholder.com/150x100?text=Website" alt="Website" />
        </div>
        <div className="grid-item light-blue">
          <img src="https://via.placeholder.com/150x100?text=Icons+1" alt="Icons 1" />
        </div>
        <div className="grid-item yellow">
          <span className="icon-label">100 Icons</span>
        </div>
        <div className="grid-item light">
          <img src="https://via.placeholder.com/150x100?text=Icons+2" alt="Icons 2" />
        </div>
      </div>

      <p className="latest-more">see more</p>

      <div className="dot-nav">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default LatestSection;
