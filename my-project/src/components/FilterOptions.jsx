// src/components/FilterOptions.js
import React, { useState } from 'react';

const FilterOptions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [sort, setSort] = useState('relevance');

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleGenreChange = (e) => setGenre(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);

  return (
    <section className=" mx-auto p-6 bg-gray-100">
      <div className="filter-options py-4 ">
        <div className="flex space-x-4 pl-32">
          {/* Search Bar */}
          <div className=" flex w-full max-w-lg bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search for books, authors, or genres..."
              className="flex-grow px-4 py-2 text-black outline-none"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="px-6 py-2 bg-softRed text-white font-semibold hover:bg-red-500">
              Search
            </button>
          </div>

          {/* Genre Filter */}
          <select
            className="bg-white text-black rounded-lg p-2"
            value={genre}
            onChange={handleGenreChange}
          >
            <option value="">All Genres</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
          </select>

          {/* Rating Filter */}
          <select
            className="bg-white text-black rounded-lg p-2"
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
          </select>

          {/* Sort Filter */}
          <select
            className="bg-white text-black rounded-lg p-2"
            value={sort}
            onChange={handleSortChange}
          >
            <option value="relevance">Sort by: Relevance</option>
            <option value="rating">Sort by: Rating</option>
            <option value="newest">Sort by: Newest</option>
            <option value="alphabetical">Sort by: Alphabetical</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterOptions;
