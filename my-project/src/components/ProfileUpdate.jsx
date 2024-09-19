import React, { useState } from 'react';

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    profileImage: '',
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (API call or form handling)
    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-gray-100 rounded-2xl mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Update Profile</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        {/* Profile Image */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Profile Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-2 w-full border border-gray-300 py-2 px-4 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            className="mt-2 w-full border border-gray-300 py-2 px-4 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email address"
            className="mt-2 w-full border border-gray-300 py-2 px-4 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your phone number"
            className="mt-2 w-full border border-gray-300 py-2 px-4 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="New password"
            className="mt-2 w-full border border-gray-300 py-2 px-4 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;
