import React from 'react';
// Assuming you have an Icon component that can render these:
import { Facebook, Twitter, Linkedin } from 'lucide-react'; 
import PageHeader from '../components/common/pageHeroSection';
// If you have a generic Icon component:
// import Icon from '../ui/Icon'; // or wherever your Icon component is

const ContactUs = () => {
  return (
    <section className="w-full bg-gray-50 ">
        <div className="w-full  ">
        
                     <PageHeader
        subtitle="Send us a message"
        title="Contact Us"
        description=""
        bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
      />


                {/* Services Grid */}
              
            </div>
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Send a Message Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send a Message</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Feel free to get in touch by phone or through the contact form below. Your message will be sent directly to our staff who will answer as soon as they can.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    Your Name (required)
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name *"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address (required)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address *"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number (required)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number *"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    The Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Write your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Type your message..."
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Map & Contact Details */}
          <div>
            {/* Company Location Map */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Location</h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-64 mb-8">
              {/* Replace with your actual Google Maps embed URL */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.342111162391!2d-73.9877477341052!3d40.78128560114917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a174c10c1%3A0x1d2112d8f997f5d!2sCentral%20Park%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map of Central Park, New York"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Company Address */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Company Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  1109 Longview Avenue,<br />
                  New York City, NY, 94043<br />
                  United States
                </p>
                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-6">
                  {/* Using lucide-react icons directly */}
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200" aria-label="Facebook">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200" aria-label="Twitter">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  {/* If using a generic Icon component: */}
                  {/* <Icon name="Facebook" className="h-6 w-6 text-gray-400 hover:text-blue-500" /> */}
                  {/* <Icon name="Twitter" className="h-6 w-6 text-gray-400 hover:text-blue-500" /> */}
                  {/* <Icon name="Linkedin" className="h-6 w-6 text-gray-400 hover:text-blue-500" /> */}
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Details</h3>
                <p className="text-gray-600 text-sm mb-1">
                  Phone: +(123) 321 - 354 - 923<br />
                  Fax: (12) 321 - 345 - 920
                </p>
                <a href="mailto:info@thecleaner.com" className="text-blue-600 hover:underline text-sm block mt-2">
                  info@thecleaner.com
                </a>
                <a href="http://www.thecleaner.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm block">
                  www.thecleaner.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
