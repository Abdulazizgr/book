import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container relative mx-auto pt-2 bg-white">
      {/* Flex Container For Nav Items */}
      <div className="flex items-center justify-between space-x-20 my-4">
        {/* Logo */}
        <div className="z-30 flex items-center justify-center space-x-3">
          {/* Logo */}
          <img
            src={logo}
            className="h-10 w-10"
            alt="logo"
          />

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
                Discover & Share
              </p>
              {/* Right Line */}
              <span className="block h-px w-6 bg-gray-400 lg:w-3"></span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue lg:flex">
          <Link to="/home" className="tracking-widest hover:text-softRed">
            Home
          </Link>
          <Link to="/reviews" className="tracking-widest hover:text-softRed">
            Reviews
          </Link>
          <Link to="/about" className="tracking-widest hover:text-softRed">
            About
          </Link>
          <Link to="/contact" className="tracking-widest hover:text-softRed">
            Contact Us
          </Link>
          <Link to="/profile">
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          id="menu-btn"
          onClick={toggleMenu}
          className="z-30 block lg:hidden focus:outline-none hamburger"
        >
          <span className={`hamburger-top ${menuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-middle ${menuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-bottom ${menuOpen ? "open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`fixed inset-0 z-20 flex-col items-center self-end w-full h-full px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue lg:hidden ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <div className="w-full py-3 text-center">
          <Link to="/home" className="block hover:text-softRed">
            Home
          </Link>
        </div>
        <div className="w-full py-3 text-center">
          <Link to="/reviews" className="block hover:text-softRed">
            Reviews
          </Link>
        </div>
        <div className="w-full py-3 text-center">
          <Link to="/about" className="block hover:text-softRed">
            About Us
          </Link>
        </div>
        <div className="w-full py-3 text-center">
          <Link to="/contact" className="block hover:text-softRed">
            Contact Us
          </Link>
        </div>
        <div className="w-full py-3 text-center">
          <Link to="/profile" className="block hover:text-softRed">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
