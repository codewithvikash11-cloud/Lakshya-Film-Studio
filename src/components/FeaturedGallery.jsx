import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedGallery.css';

// Importing local high-quality assets
import imgWeddings from '../assets/featured-weddings.png';
import imgPreWedding from '../assets/portfolio-desert.png';
import imgCinematic from '../assets/service-rituals.png';

const images = [
    { id: 1, src: imgWeddings, title: 'Weddings' },
    { id: 2, src: imgPreWedding, title: 'Pre-Wedding' },
    { id: 3, src: imgCinematic, title: 'Cinematic' },
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
                            <img src={img.src} alt={img.title} loading="lazy" />
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
