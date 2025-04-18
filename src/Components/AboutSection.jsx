import React from 'react';
import './Compleate.css';

const AboutSection = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">about</h1>
      <div className="about-underline"></div>
      <p className="about-description">
        We are minimalists. We believe that with simplicity comes innovation and intuitivity.
        We have nearly 10 years of experience of design and being in the industry.
        Getting straight to the point is our thing. <br /><br />
        We want to deliver your vision with our experience and advice. Want to work with us?
      </p>
      <p className="about-contact">contact us below.</p>
      <div className="about-icon">
        <div className="icon-tip"></div>
        <div className="icon-curve"></div>
      </div>
      <div className="dot-nav">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default AboutSection;
