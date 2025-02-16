import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import icon mắt

const images = [
  "https://www.toray.com/global/images/index_kv_06.webp",
  "https://www.toray.com/global/images/index_kv_08.webp",
  "https://www.toray.com/global/images/index_kv_04.webp",
  "https://www.toray.com/global/images/index_kv_01.webp",
  "https://www.toray.com/global/images/index_kv_05.webp",
  "https://www.toray.com/global/images/index_kv_02.webp",
];

const SignupPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 relative">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Header Section */}
      <div className="w-full flex items-center justify-between bg-white py-4 px-8 shadow-md mb-6 absolute top-0 left-0 right-0">
        <div className="flex items-center">
          <img
            src="https://www.toray.com/global/shared/images/toray_logo.svg"
            alt="Toray Logo"
            className="h-10"
          />
        </div>
      </div>

      {/* Signup Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-96 text-center mt-20 relative z-10">
        <h1 className="text-2xl font-semibold mb-4">Sign up</h1>
        <form>
          <div className="mb-4 text-left">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Username or email address</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username or email"
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter full name"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 text-left relative">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                placeholder="Enter password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.
            </p>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4 text-left relative">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                placeholder="Confirm password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign up
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-sm">
          Already have an account? 
          <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
