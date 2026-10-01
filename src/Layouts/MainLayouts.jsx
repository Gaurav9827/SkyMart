import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayouts = () => {
  return (
    <div className="min-h-screen text-white flex flex-col gap-3  bg-black">
        <Navbar/>
      <Outlet />
    </div>
  );
};

export default MainLayouts;
