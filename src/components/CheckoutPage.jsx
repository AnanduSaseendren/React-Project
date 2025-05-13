import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("Google Pay");

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-sans space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-4 rounded-lg shadow">
          <div className="flex gap-4">
            <img src="/images/autograph-perfume.png" alt="Perfume" className="w-24 h-24 object-contain" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">Autograph eau de parfum 100ml for men</h2>
              <p className="text-sm text-gray-600 mb-1">Auograph</p>
              <div className="flex items-center text-sm text-green-600 mb-2">
                4.5 <FaStar className="ml-1 text-green-600" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <button className="px-2 py-1 border rounded">-</button>
                <span>1</span>
                <button className="px-2 py-1 border rounded">+</button>
              </div>
              <div className="text-lg font-semibold text-gray-900">
                Rs 899 <span className="line-through text-sm text-gray-400 ml-2">Rs 2300</span>
              </div>
              <p className="text-sm text-green-600">61% off</p>
              <p className="text-sm mt-1 text-gray-600">Delivered by August 29, Free delivery 🚚</p>
              <p className="text-sm text-blue-600">7 day return policy</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-4">Price Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Price (1 item)</span>
              <span>Rs 899</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount (61%)</span>
              <span>- Rs 1401</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span className="text-green-600">Free Delivery</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-base">
            <span>Total Amount</span>
            <span>Rs 899</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-4">Personal Details</h3>
          <div className="flex gap-2 mb-4">
            <button className="px-3 py-1 border rounded bg-gray-100">Add address +</button>
            <button className="px-4 py-1 rounded bg-blue-900 text-white">Home</button>
            <button className="px-4 py-1 border rounded">Office</button>
          </div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Address</h4>
            <button className="text-sm text-blue-600">Edit</button>
          </div>
          <div className="border rounded p-3 text-sm text-gray-700 space-y-1">
            <p className="font-semibold">Rohan Jaison</p>
            <p>
              Apartment No.104, Emerald Heights Opposite Lulu Mall Edappally,
              Kochi Kerala 682024
            </p>
            <p>+91 9876543210</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-4">Payment Methods</h3>
          <form className="space-y-3">
            {[
              "Google Pay",
              "Cash on delivery (cash/UPI)",
              "Paytm/Phone Pay/Amazon Pay etc",
              "Credit/Debit card",
              "Net Banking",
            ].map((method) => (
              <label key={method} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                  className="accent-blue-900"
                />
                <span>{method}</span>
              </label>
            ))}
            <button
              type="submit"
              className="w-full mt-4 bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
