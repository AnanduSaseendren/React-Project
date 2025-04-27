import React from 'react';
import Button from '../components/Button';

const VisitCenter = () => {
  return (
    <div className="bg-red-700 text-white py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">VISIT US OUR CENTER</h2>

      <div className="text-sm md:text-base leading-relaxed mb-6">
        <p>MON to SAT 9:30 AM - 9:00 PM</p>
        <p>SUN 11:00 AM - 7:00 PM</p>
      </div>

      <h3 className="text-lg font-semibold mb-6">
        GRAND OPENING ON APRIL 6
      </h3>

      <Button>BOOK AN APPOINTMENT</Button>
    </div>
  );
};

export default VisitCenter;
