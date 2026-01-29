import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section footer-about">
                    <h3>Lakshya Film Studio</h3>
                    <p>
                        Capturing your most precious moments with elegance and style.
                        We specialize in wedding photography, cinematic films, and event coverage.
                    </p>
                    <div className="social-icons" style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                        <a href="#" className="text-gold"><FaInstagram size={24} /></a>
                        <a href="#" className="text-gold"><FaFacebook size={24} /></a>
                        <a href="#" className="text-gold"><FaYoutube size={24} /></a>
                    </div>
                </div>

                <div className="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>

                <div className="footer-section footer-contact">
                    <h3>Contact Us</h3>
                    <p><FaMapMarkerAlt className="text-gold" /> 123 Wedding Street, City, State</p>
                    <p><FaPhone className="text-gold" /> +91 98765 43210</p>
                    <p><FaEnvelope className="text-gold" /> info@lakshyafilmstudio.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Lakshya Film Studio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
