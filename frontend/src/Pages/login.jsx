import React from 'react';
import 'tailwindcss/tailwind.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const Login = () => {
  const backgroundStyle = {
    backgroundColor: 'rgba(255, 0, 0, 0.3)', // Red background with 30% opacity
    backgroundImage: 'url(https://st3.depositphotos.com/13324256/16372/i/600/depositphotos_163729748-stock-photo-vegetables-background.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  const formStyle = {
    height: '500px', // Adjust the form height as needed
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={backgroundStyle}>
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full" style={formStyle}>
        <h1 className="text-2xl font-semibold mb-6">Login</h1>

        <form>
          <div className="mb-4 flex items-center">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              <FaUser className="mr-2" />
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Type your username"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              <FaLock className="mr-2" />
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>

      <div className="mt-6 flex justify-center">
        <AiFillTwitterCircle className="text-blue-500 text-2xl mr-4 cursor-pointer" />
        <AiFillInstagram className="text-pink-500 text-2xl mr-4 cursor-pointer" />
        <AiFillFacebook className="text-blue-600 text-2xl cursor-pointer" />
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>All rights reserved @ 2024</p>
      </div>
    </div>
  );
};

export default Login;
