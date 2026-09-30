import React from "react";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <div className=" h-screen bg-red-300">
        <h1>Navbar</h1>
      <Outlet />
    </div>
  );
};

export default MainLayouts;
