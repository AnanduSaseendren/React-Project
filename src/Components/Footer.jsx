import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#222] text-gray-300 text-sm">
      <div className="container mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-white mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>History</li>
            <li>Methodology</li>
            <li>Business Continuity</li>
            <li>Quality Management</li>
            <li>Security and IP Protection</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">SERVICES</h3>
          <ul className="space-y-2">
            <li>Requirements Engineering</li>
            <li>Prototyping and UXD</li>
            <li>Application Development</li>
            <li>Application Integration</li>
            <li>Application Security</li>
            <li>QA and Testing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>History</li>
            <li>Methodology</li>
            <li>Business Continuity</li>
            <li>Quality Management</li>
            <li>Security and IP Protection</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Contact Us</h3>
          <p className="mb-2">Creative Nagari</p>
          <p className="mb-2">📍 14, Abc, Lorem Ipsum dolar sit<br /> Ipsum dolar - 12345</p>
          <p className="mb-2">✉️ info@creativenagari.com</p>
          <p>📞 +91-12345678</p>
        </div>
      </div>

      <div className="bg-black py-4 px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>Copyright © 2017 Creative Nagri, All rights reserved.</p>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-white"><FaGooglePlusG /></a>
        </div>
        <div className="mt-2 md:mt-0 space-x-2">
          <a href="#" className="hover:text-white">Digital Marketing</a> |
          <a href="#" className="hover:text-white">Privacy Policy</a> |
          <a href="#" className="hover:text-white">Legal Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
