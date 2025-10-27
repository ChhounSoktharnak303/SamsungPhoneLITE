// src/components/ProductCard.jsx
import React from 'react';
import { FiStar } from 'react-icons/fi';

// ⭐ Star Rating Component
const StarRating = ({ rating, count }) => {
  const fullStars = Math.round(rating);
  const starArray = Array(5)
    .fill(null)
    .map((_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${
          i < fullStars
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300 dark:text-gray-500'
        }`}
      />
    ));

  return (
    <div className="flex items-center space-x-2">
      <div className="flex">{starArray}</div>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {rating.toFixed(1)} <span className="underline">({count})</span>
      </span>
    </div>
  );
};

// 🎨 Color Swatches Component
const ColorSwatch = ({ colors, activeColorName, activeColorCode }) => (
  <div>
    {activeColorName && (
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        {activeColorName}
      </p>
    )}
    <div className="flex space-x-1.5">
      {colors.map((colorCode, index) => (
        <div
          key={index}
          className={`w-5 h-5 rounded-full border-4 ${
            colorCode === activeColorCode
              ? 'border-black dark:border-white'
              : 'border-gray-200 dark:border-gray-500 hover:border-black dark:hover:border-white'
          } p-0.5 cursor-pointer transition-colors duration-150`}
        >
          <div
            className="w-full h-full rounded-full"
            style={{ backgroundColor: colorCode }}
          />
        </div>
      ))}
    </div>
  </div>
);

const ProductCard = ({ product }) => {
  const cardBgClass = 'bg-white dark:bg-gray-800';

  let activeColorName = '';
  let activeColorCode = '';

  if (product.id === 1) {
    activeColorName = 'Mint';
    activeColorCode = '#D9D9D9';
  } else if (product.id === 2) {
    activeColorName = 'Titanium Jadegreen';
    activeColorCode = '#949B90';
  } else if (product.id === 3) {
    activeColorName = '';
    activeColorCode = product.colors[0];
  } else if (product.id === 4) {
    activeColorName = 'Navy';
    activeColorCode = '#30304D';
  }

  return (
    <div
      className={`flex flex-col justify-between p-5 rounded-xl ${cardBgClass} transition-colors duration-300 min-h-[480px] shadow-sm hover:shadow-md transition-shadow`}
    >
      {/* Top Section */}
      <div>
        {/* NEW Badge */}
        {product.isNew && (
          <div className="flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
            {product.id === 4 && (
              <div className="w-0.5 h-3 mr-1 bg-blue-600 dark:bg-blue-400"></div>
            )}
            NEW
          </div>
        )}

        {/* Image */}
        <div className="h-48 flex items-center justify-center mb-5 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Product Info Section with Fixed Heights */}
        <div className="space-y-4">
          {/* Product Name - Fixed Height */}
          <div className="h-14 flex items-start">
            <h2 className="text-lg font-semibold text-black dark:text-white leading-snug line-clamp-2">
              {product.name}
            </h2>
          </div>

          {/* Rating - Fixed Height */}
          <div className="h-6 flex items-center">
            <StarRating rating={product.rating} count={product.reviews} />
          </div>

          {/* Color Options - Fixed Height */}
          <div className="h-14 flex items-start">
            <ColorSwatch
              colors={product.colors}
              activeColorName={activeColorName}
              activeColorCode={activeColorCode}
            />
          </div>
        </div>

        {/* Price */}
        <div className="text-xl font-bold text-black dark:text-white mt-5">
          {product.price}
          {product.save && (
            <span className="ml-2 text-sm font-normal text-blue-600 dark:text-blue-400">
              Save ${product.save}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <label className="flex items-center space-x-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            className="rounded h-4 w-4 text-black dark:text-black bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-black dark:focus:ring-white"
          />
          <span className="text-black dark:text-white">Compare</span>
        </label>

        <button className="bg-black dark:bg-white text-white dark:text-black font-semibold py-2 px-6 rounded-full hover:opacity-80 transition-opacity duration-200">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;