import React from 'react';

const About = () => (
  <section className="container py-5">
    <h2 className="text-center mb-4">About Our Business</h2>
    <p className="text-center">Duis Nisi Sapien, Elementum Finibus Fermentum Eget, Aliquet A Leo.</p>
    <div className="row">
      <div className="col-md-6">
        <h5>Business, Development, Growth...</h5>
        <p>Vestibulum ullamcorper a massa eu fringilla. Integer ultricies finibus nisi aliquet leo elit.</p>
      </div>
      <div className="col-md-6">
        <img src="/about-img.jpg" alt="About" className="img-fluid" />
      </div>
    </div>
  </section>
);

export default About;