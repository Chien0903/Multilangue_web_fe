import React from "react";

const UploadBox = () => {
  return (
    <div className="p-44 rounded-lg flex flex-col items-center text-center border border-gray-300 mt-10">
      <div className="text-gray-400 text-9xl">☁️</div>
      <p className="text-blue-600 font-semibold text-xl mt-2">Drag and drop</p>
      <p className="text-gray-500 text-md mb-4">Or</p>
      <button className="bg-gray-300 px-8 py-4 rounded font-bold text-xl">Browse</button>
    </div>
  );
};

export default UploadBox;
