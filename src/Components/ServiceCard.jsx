import React from 'react';

const ServiceCard = ({ title, icon, description, color, active, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 cursor-pointer transition-all duration-300 ${color} ${
        active ? 'row-span-2' : 'h-48'
      }`}
      onClick={onClick}
    >
      {!active ? (
        <>
          <img src={icon} alt={title} className="w-12 h-12 mb-4 mix-blend-multiply" />
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </>
      ) : (
        <>
          <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
          <p className="text-white text-sm mb-4 text-center px-2">{description}</p>
          <button className="px-4 py-2 bg-white text-black font-semibold text-sm rounded hover:bg-gray-200">
            Read More
          </button>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
