import React from 'react';
import Button from '../components/Button';

const TailorShopHero = () => {
  return (
    <div className="bg-red-700 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center text-white px-6 md:px-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            TAILOR SHOP MADE <br /> FOR GENTLEMAN
          </h1>
          <p className="text-sm md:text-base mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <Button>START DESIGNING</Button>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://toppng.com/uploads/preview/man-in-suit-png-download-image-men-in-suits-11562930811asge7knhrp.png"
            alt="Gentleman in suit"
            className="max-w-full h-auto mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};

export default TailorShopHero;
