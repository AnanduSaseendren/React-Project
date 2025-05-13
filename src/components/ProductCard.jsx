import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-4 w-full max-w-xs">
      <div className="relative">
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-cyan-900 text-white text-xs px-3 py-1 rounded-full rotate-[-15deg]">
            New
          </span>
        )}
        <img
          src={product.image}
          alt={product.title}
          className="mx-auto h-40 object-contain"
        />
      </div>
      <h4 className="mt-4 font-medium text-sm">{product.title}</h4>
      <div className="text-lg font-bold mt-2">RS {product.price}</div>
      <div className="text-sm text-gray-400 line-through">RS {product.originalPrice}</div>
      <button className="bg-cyan-900 text-white mt-4 py-2 w-full rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
