import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-700 py-4">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[#B7DF02] text-base font-medium">
          SkyMart
        </p>

        <p className="text-gray-500 text-sm text-center">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </div>
    </footer>
  );
};

export default Footer;
