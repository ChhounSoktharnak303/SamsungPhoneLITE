// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductCategorySlider from './components/ProductCategorySlider';
import ThemeSwitcher from './components/ThemeSwitcher'; 
import ProductFilters from './components/ProductFilters'; // NEW
import ProductGrid from './components/ProductGrid';       // NEW

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);


  return (
    <div className={`min-h-screen font-sans bg-white dark:bg-gray-900 transition-colors duration-500`}>
      
      <div className="fixed top-4 right-4 z-50">
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>

      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        
        <h1 className="text-5xl font-extrabold mb-12 text-black dark:text-white">
          Explore Galaxy Smartphones
        </h1>

        <ProductCategorySlider />
        
        {/* Sub-Navigation/Filter Links (Kept here as a separate menu bar) */}
        <div className="mt-10 flex space-x-8 text-lg border-b border-gray-200 dark:border-gray-700">
            <a href="#" className="font-bold border-b-2 border-black dark:border-white pb-3 text-black dark:text-white">All</a>
            <a href="#" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white pb-3">Galaxy S</a>
            <a href="#" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white pb-3">Galaxy Z</a>
            <a href="#" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white pb-3">Galaxy A</a>
            <a href="#" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white pb-3">Compare</a>
            <a href="#" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white pb-3">Smartphones Accessories</a>
        </div>
        
        {/* ======================================= */}
        {/* 🛒 NEW PRODUCT LISTING SECTION STARTS 🛒 */}
        {/* ======================================= */}
        
        {/* Filters and Sort */}
        <ProductFilters /> 

        {/* Product Grid */}
        <ProductGrid />

      </main>
    </div>
  );
};

export default App;