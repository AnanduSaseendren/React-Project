import React from 'react';
import './Compleate.css';

const WorkSection = () => {
  return (
    <div className="work-container">
      <h1 className="work-heading">work</h1>
      <div className="work-underline"></div>

      <div className="work-icons">
        <span className="icon bulb">💡</span>
        <span className="icon dots">⭘</span>
        <span className="icon square">▢</span>
      </div>

      <p className="work-description">
        We create clean, minimal & intuitive products. We believe in simplicity and producing transparent work
        for our clients and their users. Click below to see our awesomeness in action.
      </p>

      <p className="work-cta">see our work</p>

      <div className="dot-nav">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default WorkSection;
