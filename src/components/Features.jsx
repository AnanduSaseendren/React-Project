import React from 'react';

const Features = () => (
  <section className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-5">Our Key Features</h2>
      <div className="row">
        {['Creative Designs', 'Easy to Customize', 'Responsive Layouts', 'Documentation'].map((feature, i) => (
          <div className="col-md-3 text-center mb-4" key={i}>
            <i className="bi bi-star-fill display-4 text-primary"></i>
            <h5 className="mt-3">{feature}</h5>
            <p>Set od perspiciatis unde omnis natus error sit voluptatem.</p>
          </div>
        ))}
        <div className="col-md-3 text-center">
          <img src="/help.png" alt="Help" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
);

export default Features;
