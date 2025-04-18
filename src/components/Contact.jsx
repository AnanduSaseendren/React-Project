import React from 'react';

const Contact = () => (
  <section className="bg-danger text-white py-5">
    <div className="container text-center">
      <h2 className="mb-4">Contact</h2>
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="col-md-6 mb-2">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
      </div>
      <textarea className="form-control mb-3" placeholder="How can we help you with your project?" rows="5"></textarea>
      <button className="btn btn-light">Submit</button>
    </div>
  </section>
);

export default Contact;