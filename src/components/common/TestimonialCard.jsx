import React from 'react';

// A simple component to render the star rating
const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex justify-start mb-3">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ quote, author, title, body }) => {
  return (
    // Card Container
    <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg transform hover:shadow-xl transition duration-300 flex flex-col items-start min-h-full">
      
      {/* Client Image Placeholder (Optional - based on the image in the screenshot) */}
      {/* Assuming the image is part of the context or used for branding */}
      <div className="w-full h-32 bg-gray-100 rounded-t-lg mb-4">
        {/* Placeholder for an actual client photo/scene */}
      </div>

      <StarRating rating={5} /> 

      <p className="font-bold text-gray-800 text-lg mb-4">
        "{quote}"
      </p>

      <p className="text-sm text-gray-500 mb-6 flex-grow">
        {body}
      </p>

      {/* Client Info */}
      <div className="pt-4 border-t border-gray-100 w-full">
        <p className="text-sm font-semibold text-gray-900">{author}</p>
        <p className="text-xs text-blue-600 font-medium">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;