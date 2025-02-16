import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const images = [
  "https://www.toray.com/global/images/index_kv_06.webp",
  "https://www.toray.com/global/images/index_kv_08.webp",
  "https://www.toray.com/global/images/index_kv_04.webp",
  "https://www.toray.com/global/images/index_kv_01.webp",
  "https://www.toray.com/global/images/index_kv_05.webp",
  "https://www.toray.com/global/images/index_kv_02.webp",
];

const LoginPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // ✅ Sử dụng useNavigate để điều hướng

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Hàm xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault(); // Ngăn chặn reload trang
    // Giả lập đăng nhập thành công, sau này có thể thêm API call tại đây
    navigate("/home"); // ✅ Chuyển hướng đến trang HomePage
  };

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

      {/* Login Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-96 text-center mt-20 relative z-10">
        <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4 text-left">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Username or email address
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username or email"
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="text-right mb-4">
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign in
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-sm">
          New to <strong>'TORAY'</strong> Multi-Language Translator? <br />
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
