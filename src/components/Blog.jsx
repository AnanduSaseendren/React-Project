import React from 'react';

const Blog = () => (
  <section className="container py-5">
    <h2 className="text-center mb-4">Our Blog</h2>
    <p className="text-center">Duis Nisi Sapien, Elementum Finibus Fermentum Eget...</p>
    <div className="row">
      {[1, 2, 3].map((n) => (
        <div className="col-md-4 mb-4" key={n}>
          <div className="card">
            <img src={`/blog${n}.jpg`} className="card-img-top" alt={`Blog ${n}`} />
            <div className="card-body">
              <h5 className="card-title">Volup tatem sed accusan dolor</h5>
              <p className="card-text">Sed ut perspiciatis unde omnis natus error dolor hendrerit.</p>
              <p className="text-muted">Blog / Admin / 13 comments</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Blog;
