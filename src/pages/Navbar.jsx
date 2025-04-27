import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-gray-800 rounded-full relative">
          <div className="absolute inset-1 border-2 border-white rounded-full" />
        </div>
        <span className="text-xl font-bold text-red-800 underline">tailor</span>
      </div>

      <div className="text-sm text-gray-700">
        Call us for free!{' '}
        <span className="text-red-800 font-semibold">0-000-000-0000</span>
      </div>
    </nav>
  );
};

export default Navbar;
