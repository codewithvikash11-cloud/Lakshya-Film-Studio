import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import './WhatsAppFloat.css';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppFloat = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    // Don't render until auto-show
    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="whatsapp-container"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <button
                    className="whatsapp-close"
                    onClick={() => setIsVisible(false)}
                    aria-label="Close WhatsApp Chat"
                >
                    <FaTimes />
                </button>

                <a
                    href="https://wa.me/919468825097?text=Hello%20Lakshya%20Film%20Studio,%20I%20want%20to%20book%20for%20my%20wedding."
                    className="whatsapp-float"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp className="whatsapp-icon" />
                    <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
                </a>
            </motion.div>
        </AnimatePresence>
    );
};

export default WhatsAppFloat;
