import React from 'react';
import { FaCamera, FaVideo, FaMapMarkedAlt, FaImages, FaPlane, FaHeart } from 'react-icons/fa';
import './Services.css';

const servicesList = [
    {
        icon: <FaCamera />,
        title: "Wedding Photography",
        description: "Capturing the essence of your big day with a blend of traditional and candid styles. Every emotion, every ritual, preserved forever."
    },
    {
        icon: <FaVideo />,
        title: "Wedding Cinematography",
        description: "High-definition cinematic films that tell your love story. We use top-tier equipment to create a movie-like experience."
    },
    {
        icon: <FaHeart />,
        title: "Pre-Wedding Shoots",
        description: "Romantic and creative shoots in exotic locations. Let's break the ice before the big day with some stunning couple portraits."
    },
    {
        icon: <FaPlane />,
        title: "Destination Weddings",
        description: "Specializing in royal weddings across Rajasthan (Jaipur, Udaipur, Jodhpur) and beyond. We travel where your love takes us."
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Drone Coverage",
        description: "Breathtaking aerial views of your venue and events. Add a grand perspective to your wedding film."
    },
    {
        icon: <FaImages />,
        title: "Album Designing",
        description: "Premium, handcrafted photo albums. We curate your memories into a physical legacy you can cherish for generations."
    }
];

const Services = () => {
    return (
        <div className="page-services section-padding">
            <div className="container">
                <h1 className="text-center text-gold">Our Exclusive Services</h1>
                <p className="text-center text-muted" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
                    We offer a comprehensive suite of photography and cinematography services tailored for your royal celebrations.
                </p>

                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon text-gold">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
