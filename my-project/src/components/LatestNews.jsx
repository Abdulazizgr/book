// src/components/LatestNews.js
import React from 'react';
import img1 from '../assets/Community-News.png'
import img2 from '../assets/PlatformUpdates.webp'
import img3 from '../assets/new-arrival.jpg'

const newsItems = [
  {
    id: 1,
    imageSrc: img3,
    altText: 'New Arrival',
    title: 'New Arrivals: September',
    description: 'Discover the latest books added this month, including new releases from your favorite authors and must-read books from trending genres.',
    link: '#',
  },
  {
    id: 2,
    imageSrc:img2,
    altText: 'Platform Update',
    title: 'New Feature: Personalized Book Recommendations',
    description: 'We’ve introduced a new AI-driven recommendation engine to help you find books you’ll love based on your reading history and preferences.',
    link: '#',
  },
  {
    id: 3,
    imageSrc: img1,
    altText: 'Community News',
    title: 'Reading Challenge: Fall 2024',
    description: 'Join our fall reading challenge and compete with other book lovers! Finish the most books by the end of the season and stand a chance to win exclusive rewards.',
    link: '#',
  },
];

const LatestNews = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        Latest News/Updates
      </h2>

      {/* News Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={item.imageSrc}
              alt={item.altText}
              className="rounded mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {item.description}
            </p>
            <a href={item.link} className="text-softRed font-semibold hover:underline">
              {item.title.includes('Challenge') ? 'Learn More' : 'Read More'}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LatestNews;
