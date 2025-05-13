import React, { useState } from 'react';
import image from '../images/0003.png'

const products = new Array(12).fill({
  title: 'Kyros Eau De Parfum 100ml For Men',
  price: 899,
  originalPrice: 2000,
  image: image,
});

const AllProducts = () => {
  const [visible, setVisible] = useState(6);

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl font-bold">All Products</h2>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-sm">Sort by:</span>
          <button className="text-blue-900 font-semibold">Relevance</button>
          <button className="text-gray-700">Newest First</button>
          <button className="text-gray-700">Popularity</button>
          <button className="text-gray-700">Price – Low to High</button>
          <button className="text-gray-700">Price – High to Low</button>
          <button className="border px-3 py-1 rounded text-sm">Filter</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, visible).map((product, index) => (
          <div key={index} className="border rounded-xl p-4 text-center">
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto h-40 object-contain mb-4"
            />
            <h3 className="text-sm font-medium mb-1">{product.title}</h3>
            <p className="text-lg font-bold">RS {product.price}</p>
            <p className="line-through text-sm text-gray-400 mb-3">RS {product.originalPrice}</p>
            <button className="bg-[#003344] text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        ))}
      </div>

      {visible < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisible((prev) => prev + 3)}
            className="border px-4 py-2 rounded hover:bg-gray-100"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default AllProducts;
