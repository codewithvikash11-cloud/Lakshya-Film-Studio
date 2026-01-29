import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedGallery.css';

const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=800&q=80', title: 'Weddings' },
    { id: 2, src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80', title: 'Pre-Wedding' },
    { id: 3, src: 'https://images.unsplash.com/photo-1513278974582-dc55303900ca?auto=format&fit=crop&w=800&q=80', title: 'Cinematic' },
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
