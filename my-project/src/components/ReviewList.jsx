import React from 'react';
import book from '../assets/book1.jpeg'

// Define a sample data structure for the book cards
const books = [
  {
    id: 1,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    pages: '342 pages',
    rating: 4.5,
    image: '../assets/book1.jpeg',
    tags: ['CLASSICS', 'FICTION', 'ROMANCE'],
    review: 'A Regency-era novel of manners in which five women try to adjust to their new neighbor, an eligible...'
  },
  {
    id: 1,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    pages: '342 pages',
    rating: 4.5,
    image: '../assets/book1.jpeg',
    tags: ['CLASSICS', 'FICTION', 'ROMANCE'],
    review: 'A Regency-era novel of manners in which five women try to adjust to their new neighbor, an eligible...'
  },
  {
    id: 1,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    pages: '342 pages',
    rating: 4.5,
    image: '../assets/book1.jpeg',
    tags: ['CLASSICS', 'FICTION', 'ROMANCE'],
    review: 'A Regency-era novel of manners in which five women try to adjust to their new neighbor, an eligible...'
  },
  {
    id: 1,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    pages: '342 pages',
    rating: 4.5,
    image: '../assets/book1.jpeg',
    tags: ['CLASSICS', 'FICTION', 'ROMANCE'],
    review: 'A Regency-era novel of manners in which five women try to adjust to their new neighbor, an eligible...'
  },
  // Add more books as needed
];

const ReviewList = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div key={book.id} className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-row">
              {/* Book Cover Image (Left Side) */}
              <div className="w-2/3 pt-10 pl-6">
                <a
                  className="book-container"
                  href=""
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="book">
                    <img
                      alt={book.title}
                      src={book.image}
                    />
                  </div>
                </a>
              </div>

              {/* Book Details (Right Side) */}
              <div className="w-2/3 px-10 py-10">
                {/* Page Count and Rating */}
                <div className="flex justify-between items-start mb-2">
                  {/* Page Count */}
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      FREE
                    </span>
                    <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                      {book.pages}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927a.75.75 0 011.902 0l1.136 3.636h3.826a.75.75 0 01.432 1.36l-3.09 2.25 1.136 3.637a.75.75 0 01-1.153.834l-3.09-2.25-3.09 2.25a.75.75 0 01-1.153-.834l1.136-3.637-3.09-2.25a.75.75 0 01.432-1.36h3.826l1.136-3.636z"
                      />
                    </svg>
                    <span className="ml-2 text-gray-600">({book.rating})</span>
                  </div>
                </div>

                {/* Book Title and Author */}
                <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
                <p className="text-gray-500 mb-4">
                  by <span className="text-softRed hover:underline">{book.author}</span>
                </p>

                {/* Review Snippet */}
                <p className="text-gray-700 text-sm mb-4">
                  {book.review}
                </p>

                {/* Tags */}
                <div className="flex space-x-2 mb-4">
                  {book.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <a href="#" className="text-softRed font-semibold hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
