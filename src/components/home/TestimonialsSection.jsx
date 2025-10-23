import React, { useState } from 'react';
import TestimonialCard from '../common/TestimonialCard'; // Import the card component
import {testimonialsData,serviceOptions} from '../../data/testimonialData'

const CallbackAndTestimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'industrial',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Requesting callback with data:', formData);
    alert(`Callback requested for ${formData.name}!`);
  };

  return (
    <div className="min-h-screen font-sans">
      
      {/* --- Request Call Back Section (Dark Theme) --- */}
      <section className="bg-gray-800 text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Details Text */}
          <div className="lg:w-1/3">
            <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Discover Details</h2>
            <h3 className="text-4xl font-bold mb-4">Request Call Back</h3>
            <p className="text-gray-400 text-sm">
              Enter your details in the form and your message will be dispatched directly to our staff who will get in touch with you as soon as they can.
            </p>
          </div>

          {/* Call Back Form */}
          <form className="lg:w-2/3" onSubmit={handleSubmit}>
            <p className="text-gray-200 mb-4">Please enter your details</p>
            
            {/* Input Group 1 (Name & Service Select) */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Service type"
              >
                {serviceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Input Group 2 (Phone & Button) */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition duration-200"
              >
                Call me Back
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* --- Client Testimonials Section (Light Theme with Background Pattern) --- */}
      <section className="bg-white py-16 px-4 md:px-8 relative overflow-hidden">
        {/* Background World Map Pattern - needs custom CSS or a background image class */}
        <div className="max-w-6xl mx-auto">
          
          {/* Testimonials Header */}
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">What our Clients Say</p>
              <h2 className="text-3xl font-bold text-gray-800">Client Testimonials</h2>
            </div>
            {/* Carousel Controls */}
            <div className="flex space-x-2 text-gray-500">
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-150" aria-label="Previous testimonial">
                &lt;
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-150" aria-label="Next testimonial">
                &gt;
              </button>
            </div>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                body={testimonial.body}
                author={testimonial.author}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer/Company Logos (Simplified) --- */}
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-around items-center opacity-40 text-gray-500 text-sm font-semibold">
            <span className="p-2">R COMPANY</span>
            <span className="p-2">G COMPANY</span>
            <span className="p-2">C COMPANY</span>
            <span className="p-2">Z COMPANY</span>
            <span className="p-2">X COMPANY</span>
            <span className="p-2">Y COMPANY</span>
        </div>
      </footer>
    </div>
  );
};

export default CallbackAndTestimonials;