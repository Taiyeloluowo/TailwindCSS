import React, { useState } from "react";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-700 font-bold">
              N
            </div>
            <span className="text-xl font-bold">Mobile Menu Navbar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-green-300 font-medium">Home</a>
            <a href="#" className="hover:text-green-300 font-medium">Products</a>
            <a href="#" className="hover:text-green-300 font-medium">About</a>
            <a href="#" className="hover:text-green-300 font-medium">Contact</a>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <button className="relative text-2xl">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            <button className="bg-white text-green-700 px-6 py-2 rounded-lg font-medium hover:bg-green-100 transition">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl font-bold"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-60 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-green-300 font-medium">Home</a>
            <a href="#" className="hover:text-green-300 font-medium">Products</a>
            <a href="#" className="hover:text-green-300 font-medium">About</a>
            <a href="#" className="hover:text-green-300 font-medium">Contact</a>
            <button className="bg-white text-green-700 px-6 py-2 rounded-lg font-medium hover:bg-green-100 text-left">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;