import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CartCard from "../Components/CartCard";

const MainLayouts = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        <Outlet />
      </main>

      <Footer />

      <CartCard
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

    </div>
  );
};

export default MainLayouts;