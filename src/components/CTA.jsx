import React from 'react';
import Button from './Button';

const CTA = () => {
    return (
        <section className="cta-section" style={{
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&w=1950&q=80)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            padding: '80px 20px',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Create Memories?</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'white' }}>Book your date with us today and let's make magic happen.</p>
                <Button to="/contact" variant="primary" className="btn-large">Get in Touch</Button>
            </div>
        </section>
    );
};

export default CTA;
