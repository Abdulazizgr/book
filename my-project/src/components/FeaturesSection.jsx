import React, { useState } from 'react';

// Importing images
import reviewImage from '../assets/panel.jpg';
import curatedListImage from '../assets/panel2.jpg';
import communityImage from '../assets/panel3.jpg';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('panel-1');

  const handleTabClick = (panel) => {
    setActiveTab(panel);
  };

  return (
    <>
      {/* Features Heading */}
      <section id="features">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-grayishBlue">
            Our platform is designed to help book lovers discover, review, and share their favorite reads. Engage with a community of readers and find your next favorite book.
          </p>
        </div>
      </section>

      {/* Features Tabs */}
      <section id="tabs">
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          {/* Tabs Flex Container */}
          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
            {/* Tab 1 */}
            <div
              className={`flex justify-center text-center cursor-pointer text-gray-600 md:border-b-0 hover:text-softRed md:w-1/3 tab ${
                activeTab === 'panel-1' ? 'border-softRed text-softRed' : ''
              }`}
              onClick={() => handleTabClick('panel-1')}
            >
              <div
                className={`py-5 ${
                  activeTab === 'panel-1' ? 'border-b-4 border-softRed' : ''
                }`}
              >
                Comprehensive Reviews
              </div>
            </div>

            {/* Tab 2 */}
            <div
              className={`flex justify-center text-center cursor-pointer text-gray-600 md:border-b-0 hover:text-softRed md:w-1/3 tab ${
                activeTab === 'panel-2' ? 'border-softRed text-softRed' : ''
              }`}
              onClick={() => handleTabClick('panel-2')}
            >
              <div
                className={`py-5 ${
                  activeTab === 'panel-2' ? 'border-b-4 border-softRed' : ''
                }`}
              >
                Curated Book Lists
              </div>
            </div>

            {/* Tab 3 */}
            <div
              className={`flex justify-center text-center cursor-pointer text-gray-600 md:border-b-0 hover:text-softRed md:w-1/3 tab ${
                activeTab === 'panel-3' ? 'border-softRed text-softRed' : ''
              }`}
              onClick={() => handleTabClick('panel-3')}
            >
              <div
                className={`py-5 ${
                  activeTab === 'panel-3' ? 'border-b-4 border-softRed' : ''
                }`}
              >
                Community Engagement
              </div>
            </div>
          </div>

          {/* Tab Panels */}
          <div id="panels" className="container mx-auto">
            {/* Panel 1 */}
            {activeTab === 'panel-1' && (
              <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
                {/* Panel Image */}
                <div className="flex justify-center md:w-1/2">
                  <img
                    src={reviewImage}
                    alt="Comprehensive Reviews"
                    className="relative z-10"
                  />
                </div>

                {/* Panel Content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                    In-depth Book Reviews
                  </h3>
                  <p className="max-w-md text-center text-grayishBlue md:text-left">
                    Explore thousands of detailed book reviews, written by a community of avid readers. Get honest opinions and insights before diving into your next read.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a
                      href="#"
                      className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Panel 2 */}
            {activeTab === 'panel-2' && (
              <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-2">
                {/* Panel Image */}
                <div className="flex justify-center md:w-1/2">
                  <img
                    src={curatedListImage}
                    alt="Curated Book Lists"
                    className="relative z-10"
                  />
                </div>

                {/* Panel Content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                    Curated Book Lists
                  </h3>
                  <p className="max-w-md text-center text-grayishBlue md:text-left">
                    Discover personalized and curated book lists for every genre. Whether you're into thrillers, romance, or sci-fi, we've got recommendations for you.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a
                      href="#"
                      className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Panel 3 */}
            {activeTab === 'panel-3' && (
              <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-3">
                {/* Panel Image */}
                <div className="flex justify-center md:w-1/2">
                  <img
                    src={communityImage}
                    alt="Community Engagement"
                    className="relative z-10"
                  />
                </div>

                {/* Panel Content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                    Engage with the Community
                  </h3>
                  <p className="max-w-md text-center text-grayishBlue md:text-left">
                    Join a vibrant community of readers. Share your thoughts, discuss your favorite books, and connect with others who share your passion for reading.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a
                      href="#"
                      className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
