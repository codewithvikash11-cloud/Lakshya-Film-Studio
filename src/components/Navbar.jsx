import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logoIcon from '../assets/logo-icon.png';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [click]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Packages', path: '/packages' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'active' : ''} ${click ? 'mobile-menu-open' : ''}`}>
            <div className="nav-container">
                <NavLink to="/" className="nav-logo" onClick={closeMobileMenu}>
                    <img src={logoIcon} alt="Lakshya Film Studio" className="nav-logo-icon" />
                </NavLink>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

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
                <div className={click ? "mobile-menu-overlay active" : "mobile-menu-overlay"}>
                    <div className="mobile-menu-header">
                        <img src={logoIcon} alt="Lakshya Film Studio" className="mobile-logo" />
                        <div className="mobile-close" onClick={closeMobileMenu}>
                            <FaTimes />
                        </div>
                    </div>

                    <ul className="mobile-nav-items">
                        {navItems.map((item, index) => (
                            <li key={item.name} className="mobile-nav-item" style={{ animationDelay: `${index * 0.1}s` }}>
                                <NavLink
                                    to={item.path}
                                    className="mobile-nav-link"
                                    onClick={closeMobileMenu}
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
