import React, { useState } from 'react';

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="container mx-auto p-6">
      <div className="pagination mt-8">
        <nav className="flex justify-center space-x-2">
          {/* Previous button */}
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 text-gray-700 ${
              currentPage === 1 ? 'bg-gray-300' : 'bg-gray-200'
            } rounded`}
          >
            Prev
          </button>

          {/* Display page numbers */}
          {[...Array(totalPages).keys()].map((page) => (
            <a
              key={page}
              href="#"
              onClick={() => setCurrentPage(page + 1)}
              className={`px-3 py-1 text-gray-700 ${
                currentPage === page + 1 ? 'bg-gray-200' : 'bg-gray-100'
              } rounded`}
            >
              {page + 1}
            </a>
          ))}

          {/* Next button */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 text-gray-700 ${
              currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-200'
            } rounded`}
          >
            Next
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Pagination;
