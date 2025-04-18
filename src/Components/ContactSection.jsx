import React from 'react';
import './Compleate.css';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">contact</h1>
      <div className="contact-underline"></div>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="name" className="form-input" />
          <input type="email" placeholder="email" className="form-input" />
        </div>
        <textarea placeholder="how can we help you with your project?" className="form-textarea"></textarea>

        <button type="submit" className="form-button">submit!</button>
      </form>

      <div className="contact-footer">
        <span className="footer-left">sabe crispe © 2014</span>
        <span className="footer-icons">⚫ 🐦</span>
      </div>
    </div>
  );
};

export default ContactSection;
