import React from 'react';
import Button from '../components/Button';
import './Contact.css'; // Reuse contact styles

const BookNow = () => {
    return (
        <div className="page-book-now section-padding">
            <div className="container">
                <h1 className="text-center text-gold">Book Your Date</h1>
                <p className="text-center text-muted" style={{ marginBottom: '3rem' }}>
                    Secure our team for your special day. Limited dates available for 2026.
                </p>

                <div className="contact-form-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="form-group">
                                <label style={{ color: '#fff', marginBottom: '5px', display: 'block' }}>First Name</label>
                                <input type="text" placeholder="First Name" required />
                            </div>
                            <div className="form-group">
                                <label style={{ color: '#fff', marginBottom: '5px', display: 'block' }}>Last Name</label>
                                <input type="text" placeholder="Last Name" required />
                            </div>
                        </div>

                        <div className="form-group-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="form-group">
                                <label style={{ color: '#fff', marginBottom: '5px', display: 'block' }}>Email</label>
                                <input type="email" placeholder="email@example.com" required />
                            </div>
                            <div className="form-group">
                                <label style={{ color: '#fff', marginBottom: '5px', display: 'block' }}>Phone</label>
                                <input type="tel" placeholder="+91 98765 43210" required />
                            </div>
                        </div>

                        <div className="form-group-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="form-group">
                                <label style={{ color: '#fff', marginBottom: '5px', display: 'block' }}>Event Type</label>
                                <select style={{ width: '100%', padding: '12px', background: 'var(--color-dark)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}>
                                    <option>Wedding</option>
                                    <option>Pre-Wedding</option>
                                    <option>Engagement</option>
                                    <option>Corporate Event</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label style={{ color: '#fff', marginBottom: '5px', display: 'block' }}>Event Date</label>
                                <input type="date" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label style={{ color: '#fff', marginBottom: '5px', display: 'block' }}>Venue / Location</label>
                            <input type="text" placeholder="City, Resort, or Palace Name" />
                        </div>

                        <div className="form-group">
                            <label style={{ color: '#fff', marginBottom: '5px', display: 'block' }}>Message / Special Requests</label>
                            <textarea rows="5" placeholder="Tell us about your story and vision..."></textarea>
                        </div>

                        <div className="text-center" style={{ marginTop: '1rem' }}>
                            <Button type="submit" variant="primary" className="btn-large" style={{ width: '100%' }}>Submit Inquiry</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNow;
