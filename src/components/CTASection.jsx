import React from 'react';
import Button from './Button';

const CTASection = ({ title, buttonText, link, variant = 'primary', backgroundImage }) => {
    const sectionStyle = backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    } : {
        backgroundColor: 'var(--color-maroon-dark)'
    };

    return (
        <section className="cta-section section-padding text-center" style={sectionStyle}>
            <div className="container">
                <h2 className="text-gold" style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>{title}</h2>
                <Button to={link} variant={variant} className="btn-large">{buttonText}</Button>
            </div>
        </section>
    );
};

export default CTASection;
