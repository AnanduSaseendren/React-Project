import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import backgroundImage from '../images/9c74020bea95942fe85eb1d5ca6068cd932290d5.jpg';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Perform login logic here
    alert('Login successful (placeholder)');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left Visual Section */}
      <div className="lg:w-1/2 w-full p-6 flex items-center justify-center">
        <div
          className="relative bg-cover bg-center rounded-tl-[50%] rounded-br-[50%] h-80 lg:h-4/5 w-full lg:w-4/5 overflow-hidden"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex flex-col justify-center text-center h-full p-10 text-white bg-black/40 rounded-xl">
            <h2 className="text-3xl font-bold uppercase">Welcome Back</h2>
            <p className="mt-2">Glad to see you again! Access your account to explore more</p>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center px-6 sm:px-12 py-8">
        <form onSubmit={handleLogin} className="w-full max-w-md">
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

          <p className="text-center text-sm text-gray-500 mb-4">Or sign in with email</p>

          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="w-full mb-3 p-3 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full mb-3 p-3 border rounded"
            required
          />

          <div className="flex justify-end mb-3 text-sm text-blue-600 cursor-pointer">
            Forgot Password?
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white p-3 rounded hover:bg-blue-800 transition"
          >
            Log In
          </button>

          <p className="mt-4 text-center text-sm">
            Don’t have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
