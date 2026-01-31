import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import './MobileStickyCTA.css';

const MobileStickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000); // Verify: Appears after 3 seconds

        return () => clearTimeout(timer);
    }, []);

    // Also hide if at very bottom of page to not block footer info? 
    // Usually sticking is fine.

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="mobile-sticky-cta"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <a
                    href="https://wa.me/919468825097?text=Hi%20Lakshya%20Film%20Studio,%20I%20want%20to%20check%20availability%20for%20my%20wedding"
                    className="btn btn-primary w-full cta-pulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderRadius: '8px', fontSize: '1rem', padding: '12px' }}
                >
                    Check Availability
                </a>
            </motion.div>
        </AnimatePresence>
    );
};

export default MobileStickyCTA;
