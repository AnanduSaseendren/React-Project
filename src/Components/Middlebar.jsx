import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <span className="e">e</span>
        <span>COMMERCE SOLUTION</span>
        <span className="cart-icon">🛒</span>
      </div>

      <div className="search-bar">
        <select>
          <option>ALL CATEGORIES</option>
        </select>
        <input type="text" placeholder="Search Your Product..." />
        <button>🔍</button>
      </div>

      <div className="account-btn">
        <div className="account-icon">👤</div>
        <span>MY ACCOUNT</span>
      </div>
    </div>
  );
};

export default Header;
