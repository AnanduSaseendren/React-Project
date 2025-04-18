import React from 'react';

const Header = () => (
  <header className="text-white text-center py-5" style={{ backgroundImage: 'url(/header-bg.jpg)', backgroundSize: 'cover' }}>
    <h1>Business Development Growth,<br /><span className="text-primary">Professionals Team!</span></h1>
    <p>Leadership Management.</p>
    <button className="btn btn-outline-light mt-3">Read More</button>
  </header>
);

export default Header;