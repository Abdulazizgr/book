import React, { useState } from 'react';

const CallToAction = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server or display a success message)
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <section id="cta" className="bg-softBlue py-10">
      {/* Main Container */}
      <div className="max-w-lg mx-auto text-center">
        <p className="mb-6 text-lg tracking-widest text-white uppercase">
          Ready to get started?
        </p>
        <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">
          Contact Us Today
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto space-y-6 text-base px-6"
        >
          {/* Email Input Field */}
          <input
            type="email"
            className="w-full px-6 pt-3 pb-2 rounded-lg border border-white focus:outline-none"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Message Textarea */}
          <textarea
            className="w-full px-6 py-3 mb-4 rounded-lg border border-white focus:outline-none"
            placeholder="Your Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          {/* Submit Button */}
          <input
            type="submit"
            className="inline-flex px-6 py-3 font-semibold text-center text-white bg-softRed rounded-lg cursor-pointer hover:opacity-90 focus:outline-none"
            value="Send Message"
          />
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
