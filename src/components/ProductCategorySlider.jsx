// src/components/ProductCategorySlider.jsx
import React, { useState, useEffect, useRef } from 'react';

// Consolidated data with image URLs
const productCategories = [
    { 
        name: 'Galaxy Smartphone', 
        description: 'A true AI companion Galaxy AI.', 
        isActive: true, 
        image: 'https://www.samsung.com/us/smg/content/dam/s7/home/mobile/phones/pf/all-phones/09052025/LNB_TS11_Galaxy-TabS_144x144.png' 
    },
    { 
        name: 'Galaxy Tab', 
        description: '', 
        isActive: false, 
        image: 'https://www.samsung.com/us/smg/content/dam/s7/home/mobile/tablets/08052025/Mobile_MainCategory_1-3.png' 
    },
    { 
        name: 'Galaxy Book', 
        description: '', 
        isActive: false, 
        image: 'https://www.samsung.com/us/smg/content/dam/s7/home/mobile/tablets/08052025/Mobile_MainCategory_1-4.png' 
    },
    { 
        name: 'Galaxy Watch', 
        description: '', 
        isActive: false, 
        image: 'https://www.samsung.com/us/smg/content/dam/s7/home/mobile/tablets/08052025/Mobile_MainCategory_1-5.png' 
    },
    { 
        name: 'Galaxy Buds', 
        description: '', 
        isActive: false, 
        image: 'https://www.samsung.com/us/smg/content/dam/s7/home/mobile/tablets/08052025/Mobile_MainCategory_1-6.png' 
    },
    { 
        name: 'Galaxy Ring', 
        description: '', 
        isActive: false, 
        image: 'https://www.samsung.com/us/smg/content/dam/s7/home/xr/galaxy-xr/all/180_Galaxy-XR_Product-Image_Front_thumbnail.png' 
    },
    { 
        name: 'Galaxy Accessories', 
        description: '', 
        isActive: false, 
        image: 'https://www.samsung.com/us/smg/content/dam/s7/home/mobile/tablets/08052025/Mobile_MainCategory_1-7.png' 
    },
    { 
        name: 'Galaxy WR', 
        description: '', 
        isActive: false, 
        image: 'https://www.samsung.com/us/smg/content/dam/s7/home/mobile/tablets/08052025/Mobile_MainCategory_1-5.png' 
    },
];

// Helper component for the Category Card
const CategoryCard = ({ category }) => {
    const isSpecial = category.name.includes('Smartphone');

    // Dark Mode Styling applied here, including the background color fix (bg-white/dark:bg-gray-800)
    const cardClass = category.isActive 
        ? "border-2 border-black dark:border-white shadow-lg dark:shadow-white/20 bg-white dark:bg-gray-800"
        : "border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition duration-150 bg-white dark:bg-gray-800";

    return (
        <div 
            key={category.name}
            className={`flex-shrink-0 w-48 p-4 rounded-xl cursor-pointer ${cardClass} text-black dark:text-white`}
        >
            <p className="text-lg font-bold">
                {isSpecial ? category.name.replace(' ', '\n') : category.name}
            </p>
            {category.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{category.description}</p>
            )}
            <div className="mt-4 h-16 w-full flex items-center justify-center">
                <img 
                    src={category.image} 
                    alt={`${category.name} image`} 
                    className="max-h-full max-w-full object-contain"
                />
            </div>
        </div>
    );
};


const ProductCategorySlider = () => {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemWidth = 192; // Card width (w-48) is 192px
    const gap = 16;        // space-x-4 is 16px
    const totalItems = productCategories.length;

    // Function to handle the actual scroll movement
    const scrollToNext = (index) => {
        if (scrollRef.current) {
            const newScrollPos = index * (itemWidth + gap);
            scrollRef.current.scrollTo({
                left: newScrollPos,
                behavior: 'smooth'
            });
        }
    };
    
    // Function to advance the slider (Next)
    const handleNext = () => {
        setCurrentIndex(prevIndex => {
            const nextIndex = (prevIndex + 1) % totalItems;
            scrollToNext(nextIndex);
            return nextIndex;
        });
    };

    // Function to go back (Previous) - Fixed 'prevIndex' naming error
    const handlePrev = () => {
        setCurrentIndex(current => {
            const newIndex = (current - 1 + totalItems) % totalItems;
            scrollToNext(newIndex);
            return newIndex;
        });
    };
    
    // Auto-slide effect
    useEffect(() => {
        let slideInterval = null;

        const startTimer = () => {
            slideInterval = setInterval(() => {
                handleNext();
            }, 3000); // 3-second auto-slide interval
        };

        startTimer();

        // Cleanup function
        return () => clearInterval(slideInterval);
    }, [currentIndex]); 

    // Placeholder for manual scroll interaction logic (resets the timer)
    const handleInteraction = () => {
        // In a real application, you would add logic here to pause/reset the interval
    };

    return (
        <div className="mb-10 relative">
            <div className="flex items-center">
                {/* Product Category Grid (Slider Container) */}
                <div 
                    ref={scrollRef}
                    onScroll={handleInteraction}
                    // 'hide-scrollbar' class is crucial for the visual look
                    className="flex space-x-4 overflow-x-scroll pb-4 hide-scrollbar w-full scroll-snap-x mandatory"
                >
                    {productCategories.map((category) => (
                        <CategoryCard key={category.name} category={category} />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex space-x-2 ml-4 flex-shrink-0 absolute right-0 top-1/2 transform -translate-y-1/2">
                    <button 
                        onClick={handlePrev}
                        // Dark Mode Styling
                        className="h-10 w-10 border rounded-full text-gray-400 dark:text-gray-600 dark:border-gray-700 hover:border-black dark:hover:border-white dark:hover:text-white transition duration-150"
                    >
                        &#8592; {/* Left Arrow */}
                    </button>
                    <button 
                        onClick={handleNext}
                        // Dark Mode Styling
                        className="h-10 w-10 border rounded-full text-black dark:text-white dark:border-white hover:border-black dark:hover:border-white transition duration-150"
                    >
                        &#8594; {/* Right Arrow */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCategorySlider;