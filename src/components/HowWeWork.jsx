import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './HowWeWork.css';

const steps = [
    {
        id: "01",
        title: "Consultation & Planning",
        desc: "We meet to understand your vision, style, and wedding details to create a tailored plan."
    },
    {
        id: "02",
        title: "The Shoot",
        desc: "Our team discreetly captures candid moments and grand events without interrupting the flow."
    },
    {
        id: "03",
        title: "Creative Editing",
        desc: "We carefully select the best shots and color grade them to give a signature cinematic look."
    },
    {
        id: "04",
        title: "Final Delivery",
        desc: "You receive your high-resolution photos and films in a premium digital gallery or drive."
    }
];

const HowWeWork = () => {
    return (
        <section className="how-we-work section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="text-gold">How We <span className="text-white">Work</span></h2>
                </div>

                <div className="timeline-container">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="step-row"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            {/* Layout alternating logic for desktop would go here, 
                                but keeping it simple for responsiveness, 
                                creating consistent flow based on CSS */}

                            {/* Desktop: Alternating sides handled by CSS pseudo-selectors or manual classes if robust 
                                For simplicity and reliability, we'll keep the number central and content right/left depending on CSS media query */}

                            <div className="step-number-container">
                                {step.id}
                            </div>

                            <div className="step-right w-full">
                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-desc">{step.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
