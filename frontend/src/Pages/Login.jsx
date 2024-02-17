<<<<<<< HEAD
import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login
=======
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const formStyle = {
    height: "auto", // Adjust the form height as needed
    width: "100%", // Make the form full width
    maxWidth: "340px", // Set max width for the form
  };

  const backgroundStyle = {
    backgroundColor: "rgba(255, 0, 0, 0.3)", // Red background with 30% opacity
    backgroundImage:
      "url(https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center", // Center the image
    height: "100vh",
    backgroundSize: "cover",
  };

  return (
    <div className="flex flex-col lg:flex-row xl:flex-row flex-1 justify-center items-center w-full">
<div className="w-full lg:w-3/4 xl:w-3/4 flex text-4xl h-screen lg:h-full w-full font-bold text-white justify-center items-center bg-cover bg-center" style={backgroundStyle}>
      <div className="text-center">
  <span className="text-courgette text-5xl lg:text-6xl">Welcome to Savor Restaurant</span><br/>
  <span className="text-courgette text-2xl lg:text-4xl italic font-medium text-black">Where serenity meets culinary artistry</span>
</div>


      </div>

      <div className="flex justify-center items-center w-full lg:w-1/2 xl:w-1/2 bg-white h-screen">
        <div className="flex flex-col justify-center items-center w-3/4 md:w-1/2 lg:w-2/3 xl:w-1/2 bg-white p-8 rounded shadow-md max-w-md w-full" style={formStyle}>
          <h1 className="text-3xl mb-6 text-center text-black font-extrabold">
            Hi there!
            <br />
            <p>Let's Get Started</p>
          </h1>

          <form>
            <div className="mb-4 flex items-start flex-col ">
              <label htmlFor="username" className="block text-sm font-medium">
                Username
              </label>
              <span className="flex justify-center items-center w-full border border-b-2 border-t-0 border-r-0 border-l-0 outline-none bg-grey-300">
                <FaUser className="m-2 text-black text-2xl" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Type your username"
                  className="mt-1 p-2 w-full rounded-md bg-white border-none text-black"
                />
              </span>
            </div>

            <div className="mb-4 flex items-start flex-col ">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <span className="flex justify-center items-center w-full border border-b-2 border-t-0 border-r-0 border-l-0 outline-none">
                <FaLock className="m-2 text-black text-2xl" />

                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your Password"
                    className="mt-1 p-2 w-full border rounded-md bg-white border-none"
                  />
                  <div
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
              </span>
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

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-600 text-center">
            or login with
          </div>

          <div className="mt-2 flex justify-center">
            <AiFillTwitterCircle className="text-blue-500 text-2xl mr-4 cursor-pointer" />
            <AiFillInstagram className="text-pink-500 text-2xl mr-4 cursor-pointer" />
            <AiFillFacebook className="text-blue-600 text-2xl cursor-pointer" />
          </div>
          <div className="mt-4 text-center text-gray-600">
            <p>Don't have an account? <a href="/Signup" className="text-blue-500">Signup</a></p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
>>>>>>> f8250c9 (Login, signup and about page commit)
