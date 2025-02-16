import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProfileForm from "../components/ProfileForm";

const MyProfile = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <div className="flex flex-1 w-full">
        <Sidebar />
        <ProfileForm />
      </div>
    </div>
  );
};

export default MyProfile;
