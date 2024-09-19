import React from 'react';
import img1 from '../assets/book stacks 📚.jpeg'
import img2 from '../assets/read.jpg'
import img3 from '../assets/dev.jpg'

const AboutPage = () => {
  return (
    <div>
      {/* About Section */}
      <section className="max-w-6xl mx-auto pt-16 px-8 grid grid-cols-2 gap-10">
        <div>
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
            About the Book Review Hub
          </h1>
          <p className="text-xl text-center text-gray-600 leading-relaxed mb-1">
            The Book Review Hub is a premier platform for readers, offering a curated space for discovering insightful book reviews, exploring curated book lists, and engaging in meaningful discussions. Our mission is to empower readers to enhance their literary journeys by providing a seamless platform that connects them with like-minded enthusiasts and the perfect books.
          </p>
        </div>
        <div>
          <img
            src={img1}
            alt="About Illustration"
            className="rounded-2xl h-2/3 w-full shadow-lg"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto pb-16 px-8 grid grid-cols-2 gap-10">
        <div>
          <img
            src={img2}
            alt="Mission Illustration"
            className="rounded-2xl w-full h-2/3 mt-10 shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-center text-gray-600 leading-relaxed mb-12">
            Our goal is to create an inclusive community where literature lovers can find, share, and discuss their favorite books. We aim to:
          </p>
          <ul className="list-disc list-inside text-left mx-auto text-lg text-gray-700 space-y-4 max-w-3xl pl-20">
            <li>
              Provide readers with honest, in-depth book reviews to help guide their next read.
            </li>
            <li>
              Offer expertly curated book lists tailored to a variety of interests and genres.
            </li>
            <li>
              Create a community where members can engage, recommend, and discuss literature.
            </li>
            <li>
              Ensure a smooth and enjoyable user experience for readers of all backgrounds.
            </li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Meet the Team</h2>
          <div className="text-center">
            <div className="mb-6">
              <img
                src={img3}
                alt="Developer's Photo"
                className="w-40 h-40  mx-auto rounded-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 uppercase">
              Abdulaziz Isa
            </h3>
            <p className="text-lg text-gray-600 mb-4">Founder & Lead Developer</p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              As a passionate developer, my journey began with a curiosity for solving problems through technology. Over the years, I've honed my skills in creating web applications that not only perform well but also deliver a seamless user experience. My love for books has always been a constant source of inspiration. I believe that stories have the power to shape our perspectives, connect us to different worlds, and spark conversations that lead to growth.
              <br />
              Book Review Hub was born from a desire to merge my passion for coding with my love for literature. My vision for this platform is simple: to create a space where book enthusiasts can discover, review, and share their favorite reads with a like-minded community. By combining intuitive design and community-driven content, I hope to foster a platform that inspires both avid readers and newcomers to explore the world of books.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            We'd love to hear from you! Whether you're looking to provide feedback, ask questions, or inquire about collaborations, feel free to get in touch with us through the following channels:
          </p>
          <div className="mb-8">
            <p className="text-lg font-semibold text-gray-700">
              Email:{" "}
              <a
                href="mailto:abdulaziz@gmail.com"
                className="text-blue-600 hover:underline"
              >
                abdulaziz@gmail.com
              </a>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Phone: <span>0987654321</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Address: <span>Physical Address</span>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Connect with Us on Social Media
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com"
                className="text-blue-700 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://www.twitter.com"
                className="text-blue-400 hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com"
                className="text-pink-600 hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
