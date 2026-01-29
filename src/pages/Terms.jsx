import React from 'react';

const Terms = () => {
    return (
        <div className="page-terms section-padding">
            <div className="container" style={{ color: '#ccc' }}>
                <h1 className="text-gold" style={{ marginBottom: '2rem' }}>Terms & Conditions</h1>
                <p>Welcome to Lakshya Film Studio. These terms and conditions outline the rules and regulations for the use of our website and services.</p>

                <h3 className="text-white" style={{ marginTop: '2rem' }}>1. Booking & Payment</h3>
                <p>To secure a date, a non-refundable retainer fee is required. The remaining balance is due as per the agreed schedule.</p>

                <h3 className="text-white" style={{ marginTop: '2rem' }}>2. Cancellation Policy</h3>
                <p>Cancellations made within 30 days of the event may be subject to full payment. Details are specified in the contract.</p>

                <h3 className="text-white" style={{ marginTop: '2rem' }}>3. Image Usage</h3>
                <p>Lakshya Film Studio reserves the right to use images for promotional purposes unless otherwise agreed in writing.</p>
            </div>
        </div>
    );
};

export default Terms;
