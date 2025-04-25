import React from 'react';

const PortfolioSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 text-white"
      style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/023/309/702/small/ai-generative-e-commerce-concept-shopping-cart-with-boxes-on-a-wooden-table-photo.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">Our Portfolio</h2>
        <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <button className="border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition duration-300">
          VIEW OUR PORTFOLIO
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
