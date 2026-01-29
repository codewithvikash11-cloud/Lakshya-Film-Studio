import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import founderImg from '../assets/about-team.png';
import './FounderSection.css';

gsap.registerPlugin(ScrollTrigger);

const FounderSection = () => {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(imgRef.current,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                }
            }
        );

        gsap.fromTo(textRef.current,
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section className="founder-section section-padding" ref={sectionRef}>
            <div className="container">
                <h2 className="text-center text-gold section-title">Meet the Founder</h2>

                <div className="founder-grid">
                    <div className="founder-image-wrapper" ref={imgRef}>
                        <div className="gold-frame"></div>
                        <img src={founderImg} alt="Sandeep Saini" className="founder-img" />
                    </div>

                    <div className="founder-content" ref={textRef}>
                        <h3 className="founder-name">Sandeep Saini</h3>
                        <p className="founder-role text-gold">Founder & Lead Cinematographer</p>
                        <p className="founder-bio">
                            With a vision to transform wedding memories into cinematic masterpieces, Sandeep established Lakshya Film Studio.
                            His passion for storytelling and keen eye for detail ensures that every frame speaks a thousand emotions.
                            Under his leadership, the studio has covered over 300 royal weddings across Rajasthan.
                        </p>
                        <div className="signature">Lakshya Film Studio</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
