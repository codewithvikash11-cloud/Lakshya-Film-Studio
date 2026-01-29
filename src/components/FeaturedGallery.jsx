import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedGallery.css';

import img1 from '../assets/portfolio-udaipur.png';
import img2 from '../assets/portfolio-desert.png';
import img3 from '../assets/hero-bg-royal.png';

const images = [
    { id: 1, src: img1, title: 'Weddings' },
    { id: 2, src: img2, title: 'Pre-Wedding' },
    { id: 3, src: img3, title: 'Cinematic' },
];

const FeaturedGallery = () => {
    return (
        <section className="featured-gallery section-padding">
            <div className="container">
                <h2 className="text-center">Featured <span className="text-gold">Works</span></h2>
                <p className="text-center text-muted">A glimpse into our visual journey</p>

                <div className="gallery-grid-home">
                    {images.map((img) => (
                        <div key={img.id} className="gallery-item">
                            <img src={img.src} alt={img.title} />
                            <div className="gallery-overlay">
                                <h4>{img.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '2rem' }}>
                    <Link to="/portfolio" className="btn btn-outline">View Full Gallery</Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedGallery;
