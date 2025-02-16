import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdTranslate, MdHistory, MdSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col">
      {/* Header */}
      <div className="bg-[#C4D3E7] flex items-center justify-between p-4 shadow-md w-full relative">
        <div className="flex items-center space-x-2">
          <img
            src="https://www.toray.com/global/shared/images/toray_logo.svg"
            alt="Toray Logo"
            className="h-10"
          />
        </div>
        <div className="relative flex items-center space-x-2">
          <div className="flex flex-col text-right">
            <span className="text-sm font-semibold">Nguyen Van A</span>
            <span className="text-xs text-gray-500">Designer 1</span>
          </div>
          <button className="flex items-center" onClick={() => setShowUserMenu(!showUserMenu)}>
            <IoPersonCircleOutline size={40} />
          </button>
          {showUserMenu && (
            <div className="absolute right-0 top-full mt-1 bg-white border rounded shadow-md w-40 z-10">
              <ul>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/myprofile')}>Setting</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/login')}>Log out</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        <div className="w-20 bg-[#004098CC] text-white flex flex-col items-center py-6 space-y-6 relative">
          <div className="flex flex-col items-center space-y-4 mt-6">
            <MdTranslate size={32} className="cursor-pointer" onClick={() => navigate('/home')} />
            <span className="text-xs">Translate</span>
            <hr className="w-10 border-white" />
            <MdHistory size={32} />
            <span className="text-xs">File history</span>
          </div>
          <div className="absolute bottom-10 flex flex-col items-center text-center">
            <MdSettings size={32} className="cursor-pointer" onClick={() => navigate('/myprofile')} />
            <span className="text-xs leading-tight">Update Vocabulary</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white p-6">
          <h2 className="text-2xl font-semibold">Welcome to HomePage</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
