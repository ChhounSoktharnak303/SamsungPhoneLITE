// src/components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard'; 

// --- Dummy Data with Updated Image URLs ---
const dummyProducts = [
    {
        id: 1,
        name: 'Galaxy Z Fold7',
        price: '$1,999.99',
        rating: 4.8,
        reviews: 3650,
        colors: ['#D9D9D9', '#1F3F5F', 'black', 'white'], // Adjusted color codes to better represent the image swatches
        // Updated Image URL for Galaxy Z Fold7
        image: 'https://images.samsung.com/is/image/samsung/p6pim/us/f2507/gallery/us-galaxy-z-fold7-f966-sm-f966ulgaxaa-547827985?$PD_GALLERY_PNG$?$product-card-small-jpg$', 
        isNew: false,
    },
    {
        id: 2,
        name: 'Galaxy S25 Ultra',
        price: '$1,049.99',
        rating: 4.9,
        reviews: 9999,
        colors: ['#DCD7C3', '#949B90', '#6D6D6D', '#B5A695'],
        save: 250,
        // Updated Image URL for Galaxy S25 Ultra
        image: 'https://images.samsung.com/is/image/samsung/p6pim/us/2501/gallery/us-galaxy-s25-s938-536277-sm-s938uzgaxaa-544888249?$PD_GALLERY_PNG$?$product-card-small-jpg$', 
        isNew: true,
    },
    {
        id: 3,
        name: 'Galaxy Z Flip7 256GB',
        price: '$1,099.99',
        rating: 4.7,
        reviews: 1362,
        colors: ['#F99D8F', '#FF6347', '#D3D3D3', '#C0C0C0'],
        // Using the same image URL as the S25 Ultra for the placeholder to match the provided image
        image: 'https://images.samsung.com/is/image/samsung/p6pim/us/2501/gallery/us-galaxy-s25-s938-536277-sm-s938uzgaxaa-544888249?$PD_GALLERY_PNG$?$product-card-small-jpg$', 
        isNew: false,
    },
    {
        id: 4,
        name: 'Galaxy S25 FE',
        price: '$649.99',
        rating: 4.7,
        reviews: 450,
        colors: ['#30304D', '#545468', '#D3D3D3', '#C0C0C0'],
        // Updated Image URL for Galaxy S25 FE
        image: 'https://images.samsung.com/is/image/samsung/p6pim/us/sm-s731udbaxaa/gallery/us-galaxy-s25-fe-sm-s731-sm-s731udbaxaa-548773032?$PD_GALLERY_PNG$?$product-card-small-jpg$', 
        isNew: true,
    },
];
// --- End Dummy Data ---


const ProductGrid = () => {
    return (
        <div className="pt-6 pb-20">
            {/* Grid layout: 2 columns on tablet (sm), 3 on medium (md), 4 on large (lg) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dummyProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;