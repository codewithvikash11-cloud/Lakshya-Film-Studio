import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
        }, 500);
    };

    return (
        <div className="page-contact section-padding">
            <div className="container">
                <h1 className="text-center text-gold">Contact Us</h1>
                <p className="text-center text-muted">We would love to hear from you</p>

                <div className="contact-wrapper">
                    {/* Info Section */}
                    <div className="contact-info">
                        <h3 className="text-gold">Get in Touch</h3>
                        <div className="info-item">
                            <FaPhone className="text-gold" />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="info-item">
                            <FaEnvelope className="text-gold" />
                            <span>info@lakshyafilmstudio.com</span>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt className="text-gold" />
                            <span>123 Wedding Street, Studio Lane, City, State 123456</span>
                        </div>

                        <div className="map-embed">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1617169123456!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="contact-form-container">
                        {submitted ? (
                            <div className="success-message text-center">
                                <h3 className="text-gold">Thank You!</h3>
                                <p>Your message has been sent successfully. We will get back to you soon.</p>
                                <Button onClick={() => setSubmitted(false)} variant="outline" style={{ marginTop: '1rem' }}>Send Another</Button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Phone Number" required />
                                </div>
                                <div className="form-group">
                                    <textarea rows="5" placeholder="Your Message" required></textarea>
                                </div>
                                <Button type="submit" variant="primary" style={{ width: '100%' }}>Send Message</Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
