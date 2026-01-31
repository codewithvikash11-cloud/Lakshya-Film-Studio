import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logoIcon from '../assets/logo-icon.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const closeMobileMenu = () => setIsMenuOpen(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Body scroll lock
    // Body scroll lock
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
            document.body.classList.add('mobile-nav-open');
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
            document.body.classList.remove('mobile-nav-open');
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
            document.body.classList.remove('mobile-nav-open');
        };
    }, [isMenuOpen]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Packages', path: '/packages' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'active' : ''} ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="nav-container">
                <NavLink to="/" className="nav-logo" onClick={closeMobileMenu}>
                    <img src={logoIcon} alt="Lakshya Film Studio" className="nav-logo-icon" />
                </NavLink>

                <button className="menu-icon" onClick={() => setIsMenuOpen(true)} aria-label="Open Menu">
                    <FaBars />
                </button>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    {navItems.map((item) => (
                        <li key={item.name} className="nav-item">
                            <NavLink to={item.path} className="nav-links">
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Overlay */}
                <div className={isMenuOpen ? "mobile-menu-overlay active" : "mobile-menu-overlay"}>
                    <div className="mobile-menu-header">
                        <img src={logoIcon} alt="Lakshya Film Studio" className="mobile-logo" />
                        <button className="mobile-close" onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
                            <FaTimes />
                        </button>
                    </div>

                    <ul className="mobile-nav-items">
                        {navItems.map((item, index) => (
                            <li key={item.name} className="mobile-nav-item" style={{ animationDelay: `${index * 0.1}s` }}>
                                <NavLink
                                    to={item.path}
                                    className="mobile-nav-link"
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="mobile-menu-footer">
                        <div className="mobile-cta-group">
                            <NavLink to="/contact" className="btn btn-primary w-full" onClick={closeMobileMenu}>
                                Book Your Date
                            </NavLink>
                            <a
                                href="https://wa.me/919468825097?text=Hello%20Lakshya%20Film%20Studio"
                                className="btn btn-secondary w-full"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
