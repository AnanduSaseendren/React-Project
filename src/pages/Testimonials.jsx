import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="py-16 px-6 md:px-20 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">OUR TESTIMONIALS</h2>

      <div className="relative bg-gray-200 rounded-md p-8 md:p-12 max-w-3xl mx-auto">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-700 p-3 rounded-full">
          <Quote className="text-white w-6 h-6" />
        </div>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum 
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
          been the industry's standard dummy text ever since.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <img 
          src="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png" 
          alt="User" 
          className="w-16 h-16 rounded-full object-cover mb-2"
        />
        <h4 className="font-semibold text-gray-800">Jiya Johnson</h4>
      </div>
    </div>
  );
};

export default Testimonials;
