import React from "react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-sky-700 mb-6">
        Contact Us
      </h1>

      <p className="text-gray-700 text-center mb-8">
        Have questions, feedback, or issues? We’d love to hear from you.
      </p>

      <form className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            placeholder="Write your message here..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-sky-700 text-white px-5 py-2 rounded-lg hover:bg-sky-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
