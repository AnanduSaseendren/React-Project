import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-red-700 font-semibold py-2 px-6 rounded hover:bg-gray-200 transition"
    >
      {children}
    </button>
  );
};

export default Button;
