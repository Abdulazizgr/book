import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-gray-100" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-black">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-0">
              Feel free to reach out to us with any questions or inquiries!
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-0">
                We are here to help! Reach out to us through any of the channels below.
              </p>
              <ul className="space-y-8">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-800 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Our Address</h3>
                    <p className="text-gray-600">1230 Maecenas Street, New York, USA</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-800 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Contact</h3>
                    <p className="text-gray-600">Mobile: +1 (123) 456-7890</p>
                    <p className="text-gray-600">Email: tailnext@gmail.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-800 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 08:00 - 17:00</p>
                    <p className="text-gray-600">Saturday & Sunday: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="card h-fit max-w-6xl p-5 md:p-12 bg-white dark:bg-slate-700 shadow-md rounded-lg" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
              <form id="contactForm">
                <div className="mb-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 dark:bg-slate-800 py-2 px-4 text-gray-900 dark:text-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      name="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 dark:bg-slate-800 py-2 px-4 text-gray-900 dark:text-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      name="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="textarea" className="sr-only">Message</label>
                    <textarea
                      id="textarea"
                      placeholder="Write your message..."
                      rows="5"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 dark:bg-slate-800 py-2 px-4 text-gray-900 dark:text-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      name="textarea"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-12 py-5 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
