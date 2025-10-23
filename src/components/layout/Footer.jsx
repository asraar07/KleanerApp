import React from 'react';
// Note: In a real project, replace icon text with actual SVG icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      
      {/* -------------------- Main Footer Columns -------------------- */}
      <div className="pt-20 pb-12 bg-[url('/path-to-your-dot-pattern-image.png')] bg-repeat">
      <div className="w-full px-12 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-none">

          
          {/* Column 1: About Us */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-6">About Us</h4>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              The Kleaner is built for Industrial Cleaning Companies but is suitable for
              all that provide cleaning services. Novice or experienced with WordPress,
              this theme will suit your needs to build a website that last and stand out.
            </p>
            <button className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded transition duration-200">
              Get this Theme
            </button>
          </div>
          
          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-6">Quick Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-200 text-sm flex items-center">
                    <span className="mr-2 text-blue-500">•</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-6">Contact Details</h4>
            
            <div className="flex mb-4">
              <span className="text-blue-500 mr-3 mt-1">📍</span>
              <p className="text-sm">
                <strong className="text-white">1109 Longview Avenue</strong><br />
                New York, United States
              </p>
            </div>
            
            <div className="flex mb-4">
              <span className="text-blue-500 mr-3 mt-1">📱</span>
              <p className="text-sm">
                <strong className="text-white">+21 347 678 901</strong><br />
                Mon till Friday: 7:00 till 5:00
              </p>
            </div>
            
            <div className="flex">
              <span className="text-blue-500 mr-3 mt-1">✉️</span>
              <p className="text-sm">
                <strong className="text-white">info@thecleaner.com</strong><br />
                We reply within 1 work day
              </p>
            </div>
          </div>
          
          {/* Column 4: Newsletter & Working Hours */}
          <div>
            {/* Newsletter */}
            <h4 className="text-white text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-2">We don't spam!</p>
            <div className="flex mb-8">
              <input 
                type="email" 
                placeholder="Your email..." 
                className="p-3 bg-gray-700 text-white placeholder-gray-500 border-none focus:ring-blue-500 focus:border-blue-500 w-full rounded-l-md"
              />
              <button className="px-5 py-3 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-r-md">
                Send
              </button>
            </div>

            {/* Working Hours */}
            <h4 className="text-white text-xl font-semibold mb-4">Working Hours</h4>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2">Monday - Friday</td>
                  <td className="py-2 text-white font-semibold text-right">07:00 - 16:00</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2">Saturday</td>
                  <td className="py-2 text-white font-semibold text-right">08:00 - 15:00</td>
                </tr>
                <tr>
                  <td className="py-2">Sunday</td>
                  <td className="py-2 text-red-400 font-semibold text-right">We're Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>

      {/* -------------------- Bottom Bar -------------------- */}
      <div className="bg-gray-900 py-4 border-t border-gray-700 relative">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs text-gray-400">
          
         
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;