import React from 'react';
import Button from '../components/Button';
import serviceBg from '../assets/service-bg.png';
import './About.css';

const About = () => {
    return (
        <div className="page-about">
            <div
                className="about-hero"
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${serviceBg})`
                }}
            >
                <div className="container text-center">
                    <h1 className="text-gold about-hero-title">Our Royal Legacy</h1>
                    <p className="text-white about-hero-text">
                        Documenting love stories with elegance, grandeur, and cinematic brilliance since 2015.
                    </p>
                </div>
            </div>

            <section className="section-padding container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="text-gold">Why Choose Lakshya Film Studio?</h2>
                        <p className="text-muted">
                            We are not just photographers; we are visual storytellers who believe that every wedding is a unique fairytale waiting to be told.
                            Based in the heart of Rajasthan, we draw inspiration from the royal heritage of Jaipur and Udaipur to create timeless memories.
                        </p>
                        <p className="text-muted" style={{ marginBottom: '2rem' }}>
                            With over 300+ weddings covered aimed at perfection, our team of creative professionals ensures that your special moments are captured with the utmost precision and artistic flair.
                        </p>
                        <Button to="/contact" variant="primary">Get in Touch</Button>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
                            alt="Team at work"
                        />
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="section-padding text-center bg-maroon">
                <div className="container">
                    <h2 className="text-gold">Meet The Team</h2>
                    <p className="text-white" style={{ marginBottom: '2rem' }}>
                        A passionate group of photographers, cinematographers, and editors dedicated to your happiness.
                    </p>
                    <Button to="/portfolio" variant="outline" style={{ borderColor: '#fff', color: '#fff' }}>View Our Work</Button>
                </div>
            </section>
        </div>
    );
};

export default About;
