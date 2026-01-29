import React, { useEffect, useRef } from 'react';
import './StatsSection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
    { id: 1, value: 300, label: 'Weddings Covered', suffix: '+' },
    { id: 2, value: 8, label: 'Years Experience', suffix: '+' },
    { id: 3, value: 500, label: 'Happy Couples', suffix: '+' },
    { id: 4, value: 50, label: 'Destination Weddings', suffix: '+' },
];

const StatsSection = () => {
    return (
        <section className="stats-section section-padding">
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat) => (
                        <Counter key={stat.id} target={stat.value} label={stat.label} suffix={stat.suffix} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Counter = ({ target, label, suffix }) => {
    const numberRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(numberRef.current,
            { innerText: 0 },
            {
                innerText: target,
                duration: 2,
                ease: "power2.out",
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                onUpdate: function () {
                    numberRef.current.innerText = Math.ceil(this.targets()[0].innerText);
                }
            }
        );
    }, [target]);

    return (
        <div className="stat-item" ref={containerRef}>
            <h3 className="stat-number text-gold">
                <span ref={numberRef}>0</span>
                <span className="stat-suffix">{suffix}</span>
            </h3>
            <p className="stat-label">{label}</p>
        </div>
    );
};

export default StatsSection;
