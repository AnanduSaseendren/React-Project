import React from 'react';

const WorkCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-20 h-20 border-2 border-blue-400 rounded-full flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="w-10 h-10 mix-blend-multiply" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default WorkCard;
