import React, { useState } from "react";
import logo from "../assets/logo.svg"; // Adjust this path as needed
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container relative mx-auto p-6">
      {/* Flex Container For Nav Items */}
      <div className="flex items-center justify-between space-x-20 my-4">
        {/* Logo */}
        <div className="z-30 flex items-center justify-center space-x-3">
          {/* Logo */}
          <img src={logo} className="h-10 w-10" alt="logo" />

          {/* Text with lines */}
          <div className="flex flex-col items-center">
            <p className="font-semibold text-veryDarkBlue tracking-wide">
              Book Review Hub
            </p>
            <div className="flex items-center space-x-4 mt-1">
              {/* Left Line */}
              <span className="block h-px w-6 bg-gray-400 lg:w-3"></span>
              {/* Tagline */}
              <p className="font-light text-gray-500 tracking-wide lg:text-sm">
                BOOK HUB
              </p>
              {/* Right Line */}
              <span className="block h-px w-6 bg-gray-400 lg:w-3"></span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue lg:flex">
          <a href="#features" className="tracking-widest hover:text-softRed">
            Features
          </a>
          <a href="#reviews" className="tracking-widest hover:text-softRed">
            Reviews
          </a>
          <a
            href="#testimonials"
            className="tracking-widest hover:text-softRed"
          >
            Testimonials
          </a>
          <a href="#cta" className="tracking-widest hover:text-softRed">
            Contact Us
          </a>

          <Link
            to="/login"
            className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          id="menu-btn"
          className="z-30 block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="hamburger">
            <span className="block h-1 w-6 bg-black mb-1"></span>
            <span className="block h-1 w-6 bg-black mb-1"></span>
            <span className="block h-1 w-6 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`fixed inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <div className="w-full py-3 text-center">
          <a href="#features" className="block hover:text-softRed">
            Features
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#reviews" className="block hover:text-softRed">
            Reviews
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#testimonials" className="block hover:text-softRed">
            Testimonials
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#cta" className="block hover:text-softRed">
            Contact Us
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#" className="block hover:text-softRed">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
