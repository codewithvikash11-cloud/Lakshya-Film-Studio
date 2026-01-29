import React, { useState } from 'react';
import './Portfolio.css';

// Import generated images
// Using relative paths to assets
import img1 from '../assets/portfolio-udaipur.png';
import img2 from '../assets/portfolio-desert.png';
import img3 from '../assets/service-rituals.png';
import img4 from '../assets/about-team.png';
import img5 from '../assets/hero-bg-royal.png';
import img6 from '../assets/packages-flatlay.png';

const categories = ['All', 'Weddings', 'Pre-Wedding', 'Cinematic', 'Candid', 'Traditional'];

const portfolioImages = [
    { id: 1, category: 'Weddings', src: img1, size: 'large' },
    { id: 2, category: 'Pre-Wedding', src: img2, size: 'medium' },
    { id: 3, category: 'Traditional', src: img3, size: 'medium' },
    { id: 4, category: 'Cinematic', src: img4, size: 'small' },
    { id: 5, category: 'Weddings', src: img5, size: 'large' },
    { id: 6, category: 'Details', src: img6, size: 'small' },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = activeCategory === 'All'
        ? portfolioImages
        : portfolioImages.filter(img => img.category === activeCategory);

    return (
        <div className="page-portfolio section-padding">
            <div className="container">
                <h1 className="text-center text-gold">Our Portfolio</h1>
                <p className="text-center text-muted">A Glimpse of Royal Celebrations</p>

                {/* Filter Buttons */}
                <div className="portfolio-filter text-center">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="portfolio-masonry">
                    {filteredImages.map(img => (
                        <div key={img.id} className={`portfolio-item ${img.size}`} onClick={() => setSelectedImage(img)}>
                            <img src={img.src} alt="Portfolio" loading="lazy" />
                            <div className="portfolio-overlay">
                                <span>{img.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                        <div className="lightbox-content">
                            <img src={selectedImage.src} alt="Full View" />
                            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
