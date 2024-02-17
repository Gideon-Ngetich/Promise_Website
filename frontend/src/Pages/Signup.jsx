import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
<div className="flex flex-col md:flex-row items-center min-h-screen lg:flex-row xl:flex-row flex-1 justify-center items-center w-full lg:bg-cover sm:h-screen"  >
      {/* Background Image */}
      
      <div className="flex h-screen w-full md:w-full bg-cover bg-center  hidden md:block" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg)" }}>
      <div className="text-center item-center flex flex-col justify-center items-center h-full">
      <span className="text-courgette text-5xl lg:text-6xl font-bold text-white">Welcome to Savor Restaurant</span><br/>
  <span className="text-courgette text-2xl lg:text-4xl italic font-medium text-black">Where serenity meets culinary artistry</span>
</div>

      </div>

      {/* Signup Form */}
      <div className="bg-white p-8 rounded shadow-md md:max-w-md w-full md:w-full mx-auto lg:h-screen lg:flex lg:items-center lg:justify-center sm:h-screen" style={{ backgroundImage: "url(your-background-image-url.jpg)" }}>
        <div className="flex justify-center items-center w-full h-full"
        >
          <div className=" md:w-full lg:w-full xl:full bg-white p-8 rounded shadow-md max-w-md w-full">
            <h1 className="text-3xl mb-6 text-center text-black font-extrabold">
              Create an account
            </h1>
            <form onSubmit={handleFormSubmit} className="w-full">
            <input
            type="text"
            placeholder="First Name"
            className="bg-white text-black p-2 rounded-md w-full border border-gray-300 mb-4"
            required
          />
          {/* Add similar input elements for Last Name, Email, and Phone Number */}
          <input
            type="text"
            placeholder="Last Name"
            className="bg-white text-black p-2 rounded-md w-full border border-gray-300 mb-4"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-white text-black p-2 rounded-md w-full border border-gray-300 mb-4"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-white text-black p-2 rounded-md w-full border border-gray-300 mb-4"
            required
          />
          <div className="border border-gray-300 text-black rounded-md w-full relative mb-4">
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

          <input
            type="checkbox"
            id="termsCheckbox"
            className="mr-2 mb-6"
            required
          />
          <label htmlFor="termsCheckbox" className="text-gray-700">
            I agree to the <a href="/terms" className="text-blue-500">Terms and Conditions</a>
          </label>
          <div className="bg-blue-500 text-white p-2 rounded-md w-full md:w-auto hover:bg-blue-600 text-center">
            <button type="submit">Sign Up</button>
          </div>
        </form>

        <div className="mt-4 text-center text-gray-600">
          <p>Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
        </div>

        <div className="mt-6 text-sm text-gray-600 text-center">
          or sign up with
        </div>

        <div className="mt-2 flex justify-center">
          <AiFillTwitterCircle className="text-blue-500 text-2xl mr-4 cursor-pointer" />
          <AiFillInstagram className="text-pink-500 text-2xl mr-4 cursor-pointer" />
          <AiFillFacebook className="text-blue-600 text-2xl cursor-pointer" />
        
            {/* Additional Content */}
          </div>
        </div>
      </div>

      {/* Background Image for small screens */}
      <div className="w-full bg-cover bg-center md:hidden" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg)" }}></div>
    </div>
    </div>

  );
};

export default Signup;