import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaVideo, FaMapMarkedAlt, FaCameraRetro, FaHeart } from 'react-icons/fa';
import './WhyChooseUs.css';

const features = [
    {
        id: 1,
        icon: <FaVideo />,
        title: "Cinematic Storytelling",
        desc: "We don't just record events; we weave them into a movie that tells your unique love story."
    },
    {
        id: 2,
        icon: <FaMapMarkedAlt />,
        title: "Rajasthan Specialists",
        desc: "Deeply experienced in capturing the grandeur of palaces and heritage venues across Rajasthan."
    },
    {
        id: 3,
        icon: <FaCameraRetro />,
        title: "Premium Equipment",
        desc: "Using industry-leading Sony cinema cameras, drones, and lighting for that 4K royal look."
    },
    {
        id: 4,
        icon: <FaHeart />,
        title: "Personal Attention",
        desc: "We take limited bookings to ensure every couple gets our undivided attention and timely delivery."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us section-padding">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-gold">Why <span className="text-white">Couples Choose Us</span></h2>
                    <p className="text-muted" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>Creating timeless memories with passion and precision.</p>
                </div>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            className="feature-card"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
