import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <NavLink to="/" onClick={closeMenu}>
                        <h1>Lakshya Film Studio</h1>
                    </NavLink>
                </div>

                <div className="nav-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/packages" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Packages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
