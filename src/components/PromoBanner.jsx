import React from 'react';

const PromoBanner = () => {
  return (
    <div className='p-20'>
        <div className="bg-gradient-to-r from-[#d6f0fd] to-[#e0f5fc] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      <div className="mb-4 md:mb-0 md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Elegance in Every Bottle</h2>
        <p className="text-gray-700 mb-4">
          Discover timeless fragrances crafted for every moment
        </p>
        <button className="bg-blue-900 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition">
          Shop Now
        </button>
      </div>

      <div className="md:w-1/2">
        <img
          src="/images/promo-banner-bottle.png"
          alt="Perfume Bottle in Box"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
    </div>
  );
};

export default PromoBanner;
