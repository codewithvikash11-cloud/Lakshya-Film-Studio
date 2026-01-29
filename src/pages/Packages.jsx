import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheck, FaWhatsapp, FaStar, FaAward, FaCamera, FaGlobe } from 'react-icons/fa';
import Button from '../components/Button';
import './Packages.css';

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
    useEffect(() => {
        // Hero Animation
        gsap.fromTo(".packages-hero-content",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );

        // Cards Animation
        gsap.utils.toArray('.pricing-card').forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pricing-grid",
                        start: "top 80%"
                    }
                }
            );
        });

        // Table Row Animation
        gsap.utils.toArray('.compare-row').forEach((row) => {
            gsap.fromTo(row,
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 90%"
                    }
                }
            );
        });

    }, []);

    const faqs = [
        { q: "How early should we book?", a: "We recommend booking at least 6-12 months in advance, especially for peak wedding seasons in Rajasthan." },
        { q: "Do you travel outside Rajasthan?", a: "Yes, we are destination wedding experts and travel across India and internationally. Travel and stay charges apply." },
        { q: "How long is delivery time?", a: "Photos are delivered within 4-6 weeks. Cinematic films take 8-10 weeks for perfection in editing." },
        { q: "Do you offer customized packages?", a: "Absolutely! We can tailor a package to suit your specific events and requirements." },
        { q: "Is advance payment required?", a: "Yes, a 25% retainer fee is required to secure your dates." }
    ];

    return (
        <div className="page-packages">
            {/* Hero Section */}
            <section className="packages-hero">
                <div className="packages-hero-overlay"></div>
                <div className="container packages-hero-content">
                    <h1 className="text-gold">Packages & Pricing</h1>
                    <p className="subtitle">Choose the perfect cinematic experience for your royal celebration</p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pricing-section section-padding">
                <div className="container">
                    <div className="pricing-grid">
                        {/* Basic Package */}
                        <div className="pricing-card">
                            <h3 className="package-title">Basic Wedding</h3>
                            <div className="price">₹25,000</div>
                            <ul className="features-list">
                                <li><FaCheck /> 1 Day Photography</li>
                                <li><FaCheck /> 1 Photographer</li>
                                <li><FaCheck /> 300 Edited Photos</li>
                                <li><FaCheck /> Online Gallery</li>
                                <li><FaCheck /> Basic Album</li>
                            </ul>
                            <Button to="/contact" variant="outline" className="w-full">Book Now</Button>
                        </div>

                        {/* Premium Package */}
                        <div className="pricing-card featured">
                            <div className="popular-tag">Most Popular</div>
                            <h3 className="package-title text-gold">Premium Wedding</h3>
                            <div className="price text-gold">₹45,000</div>
                            <ul className="features-list">
                                <li><FaCheck /> 2 Days Coverage</li>
                                <li><FaCheck /> 2 Photographers + 1 Cinematographer</li>
                                <li><FaCheck /> Drone Coverage</li>
                                <li><FaCheck /> 600 Edited Photos</li>
                                <li><FaCheck /> Cinematic Highlights</li>
                                <li><FaCheck /> Premium Album</li>
                            </ul>
                            <Button to="/contact" variant="primary" className="w-full">Book Premium</Button>
                        </div>

                        {/* Royal Package */}
                        <div className="pricing-card royal">
                            <h3 className="package-title">Royal Wedding</h3>
                            <div className="price">₹75,000</div>
                            <ul className="features-list">
                                <li><FaCheck /> Full Wedding Coverage</li>
                                <li><FaCheck /> Photo + Cinema Team</li>
                                <li><FaCheck /> 4K Video + Drone</li>
                                <li><FaCheck /> Pre-Wedding Shoot</li>
                                <li><FaCheck /> Luxury Canvera Album</li>
                                <li><FaCheck /> Full Cinematic Film</li>
                            </ul>
                            <Button to="/contact" variant="outline" className="w-full">Book Royal Package</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="comparison-section section-padding">
                <div className="container">
                    <h2 className="text-center text-gold mb-4">Compare Features</h2>
                    <div className="table-responsive">
                        <table className="compare-table">
                            <thead>
                                <tr>
                                    <th>Features</th>
                                    <th>Basic</th>
                                    <th>Premium</th>
                                    <th>Royal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="compare-row">
                                    <td>Photography</td>
                                    <td>1 Day</td>
                                    <td>2 Days</td>
                                    <td>All Events</td>
                                </tr>
                                <tr className="compare-row">
                                    <td>Videography</td>
                                    <td>—</td>
                                    <td>Cinematic</td>
                                    <td>4K Cinematic</td>
                                </tr>
                                <tr className="compare-row">
                                    <td>Drone</td>
                                    <td>—</td>
                                    <td><FaCheck className="text-gold" /></td>
                                    <td><FaCheck className="text-gold" /></td>
                                </tr>
                                <tr className="compare-row">
                                    <td>Album</td>
                                    <td>Basic</td>
                                    <td>Premium</td>
                                    <td>Luxury Box</td>
                                </tr>
                                <tr className="compare-row">
                                    <td>Pre-Wedding</td>
                                    <td>Add-on</td>
                                    <td>Add-on</td>
                                    <td>Included</td>
                                </tr>
                                <tr className="compare-row">
                                    <td>Delivery</td>
                                    <td>4 Weeks</td>
                                    <td>6 Weeks</td>
                                    <td>8 Weeks</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Custom CTA */}
            <section className="custom-package-section section-padding">
                <div className="container text-center">
                    <h2 className="text-gold">Need a Custom Wedding Package?</h2>
                    <p className="mb-4">Every wedding is unique. Tell us your details and we will create a personalized plan just for you.</p>
                    <div className="cta-buttons">
                        <a
                            href="https://wa.me/919468825097?text=Hi,%20I%20need%20a%20custom%20wedding%20package."
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp /> WhatsApp Now
                        </a>
                        <Button to="/contact" variant="outline">Contact Us</Button>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="trust-section section-padding">
                <div className="container">
                    <div className="badges-grid">
                        <div className="badge-item">
                            <FaCamera className="badge-icon" />
                            <h3>300+</h3>
                            <p>Weddings Covered</p>
                        </div>
                        <div className="badge-item">
                            <FaAward className="badge-icon" />
                            <h3>8+ Years</h3>
                            <p>Experience</p>
                        </div>
                        <div className="badge-item">
                            <FaGlobe className="badge-icon" />
                            <h3>Global</h3>
                            <p>Destination Experts</p>
                        </div>
                    </div>

                    <div className="mini-testimonials mt-5 text-center">
                        <p className="italic">"The best decision we made for our wedding!" - <span className="text-gold">Rahul & Priya</span></p>
                        <div className="stars text-gold"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section section-padding">
                <div className="container">
                    <h2 className="text-center text-gold mb-5">Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        {faqs.map((item, index) => (
                            <div className="faq-item" key={index}>
                                <h4 className="faq-q">{item.q}</h4>
                                <p className="faq-a">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Packages;
