import { LogOut, Menu, ShoppingCart, X, Zap } from "lucide-react";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../context/AuthContext";
import useCartHook from "../hooks/useCartHook";

const Navbar = ({ onCartClick }) => {
  const { user } = useContext(MyStore);

  const { cartItems } = useCartHook();

  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);

  const { logoutUser } = useContext(MyStore);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <nav className="sticky top-0 z-50 h-[60px] relative flex items-center justify-between border-b border-gray-700 bg-black px-6 sm:px-8 lg:px-20">
      {/* logo */}

      <div className=" flex items-center gap-2">
        <div className="w-10 h-10 bg-[#B7DF02] rounded-xl flex items-center justify-center">
          <Zap size={22} className="text-black fill-black" />
        </div>
        <h1 className="text-xl font-semibold">
          <span className="text-white">Sky</span>
          <span className="text-[#B7DF02]">Mart</span>
        </h1>
      </div>
      {/* mobile responsive */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenu(!isMenu)}
          className="w-11 h-11 border border-grey-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white"
        >
          {isMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* navlink */}
      <div className="hidden md:flex text-white  items-center gap-5 text-xl">
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition ${
              isActive ? "text-[#B7DF02]" : "text-gray-500 hover:text-white"
            }`
          }
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition ${
              isActive ? "text-[#B7DF02]" : "text-gray-500 hover:text-white"
            }`
          }
          to="/products"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition ${
              isActive ? "text-[#B7DF02]" : "text-gray-500 hover:text-white"
            }`
          }
          to="/abouts"
        >
          About
        </NavLink>
      </div>

      {/* user.name / cart logout */}
      <div className="hidden md:flex items-center gap-3">
        <div className="h-12 px-4 border border-gray-800 rounded-2xl flex items-center gap-3">
          <span className="text-gray-400 font-medium">{user.name}</span>
        </div>

        {/* cart */}

        <button
          onClick={onCartClick}
          className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-800 text-gray-400 hover:text-white"
        >
          <ShoppingCart size={21} />

          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#B7DF02] px-1 text-xs font-bold text-black">
              {totalItems}
            </span>
          )}
        </button>

        {/* logout */}
        <button
          onClick={handleLogout}
          className="w-12 h-12 border border-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white"
        >
          <LogOut size={21} />
        </button>
      </div>

      {isMenu && (
        <div className="absolute top-16 left-0 w-full bg-black border-b border-gray-800 p-5 md:hidden z-50">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              end
              onClick={() => setIsMenu(false)}
              className={({ isActive }) =>
                `font-semibold ${isActive ? "text-[#B7DF02]" : "text-gray-500"}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setIsMenu(false)}
              className={({ isActive }) =>
                `font-semibold ${isActive ? "text-[#B7DF02]" : "text-gray-500"}`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/abouts"
              onClick={() => setIsMenu(false)}
              className={({ isActive }) =>
                `font-semibold ${isActive ? "text-[#B7DF02]" : "text-gray-500"}`
              }
            >
              About
            </NavLink>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-400 hover:text-red-400"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
