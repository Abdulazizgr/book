import React from 'react';
import heroImage from '../assets/hero.jpg'; // Adjust path as needed

const HeroSection1 = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${heroImage})`, // Use the imported image here
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'linear-gradient(to right, rgba(45, 55, 72, 0.95) 10%, rgba(45, 55, 72, 0.25) 100%)',
        }}
      ></div>

      {/* Container for Content and Search */}
      <div className="container mx-auto h-full flex flex-col justify-center items-start text-left text-white relative z-10 px-6">
        <h1 className="text-4xl lg:text-6xl font-semibold mb-4">
          Find Your Next <br />
          Great Read
        </h1>
        <p className="text-lg lg:text-2xl mb-8">
          Discover thousands of book reviews and recommendations
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-lg bg-white rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search for books, authors, or genres..."
            className="flex-grow px-4 py-2 text-black outline-none"
          />
          <button className="px-6 py-2 bg-softRed text-white font-semibold hover:bg-red-500">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
