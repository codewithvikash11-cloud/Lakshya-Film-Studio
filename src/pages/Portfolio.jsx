import React, { useState } from 'react';
import './Portfolio.css';

const categories = ['All', 'Weddings', 'Pre-Wedding', 'Cinematic', 'Candid', 'Traditional'];

// Placeholder images - using Unsplash for now until AI images are ready
const portfolioImages = [
    { id: 1, category: 'Weddings', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', size: 'large' },
    { id: 2, category: 'Pre-Wedding', src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80', size: 'small' },
    { id: 3, category: 'Cinematic', src: 'https://images.unsplash.com/photo-1513278974582-dc55303900ca?auto=format&fit=crop&w=800&q=80', size: 'medium' },
    { id: 4, category: 'Weddings', src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80', size: 'medium' },
    { id: 5, category: 'Candid', src: 'https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=800&q=80', size: 'large' },
    { id: 6, category: 'Traditional', src: 'https://images.unsplash.com/photo-1583934555035-18969328229b?auto=format&fit=crop&w=800&q=80', size: 'small' },
    { id: 7, category: 'Weddings', src: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=800&q=80', size: 'medium' },
    { id: 8, category: 'Pre-Wedding', src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80', size: 'large' },
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
