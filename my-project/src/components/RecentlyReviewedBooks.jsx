import React from 'react';

// Import images
import book1 from '../assets/book1.jpeg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import reviewerAvatar from '../assets/logo.svg';

const RecentlyReviewedBooks = () => {
  return (
    <section id="reviews" className="bg-gray-50 py-20">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Recently Reviewed Books
        </h2>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Book 1 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105">
            <img
              src={book1}
              className="w-full h-72 transition-transform transform hover:scale-110"
              alt="Recently Reviewed Book 1"
            />
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-xs font-medium text-gray-600 mb-2">
                Recently Reviewed
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                The Alchemist: A Journey of Self-Discovery
              </h3>
              <p className="text-gray-600 mb-4">
                A magical story about following your dreams and listening to
                your heart.
              </p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={reviewerAvatar}
                  alt="Reviewer Avatar"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">Jonathan Reinink</p>
                  <p className="text-gray-500">Sep 10</p>
                </div>
              </div>
            </div>
          </div>

          {/* Book 2 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105">
            <img
              src={book2}
              className="w-full h-72 transition-transform transform hover:scale-110"
              alt="Recently Reviewed Book 2"
            />
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-xs font-medium text-gray-600 mb-2">
                Recently Reviewed
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Atomic Habits: Tiny Changes, Remarkable Results
              </h3>
              <p className="text-gray-600 mb-4">
                An insightful book about building good habits and breaking bad
                ones.
              </p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={reviewerAvatar}
                  alt="Reviewer Avatar"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">Sarah Doe</p>
                  <p className="text-gray-500">Sep 12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Book 3 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105">
            <img
              src={book3}
              className="w-full h-72 transition-transform transform hover:scale-110"
              alt="Recently Reviewed Book 3"
            />
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-xs font-medium text-gray-600 mb-2">
                Recently Reviewed
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Educated: A Memoir
              </h3>
              <p className="text-gray-600 mb-4">
                A deeply moving memoir about the quest for knowledge and
                self-discovery.
              </p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={reviewerAvatar}
                  alt="Reviewer Avatar"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">James Miller</p>
                  <p className="text-gray-500">Sep 14</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyReviewedBooks;
