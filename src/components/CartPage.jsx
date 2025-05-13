import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../images/003.jpg'

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Autograph eau de parfum 100ml for men',
      price: 899,
      originalPrice: 2300,
      image: image
    },
    {
      id: 2,
      name: 'Autograph eau de parfum 100ml for men',
      price: 899,
      originalPrice: 2300,
      image: image
    },
    {
      id: 3,
      name: 'Royal eau de parfum 100ml for men',
      price: 899,
      originalPrice: 2300,
      image: image
    }
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const originalTotal = cartItems.reduce((acc, item) => acc + item.originalPrice, 0);
  const discount = originalTotal - totalPrice;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-2xl font-semibold">Cart</h2>
        {cartItems.map(item => (
          <div key={item.id} className="border rounded p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <div className="flex items-center mt-2">
                  <button className="border px-2 py-1"><FaMinus /></button>
                  <span className="px-4">1</span>
                  <button className="border px-2 py-1"><FaPlus /></button>
                </div>
                <div className="mt-2 text-lg font-bold">Rs {item.price} <span className="line-through text-sm text-gray-500 ml-2">Rs {item.originalPrice}</span> <span className="text-green-600 text-sm ml-2">61% off</span></div>
              </div>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <button className="px-4 py-2 border border-red-500 text-red-500 rounded">Delete</button>
              <button className="px-4 py-2 border border-gray-500 text-gray-700 rounded">Share</button>
              <button className="px-4 py-2 bg-blue-900 text-white rounded">Buy</button>
            </div>
          </div>
        ))}
      </div>

      <div className="border p-4 rounded h-fit">
        <h3 className="text-xl font-semibold mb-4">Check Out</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Price ({cartItems.length} item)</span>
            <span>Rs {originalTotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">- Rs {discount}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charge</span>
            <span className="text-green-600">Free</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span>
            <span>Rs {totalPrice}</span>
          </div>
          <button className="w-full mt-4 bg-blue-900 text-white py-2 rounded">
            <Link to="/CheckOut" className="hover:text-blue-900">Proceed To Buy</Link>
          </button>
          <p className="text-sm text-center mt-2 text-gray-500">Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
