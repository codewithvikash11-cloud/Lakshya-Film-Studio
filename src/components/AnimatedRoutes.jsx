import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Packages from '../pages/Packages';
import Contact from '../pages/Contact';
import BookNow from '../pages/BookNow';
import Terms from '../pages/Terms';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import PageTransition from './PageTransition';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
                <Route path="/packages" element={<PageTransition><Packages /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/book-now" element={<PageTransition><BookNow /></PageTransition>} />
                <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
                <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
