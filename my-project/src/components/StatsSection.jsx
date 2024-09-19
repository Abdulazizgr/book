import React from 'react';

const StatsSection = () => {
  return (
    <section className="mt-10">
      <div className="hidden flex-col items-center justify-between max-w-6xl px-10 mx-auto mt-10 space-y-16 my-48 lg:my-20 lg:flex-row md:space-y-0 lg:flex">
        {/* Total Users */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-softBlue">1,200+</h2>
          <p className="text-lg text-gray-400">Total Users</p>
        </div>

        {/* Active Users */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-softBlue">850+</h2>
          <p className="text-lg text-gray-400">Active Users</p>
        </div>

        {/* Reviews */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-softBlue">5,000+</h2>
          <p className="text-lg text-gray-400">Book Reviews</p>
        </div>

        {/* Genres Covered */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-softBlue">30+</h2>
          <p className="text-lg text-gray-400">Genres Covered</p>
        </div>

        {/* Community Contributions */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-softBlue">2,500+</h2>
          <p className="text-lg text-gray-400">Community Contributions</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
