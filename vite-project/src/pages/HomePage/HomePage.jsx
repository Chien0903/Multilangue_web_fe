import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TranslationPanel from "../components/TranslationPanel";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <Header />
      <div className="flex flex-1 w-full overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center bg-white p-6 overflow-auto">
          <TranslationPanel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
