// src/components/ProductFilters.jsx
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

// Helper component for a single dropdown button
const FilterDropdown = ({ label }) => {
    // Determine which color to use based on the label, to match the image (active filters)
    const activeClass = (label === 'Shop Online' || label === 'Key Features') 
        ? 'bg-black text-white dark:bg-white dark:text-black' 
        : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300';

    return (
        <button className={`flex items-center space-x-1.5 py-1.5 px-3 rounded-full border border-gray-300 dark:border-gray-600 transition-colors duration-200 ${activeClass}`}>
            <span className="text-sm font-medium">{label}</span>
            <FiChevronDown className="w-4 h-4" />
        </button>
    );
};


const ProductFilters = () => {
    // Data for the main filter row
    const mainFilters = [
        'Shop Online', 'Price Range', 'Mobile series name', 'Carrier', 
        'Model Family', 'Storage Size', 'Display Size', 'Color', 'Camera Resolution'
    ];
    // Data for the secondary filter row
    const secondaryFilters = [
        'Key Features'
    ];

    return (
        <div className="mt-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            
            {/* Top Row: Filters count and Sort dropdown */}
            <div className="flex justify-between items-center mb-4 text-black dark:text-white">
                <div className="flex space-x-4">
                    <span className="font-semibold text-sm">Filters</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">21 Results</span>
                </div>
                
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold">Sort</span>
                    <button className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
                        Recommended <FiChevronDown className="w-4 h-4 ml-1" />
                    </button>
                </div>
            </div>

            {/* Main Filters Row - Wrap filters efficiently */}
            <div className="flex flex-wrap gap-2 mb-2">
                {mainFilters.map(filter => (
                    <FilterDropdown key={filter} label={filter} />
                ))}
            </div>

            {/* Secondary Filters Row */}
            <div className="flex flex-wrap gap-2">
                {secondaryFilters.map(filter => (
                    <FilterDropdown key={filter} label={filter} />
                ))}
            </div>
        </div>
    );
};

export default ProductFilters;