import React from 'react';

const Team = () => (
  <section className="container py-5">
    <h2 className="text-center mb-4">Our Team</h2>
    <p className="text-center">Duis Nisi Sapien, Elementum Finibus Fermentum Eget...</p>
    <div className="row justify-content-center">
      {[1, 2, 3].map((n) => (
        <div className="col-md-3 text-center mb-4" key={n}>
          <img src={`/team${n}.jpg`} className="img-fluid rounded-circle" alt={`Team ${n}`} />
          <div className="mt-2">
            <i className="bi bi-facebook mx-1"></i>
            <i className="bi bi-twitter mx-1"></i>
            <i className="bi bi-google mx-1"></i>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Team;