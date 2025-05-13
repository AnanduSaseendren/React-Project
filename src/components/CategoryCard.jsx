import React from 'react';

const CategoryCard = ({ title, image }) => {
  return (
    <div
      className="relative w-full h-64 rounded-lg overflow-hidden shadow-md"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <h3 className="absolute left-2 bottom-4 text-white text-lg font-semibold transform -rotate-90 origin-bottom-left whitespace-nowrap">
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;
