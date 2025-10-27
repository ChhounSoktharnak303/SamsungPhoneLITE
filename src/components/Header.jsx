// src/components/Header.jsx
import React, { useState } from 'react';
// Importing icons for the menu button and user actions
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array for main navigation links
  const navLinks = [
    { name: 'Shop', isBold: true },
    { name: 'Mobile', isBold: false },
    { name: 'TV & AV', isBold: false },
    { name: 'Appliances', isBold: false },
    { name: 'Computing & Displays', isBold: true },
    { name: 'Wearables', isBold: false },
    { name: 'Accessories', isBold: false },
  ];

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 sticky top-0 z-40 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top-most utility links - Always visible, responsive text size */}
        <div className="flex justify-end items-center h-10 text-xs sm:text-sm text-gray-700 dark:text-gray-400 space-x-4">
          <a href="#" className="hover:text-black dark:hover:text-white">Support</a>
          <a href="#" className="flex items-center hover:text-black dark:hover:text-white">
            For Business <span className="ml-1 text-sm">↗</span>
          </a>
        </div>
        
        <div className="flex items-center justify-between h-16">
          {/* Logo and Main Nav Links */}
          <div className="flex items-center">
            <span className="text-xl font-bold mr-6 lg:mr-10 text-black dark:text-white flex-shrink-0">SAMSUNG</span>
            
            {/* Desktop Navigation - Hides on small screens */}
            <nav className="hidden lg:flex space-x-6 text-sm text-gray-700 dark:text-gray-400">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href="#" 
                  className={`${link.isBold ? 'font-semibold text-black dark:text-white' : ''} hover:text-black dark:hover:text-white`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Search Bar and Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6 flex-shrink-0">
            {/* Search input is smaller on mobile */}
            <div className="relative flex items-center bg-gray-50 dark:bg-gray-800 rounded-full h-8 w-32 sm:w-48 border border-gray-200 dark:border-gray-700 focus-within:border-black dark:focus-within:border-white transition-colors">
              <FiSearch className="h-5 w-5 text-gray-500 dark:text-gray-400 ml-3 mr-2 flex-shrink-0" /> 
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm w-full focus:outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 pr-2"
              />
            </div>
            
            {/* User & Cart Icons - Always visible */}
            <FiUser className="hidden sm:block h-6 w-6 text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer" /> 
            <FiShoppingCart className="h-6 w-6 text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer" /> 

            {/* Hamburger Button - Visible on small screens */}
            <button 
              className="lg:hidden p-1 text-gray-700 dark:text-gray-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Toggles based on isMenuOpen state */}
      <nav className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 pb-4 shadow-xl`}>
        <div className="px-4 sm:px-6 space-y-2 pt-2">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href="#" 
              className={`block py-2 text-base ${link.isBold ? 'font-bold text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 rounded-lg px-2`}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;