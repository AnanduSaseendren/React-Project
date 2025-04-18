import React from "react";
import "./HeroSection.css";
import headphoneImage from "./Images/001.png"; 

const HeroSection = () => {
  return (
    <div className="hero-container">
      <button className="arrow left">❮</button>

      <div className="hero-content">
        <p className="tagline">- Lorem Ipsum is simply</p>
        <h1>
          LOREM IPSUM IS SIMPLY <br />
          DUMMY TEXT OF THE
        </h1>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="shop-button">SHOP NOW</button>
      </div>

      <div className="hero-image">
        <img src={headphoneImage} alt="Headphones" />
      </div>

      <button className="arrow right">❯</button>
    </div>
  );
};

export default HeroSection;
