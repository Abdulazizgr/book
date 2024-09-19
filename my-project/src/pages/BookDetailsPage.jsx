import React, { useState } from 'react';
import img1 from '../assets/book1.jpeg'
import { useNavigate } from 'react-router-dom';
import Navbar1 from '../components/Navbar1';

const BookDetailPage = () => {

  const navigate = useNavigate();
  // State for reviews

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Jane Doe',
      date: 'September 18, 2024',
      rating: 4,
      comment: 'Loved this book! The character development was fantastic.',
    },
    {
      id: 2,
      name: 'John Smith',
      date: 'September 15, 2024',
      rating: 5,
      comment: 'An absolute masterpiece! A must-read for literature lovers.',
    },
  ]);

  const [visibleReviews, setVisibleReviews] = useState(2); // Number of visible reviews
  const totalReviews = 5; // Set this to total available reviews

  // State to toggle the visibility of the "Add Review" form
  const [showAddReview, setShowAddReview] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Handle review form submission (e.g., sending data to an API)
    alert('Review submitted!');
  };

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => Math.min(prev + 2, totalReviews));
  };

  return (
    <>
    <Navbar1/>
    <section className="bg-gray-100 py-20 px-6">
      
       {/* Back Button */}
       <button
        onClick={() => navigate("/")} // Navigate back to the landing page
        className="absolute top-24 left-4 text-blue-500 hover:text-blue-700 focus:outline-none"
      >
        ← Back
      </button>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Book Cover */}
        <div className="flex justify-center mb-10">
          
             <a
             class="book1-container"
             href=""
             target="_blank"
             rel="noreferrer noopener"
           >
             <div class="book1">
               <img
                 alt=""
                 src={img1}
               />
             </div>
           </a>
          
          
        </div>

        {/* Book Details */}
        <div className="flex flex-col ">
          <h2 className="text-3xl font-bold text-gray-900">Book Title</h2>
          <p className="text-lg text-gray-700">
            Author: <span className="text-blue-600">Author Name</span>
          </p>
          <p className="text-md text-gray-600">
            Genre: <span className="text-blue-600">Genre Name</span>
          </p>

          <div className="mt-4 flex items-center space-x-4">
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded">FREE</span>
            <span className="text-gray-500 text-sm">Page Count: 300</span>
            <span className="text-gray-500 text-sm">Year: 2023</span>
            <div className="flex items-center space-x-1 text-yellow-500">
              {/* Star Rating */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="text-gray-500">(4.2)</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600">
              A brief synopsis of the book goes here. It should give an engaging overview to entice readers to explore more.
            </p>
          </div>
        </div>
      </div>

      {/* Add Review Button */}
      {!showAddReview && (
        <div className="mt-12 max-w-7xl mx-auto text-center">
          <button
            onClick={() => setShowAddReview(true)}
            className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Review
          </button>
        </div>
      )}

      {/* Add a Review Form (Hidden until 'Add Review' is clicked) */}
      {showAddReview && (
        <div className="mt-12 max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900">Add Your Review</h3>
          <form onSubmit={handleSubmitReview} className="mt-6">
            {/* Rating */}
            <label className="block text-sm font-medium text-gray-700">Your Rating</label>
            <div className="flex space-x-1 mt-2">
              {[...Array(5)].map((_, index) => (
                <button key={index} type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Comment */}
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mt-6">
              Your Comment
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 mt-2"
              placeholder="Write your review..."
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Review
            </button>
          </form>
        </div>
      )}

      {/* Reviews Section */}
      <div className="mt-12 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900">User Reviews</h3>
        {reviews.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-500">Reviewed on {review.date}</p>
              </div>
              <div className="flex items-center space-x-1 text-yellow-500">
                {[...Array(review.rating)].map((_, index) => (
                  <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <span className="text-gray-500">({review.rating}.0)</span>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{review.comment}</p>
          </div>
        ))}

        {/* Load More Button */}
        {visibleReviews < totalReviews && (
          <button
            onClick={loadMoreReviews}
            className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Load More Reviews
          </button>
        )}
      </div>
    </section>

    </>
  );
};

export default BookDetailPage;
