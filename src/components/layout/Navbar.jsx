import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about-us' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="shadow-sm">
      {/* -------------------- TOP BAR -------------------- */}
      <div className="border-b border-gray-100 py-3 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <FaPhoneAlt className="text-blue-500 mr-2" /> +02 123 456 789
            </span>
            <span className="flex items-center">
              <span className="text-blue-500 mr-2">📍</span> 1109 Avenue, New York
            </span>
            <span className="flex items-center">
              <span className="text-blue-500 mr-2">⏰</span> Monday / Friday: 7:00 - 17:00
            </span>
            <div className="flex space-x-3 text-gray-400">
              <span className="hover:text-gray-600">f</span>
              <span className="hover:text-gray-600">x</span>
              <span className="hover:text-gray-600">in</span>
              <span className="hover:text-gray-600">▶</span>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- MAIN NAV -------------------- */}
      <nav className="h-16">
        <div className="container mx-auto px-4 flex justify-between items-center h-full relative">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className="text-2xl font-bold text-[#4294E1]">
              the<span className="text-gray-800">kleaner</span>
            </span>
            <span className="text-xs tracking-widest text-gray-500 mt-1">
              CLEANING COMPANY
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-gray-700 p-2 z-30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <FaBars />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full">
            <ul className="flex space-x-8 h-full items-center font-semibold text-gray-700">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <li
                    key={item.name}
                    className={`h-full flex items-center relative group transition duration-150 ${
                      isActive ? 'text-blue-500' : 'hover:text-blue-500'
                    }`}
                  >
                    <Link to={item.path} className="py-5">
                      {item.name}
                    </Link>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* ✅ Desktop Buttons Redirect to /contact */}
            <div className="flex space-x-3 ml-12">
              <Link
                to="/contact"
                className="px-5 py-2.5 text-white bg-blue-900 hover:bg-blue-800 font-semibold rounded-md transition duration-200"
              >
                Request Estimate
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md transition duration-200"
              >
                Make Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* -------------------- MOBILE MENU -------------------- */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Header */}
          <div className="p-4 flex justify-between items-center h-16 shadow-sm">
            <Link to="/" onClick={closeMenu} className="flex flex-col leading-none">
              <span className="text-2xl font-bold text-[#4294E1]">
                the<span className="text-gray-800">kleaner</span>
              </span>
              <span className="text-xs tracking-widest text-gray-500 mt-1">
                CLEANING COMPANY
              </span>
            </Link>
            <button
              className="text-2xl text-gray-700"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-grow">
           <ul className="flex flex-col">
  {navItems.map((item) => {
    const isActive = currentPath === item.path;
    return (
      <li key={item.name}>
        <Link
          to={item.path}
          onClick={closeMenu}
          className={`block w-full py-3 px-6 text-lg font-medium text-gray-800 transition ${
            isActive
              ? 'text-blue-600 bg-gray-100'
              : 'hover:text-blue-600 hover:bg-gray-50'
          }`}
        >
          {item.name}
        </Link>
      </li>
    );
  })}
</ul>

          </div>

          {/* ✅ Mobile Buttons Redirect to /contact */}
          <div className="p-4 space-y-3 border-t border-gray-200">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="w-full block text-center py-3 text-white bg-blue-900 hover:bg-blue-800 font-semibold rounded-md transition duration-200"
            >
              Request Estimate
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="w-full block text-center py-3 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md transition duration-200"
            >
              Make Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
