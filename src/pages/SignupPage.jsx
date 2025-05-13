import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import backgroundImage from '../images/ec25b4b5e08d65f5173c15e1f91cde6f71eb4f06.jpg';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.terms.checked) {
      alert('Please agree to the Terms & Conditions.');
      return;
    }
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    alert('Form submitted successfully!');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <div className="lg:w-1/2 w-full p-6 flex items-center justify-center">
        <div
          className="relative bg-cover bg-center rounded-bl-[50%] rounded-tr-[50%] h-80 lg:h-4/5 w-full lg:w-4/5 overflow-hidden"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex flex-col justify-center text-center h-full p-10 text-white bg-black/40 rounded-xl">
            <h2 className="text-3xl font-bold">Let's Get Started!</h2>
            <p className="mt-2">Create your account and unlock the full potential of Fragranzia.</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center px-6 sm:px-12 py-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex justify-between gap-4 mb-4">
            <button
              type="button"
              className="w-full border rounded px-4 py-2 flex items-center justify-center gap-2"
            >
              <FaGoogle className="text-xl text-red-500" />
              Google
            </button>
            <button
              type="button"
              className="w-full border rounded px-4 py-2 flex items-center justify-center gap-2"
            >
              <FaFacebookF className="text-xl text-blue-600" />
              Facebook
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mb-4">Or sign up with email</p>

          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="w-full mb-3 p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            className="w-full mb-3 p-3 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full mb-3 p-3 border rounded"
            minLength="6"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="w-full mb-3 p-3 border rounded"
            minLength="6"
            required
          />

          <div className="mb-3 text-sm">
            <label className="inline-flex items-center">
              <input type="checkbox" name="terms" className="mr-2" />
              Agree with{' '}
              <span className="text-blue-600 cursor-pointer">Terms & Conditions</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white p-3 rounded hover:bg-blue-800 transition"
          >
            Sign Up
          </button>

          <p className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate('/')}
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
