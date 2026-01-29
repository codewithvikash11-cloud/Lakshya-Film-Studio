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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'active' : ''}`}>
            <div className="nav-container">
                <NavLink to="/" className="nav-logo" onClick={closeMobileMenu}>
                    <img src={logoIcon} alt="Lakshya Film Studio" className="nav-logo-icon" />
                </NavLink>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-links" onClick={closeMobileMenu}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" className="nav-links" onClick={closeMobileMenu}>Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" className="nav-links" onClick={closeMobileMenu}>Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/packages" className="nav-links" onClick={closeMobileMenu}>Packages</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
