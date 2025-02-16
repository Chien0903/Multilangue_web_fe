import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdTranslate, MdHistory, MdSettings, MdSwapHoriz } from "react-icons/md";

const HomePage = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedOriginLanguage, setSelectedOriginLanguage] = useState("Origin Language");
  const [availableTargetLanguages, setAvailableTargetLanguages] = useState(["English", "Japanese", "Chinese", "Vietnamese"]);
  const [selectedTargetLanguages, setSelectedTargetLanguages] = useState([]);
  const [showTargetDropdown, setShowTargetDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleOriginLanguageSelect = (language) => {
    setSelectedOriginLanguage(language);
    setShowLanguages(false);
    setAvailableTargetLanguages(["English", "Japanese", "Chinese", "Vietnamese"].filter(lang => lang !== language));
    setSelectedTargetLanguages([]);
  };

  const handleTargetLanguageSelect = (language) => {
    setSelectedTargetLanguages(prev =>
      prev.includes(language) ? prev.filter(lang => lang !== language) : [...prev, language]
    );
  };

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
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Setting</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Log out</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        <div className="w-20 bg-[#004098CC] text-white flex flex-col items-center py-6 space-y-6 relative">
          <div className="flex flex-col items-center space-y-4 mt-6">
            <MdTranslate size={32} />
            <span className="text-xs">Translate</span>
            <hr className="w-10 border-white" />
            <MdHistory size={32} />
            <span className="text-xs">File history</span>
          </div>
          <div className="absolute bottom-10 flex flex-col items-center text-center">
            <MdSettings size={32} />
            <span className="text-xs leading-tight">Update Vocabulary</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white p-6">
          {/* Language Select */}
          <div className="border-b-2 border-blue-700 flex items-center justify-between p-2 w-full bg-gray-100 relative mt-14">
            <button className="bg-gray-300 px-3 py-2 rounded flex items-center text-sm" onClick={() => setShowLanguages(!showLanguages)}>
              {selectedOriginLanguage} <span className="ml-1">▼</span>
            </button>
            {showLanguages && (
              <div className="absolute left-0 top-full mt-1 bg-white border rounded shadow-md w-28 z-10">
                <ul>
                  {"English Japanese Chinese Vietnamese".split(" ").map((lang) => (
                    <li key={lang} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleOriginLanguageSelect(lang)}>
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button className="bg-gray-300 px-3 py-2 rounded flex items-center text-sm" onClick={() => setShowTargetDropdown(!showTargetDropdown)}>
              Target Language <span className="ml-2">▼</span>
            </button>
            {showTargetDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-white border rounded shadow-md w-40 max-h-40 overflow-auto z-10">
                <ul>
                  {availableTargetLanguages.map((lang) => (
                    <li key={lang} className="p-2 hover:bg-gray-200 cursor-pointer flex items-center">
                      <input type="checkbox" checked={selectedTargetLanguages.includes(lang)} onChange={() => handleTargetLanguageSelect(lang)} className="mr-2" />
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Upload Box */}
          <div className="p-44 rounded-lg flex flex-col items-center text-center">
            <div className="text-gray-400 text-9xl">☁️</div>
            <p className="text-blue-600 font-semibold text-xl mt-2">Drag and drop</p>
            <p className="text-gray-500 text-md mb-4">Or</p>
            <button className="bg-gray-300 px-8 py-4 rounded font-bold text-xl">Browse</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
