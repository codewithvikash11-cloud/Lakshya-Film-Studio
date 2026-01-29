import React from 'react';
import Button from './Button';

const HomeAbout = () => {
    return (
        <section className="section-padding container text-center">
            <h2 className="text-gold">Who We Are</h2>
            <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#e0e0e0' }}>
                    Lakshya Film Studio is more than just a photography service; we are storytellers.
                    With years of experience in capturing weddings, events, and portraits, we believe every moment contributes to a beautiful story.
                </p>
                <p style={{ marginBottom: '2rem', color: '#a0a0a0' }}>
                    Our team of professional photographers and editors work tirelessly to deliver high-quality, cinematic visuals that you will cherish forever.
                </p>
                <Button to="/about" variant="outline">Our Story</Button>
            </div>
        </section>
    );
};

export default HomeAbout;
