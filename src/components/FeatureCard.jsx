import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="border p-6 rounded-md text-center shadow-sm hover:shadow-md transition">
      <div className="flex justify-center mb-4">
        <div className="bg-red-700 rounded-full p-4">
          <img src={icon} alt="icon" className="w-8 h-8 mix-blend-multiply" />
        </div>
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
