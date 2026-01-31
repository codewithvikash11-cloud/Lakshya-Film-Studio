import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logoIcon from '../assets/logo-icon.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);
    const menuItemsRef = useRef([]);
    const overlayRef = useRef(null);

    const closeMobileMenu = () => setIsMenuOpen(false);

    // GSAP Scroll Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(navRef.current, {
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "+=100",
                    toggleActions: "play none none reverse",
                    onUpdate: (self) => {
                        // Manual tween for smoother color transition based on progress if needed
                        // But simple toggle class or state is often chopier. 
                        // Let's use direct tween for premium feel.
                        if (self.scroll() > 50) {
                            gsap.to(navRef.current, {
                                backgroundColor: "rgba(11, 11, 11, 0.95)",
                                height: "70px",
                                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.5)",
                                borderBottom: "1px solid rgba(212, 175, 55, 0.1)",
                                duration: 0.4,
                                ease: "power2.out"
                            });
                        } else {
                            gsap.to(navRef.current, {
                                backgroundColor: "transparent",
                                height: "80px",
                                boxShadow: "none",
                                borderBottom: "1px solid transparent",
                                duration: 0.4,
                                ease: "power2.out"
                            });
                        }
                    }
                }
            });
        }, navRef);
        return () => ctx.revert();
    }, []);

    // GSAP Mobile Menu Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (isMenuOpen) {
                // Open Sequence
                const tl = gsap.timeline();

                tl.display(overlayRef.current, "flex")
                    .to(overlayRef.current, {
                        yPercent: 0,
                        duration: 0.5,
                        ease: "power3.inOut"
                    })
                    .fromTo(menuItemsRef.current,
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "back.out(1.7)" },
                        "-=0.2"
                    );

                document.body.classList.add('mobile-nav-open');
            } else {
                // Close Sequence
                gsap.to(overlayRef.current, {
                    yPercent: -100,
                    duration: 0.4,
                    ease: "power3.inOut",
                    onComplete: () => {
                        gsap.set(overlayRef.current, { display: "none" });
                    }
                });

                document.body.classList.remove('mobile-nav-open');
            }
        }, menuRef);

        return () => ctx.revert();
    }, [isMenuOpen]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Packages', path: '/packages' },
        { name: 'Contact', path: '/contact' },
    ];

    // Helper to add ref to array
    const addToRefs = (el) => {
        if (el && !menuItemsRef.current.includes(el)) {
            menuItemsRef.current.push(el);
        }
    };

    // Reset refs array on render to handle dynamic updates purely
    menuItemsRef.current = [];

    return (
        <nav ref={navRef} className="navbar">
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
                <div
                    ref={overlayRef}
                    className="mobile-menu-overlay"
                    style={{ transform: 'translateY(-100%)', display: 'none' }} // Initial state hidden
                >
                    <div className="mobile-menu-header">
                        <img src={logoIcon} alt="Lakshya Film Studio" className="mobile-logo" />
                        <button className="mobile-close" onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
                            <FaTimes />
                        </button>
                    </div>

                    <ul className="mobile-nav-items">
                        {navItems.map((item, index) => (
                            <li
                                key={item.name}
                                className="mobile-nav-item"
                                ref={addToRefs}
                                style={{ opacity: 0 }} // Start invisible for stagger
                            >
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
