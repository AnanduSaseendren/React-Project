import React from 'react';
import { FaPinterest,FaInstagram,FaTwitter,FaFacebook,FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 px-6 text-center text-white">
      <div className="flex justify-center gap-4 mb-4">
        <div className="border-2 border-white rounded-full p-2 hover:bg-white hover:text-gray-800 transition">
          <FaFacebook size={20} />
        </div>
        <div className="border-2 border-white rounded-full p-2 hover:bg-white hover:text-gray-800 transition">
          <FaTwitter size={20} />
        </div>
        <div className="border-2 border-white rounded-full p-2 hover:bg-white hover:text-gray-800 transition">
          <FaPinterest size={20} />
        </div>
        <div className="border-2 border-white rounded-full p-2 hover:bg-white hover:text-gray-800 transition">
          <FaYoutube size={20} />
        </div>
        <div className="border-2 border-white rounded-full p-2 hover:bg-white hover:text-gray-800 transition">
          <FaInstagram size={20} />
        </div>
      </div>

      <p className="text-xs">&copy; Copyright Lorem 2020. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
