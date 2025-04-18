import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <a href="#">HOME</a>
        <span>|</span>
        <a href="#">ABOUT</a>
        <span>|</span>
        <a href="#">MOBILE</a>
        <span>|</span>
        <a href="#">HEADPHONE</a>
        <span>|</span>
        <a href="#">CLOTHES</a>
        <span>|</span>
        <a href="#">SHOES</a>
        <span>|</span>
        <a href="#">WATCHES</a>
        <span>|</span>
        <a href="#">BLOG</a>
        <span>|</span>
        <a href="#">CONTACT US</a>
      </div>

      <div className="cart-section">
        <span>Cart Item</span>
        <span className="cart-icon">🛒</span>
        <span className="cart-count">0</span>
      </div>
    </div>
  );
};

export default Navbar;
