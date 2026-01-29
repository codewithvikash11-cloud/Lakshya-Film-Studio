import React from 'react';
import './BehindLensSection.css';
import studioImg from '../assets/contact-studio.png';
import cameraImg from '../assets/about-team.png';

const BehindLensSection = () => {
    return (
        <section className="lens-section section-padding">
            <div className="container">
                <h2 className="text-center text-gold section-title">Behind the Lens</h2>

                <div className="lens-grid">
                    <div className="lens-card item-1">
                        <img src={studioImg} alt="Studio Workspace" loading="lazy" />
                        <div className="lens-overlay">
                            <h3>Our Studio</h3>
                            <p>Where magic happens in post-production.</p>
                        </div>
                    </div>

                    <div className="lens-card item-2">
                        <img src={cameraImg} alt="Camera Gear" loading="lazy" />
                        <div className="lens-overlay">
                            <h3>Cinematic Gear</h3>
                            <p>Top-tier equipment for flawless 4K quality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BehindLensSection;
