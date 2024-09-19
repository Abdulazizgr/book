import React from 'react';

// Import images
import quotesImage from '../assets/bg-quotes.png';
import profile1 from '../assets/logo.svg';
import profile2 from '../assets/logo.svg';
import profile3 from '../assets/logo.svg';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue py-20">
      {/* Testimonials Container */}
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 text-veryDarkBlue dark:text-veryDarkBlue">
          What Our Users Are Saying
        </h2>

        {/* Boxes Container */}
        <div className="relative flex flex-col w-full space-y-8 md:flex-row md:space-y-0 md:space-x-12">
          {/* Quotes Image */}
          <img
            src={quotesImage}
            alt="quotes"
            className="absolute -left-5 -top-6 w-12 md:-top-12 md:w-16 opacity-20"
          />

          {/* Testimonial 1 */}
          <div className="flex flex-col p-8 space-y-6 rounded-lg bg-veryDarkBlue dark:bg-darkBlue3 md:w-1/3 shadow-lg transition-transform transform hover:scale-105">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              "This platform has completely transformed my reading habits. The
              reviews are detailed and insightful, helping me discover new books
              I wouldn't have found otherwise."
            </p>
            {/* Customer Info */}
            <div className="flex space-x-4">
              <img
                src={profile1}
                alt="Profile 1"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h5 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Alex Johnson
                </h5>
                <p className="text-xs font-light text-gray-500 dark:text-gray-400">
                  Avid Reader
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col p-8 space-y-6 rounded-lg bg-veryDarkBlue text-white dark:bg-darkBlue3 md:w-1/3 shadow-lg transition-transform transform hover:scale-105">
            <p className="text-lg leading-relaxed">
              "The curated book lists have introduced me to genres I never
              thought I’d enjoy. Now, I can’t stop exploring new reads!"
            </p>
            {/* Customer Info */}
            <div className="flex space-x-4">
              <img
                src={profile2}
                alt="Profile 2"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h5 className="text-sm font-semibold">Samantha Lee</h5>
                <p className="text-xs font-light">Book Enthusiast</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col p-8 space-y-6 rounded-lg bg-veryDarkBlue dark:bg-darkBlue3 md:w-1/3 shadow-lg transition-transform transform hover:scale-105">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              "Becoming part of this community has been an invaluable
              experience. The discussions are thought-provoking, and I've met
              like-minded readers who share my passion."
            </p>
            {/* Customer Info */}
            <div className="flex space-x-4">
              <img
                src={profile3}
                alt="Profile 3"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h5 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Michael Brown
                </h5>
                <p className="text-xs font-light text-gray-500 dark:text-gray-400">
                  Book Club Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
