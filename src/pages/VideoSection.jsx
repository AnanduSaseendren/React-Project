import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">AMAZING QUALITY</h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
        </p>

        <div className="mt-8 flex justify-center">
          <button className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full hover:scale-110 transition">
            <Play className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
