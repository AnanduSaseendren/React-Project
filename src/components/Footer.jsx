import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Contact Info</h5>
          <p>info@example.com<br />+123456789<br />Everyday 9:00 - 18:00</p>
        </div>
        <div className="col-md-4">
          <h5>Twitter Feed</h5>
          <p>@username: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="col-md-4">
          <h5>Useful Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Link 1</a></li>
            <li><a href="#" className="text-white">Link 2</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <small>&copy; 2025 Leadership. All Rights Reserved | Design by W3Layouts</small>
      </div>
    </div>
  </footer>
);

export default Footer;