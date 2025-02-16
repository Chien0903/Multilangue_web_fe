import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#C4D3E7] flex items-center justify-between p-4 shadow-md w-full relative">
      <img
        src="https://www.toray.com/global/shared/images/toray_logo.svg"
        alt="Toray Logo"
        className="h-10"
      />
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
              <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/myprofile')}>
                Setting
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/login')}>
                Log out
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
