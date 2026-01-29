import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const reviews = [
    { id: 1, name: 'Priya & Rahul', text: 'Lakshya Film Studio made our wedding look like a movie! The team was professional and the photos are stunning.', rating: 5 },
    { id: 2, name: 'Sohan Singh', text: 'Great experience with the team for our corporate event. High quality work and timely delivery.', rating: 5 },
    { id: 3, name: 'Anjali D.', text: 'Absolutely loved the pre-wedding shoot. They made us feel so comfortable and the pictures are magical.', rating: 5 },
];

const Testimonials = () => {
    return (
        <section className="testimonials section-padding">
            <div className="container">
                <h2 className="text-center">Client <span className="text-gold">Love</span></h2>
                <div className="testimonials-grid">
                    {reviews.map((review) => (
                        <div key={review.id} className="testimonial-card">
                            <div className="stars text-gold">
                                {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <h4 className="client-name">- {review.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
