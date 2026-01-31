import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './TrustLine.css';

const TrustLine = () => {
    return (
        <section className="trust-line text-center">
            <div className="container">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Trusted by <span className="text-gold">300+ couples</span> across Rajasthan
                </motion.p>
            </div>
        </section>
    );
};

export default TrustLine;
