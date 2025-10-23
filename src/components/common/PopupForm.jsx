import React, { useEffect, useState } from "react";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open popup when the site loads
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500); // Delay 0.5s
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative animate-fadeIn">
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✖
            </button>

            {/* Popup content */}
            <h2 className="text-2xl font-semibold text-center mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Subscribe to get updates, offers, and more!
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted!");
                closePopup();
              }}
              className="flex flex-col gap-3"
            >
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows="4"
                className="border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
