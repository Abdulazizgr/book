import React from 'react';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/* Logo */}
        <div className="z-30 flex items-center justify-center space-x-3">
          {/* Logo */}
          <img src={logo} className="h-10 w-10" alt="logo" />

          {/* Text with lines */}
          <div className="flex flex-col items-center">
            <p className="font-semibold text-white tracking-wide">
              Book Review Hub
            </p>
            <div className="flex items-center space-x-4 mt-1">
              {/* Left Line */}
              <span className="block h-px w-6 bg-gray-400 lg:w-3"></span>
              {/* Tagline */}
              <p className="font-light text-gray-400 tracking-wide lg:text-sm">
                BOOK HUB
              </p>
              {/* Right Line */}
              <span className="block h-px w-6 bg-gray-400 lg:w-3"></span>
            </div>
          </div>
        </div>

        {/* Menus Container */}
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* Menu 1 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Link shortening</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Branded links</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Analytics</a>
            </div>
          </div>

          {/* Menu 2 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Resources</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Blog</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Developers</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Support</a>
            </div>
          </div>

          {/* Menu 3 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">About</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Our Team</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Careers</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Contact</a>
            </div>
          </div>
        </div>

        {/* Social Container */}
        <div className="flex space-x-6">
          <a href="#">
            <img src="images/icon-facebook.svg" alt="Facebook" className="ficon" />
          </a>
          <a href="#">
            <img src="images/icon-twitter.svg" alt="Twitter" className="ficon" />
          </a>
          <a href="#">
            <img src="images/icon-pinterest.svg" alt="Pinterest" className="ficon" />
          </a>
          <a href="#">
            <img src="images/icon-instagram.svg" alt="Instagram" className="ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
