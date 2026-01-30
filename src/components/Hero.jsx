import React, { useEffect, useRef } from 'react';
import Button from './Button';
import './Hero.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene3D from './Scene3D';
import heroBgRoyal from '../assets/hero-bg-royal.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const btnRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial Reveal
        tl.fromTo(titleRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
        )
            .fromTo(subtitleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=1"
            )
            .fromTo(btnRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
                "-=0.5"
            );

        // Parallax Effect
        gsap.to(bgRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div
                ref={bgRef}
                className="hero-background-parallax"
                style={{ backgroundImage: `url(${heroBgRoyal})` }}
            ></div>

            {/* 3D Scene Layer */}
            <Scene3D />

            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 className="hero-title" ref={titleRef}>
                    Capturing Your <br />
                    <span className="text-gold">Cinematic Story</span>
                </h1>
                <p className="hero-subtitle" ref={subtitleRef}>
                    Luxury Wedding Photography & Cinematography in Rajasthan
                </p>
                <div className="hero-buttons" ref={btnRef}>
                    <Button to="/contact" variant="primary">Book Your Date</Button>
                    <Button to="/portfolio" variant="outline">View Portfolio</Button>
                </div>
            </div>

            <div className="scroll-indicator animate-bounce">
                <span>↓</span>
            </div>
        </section>
    );
};

export default Hero;
