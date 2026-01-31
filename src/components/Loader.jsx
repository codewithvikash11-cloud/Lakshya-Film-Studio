import React from 'react';


const Loader = () => {
    // Simulating animation completion or wait
    // In a real app, you might wait for assets to load

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#0B0B0B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
        }}>
            <div style={{ width: 300, height: 300 }}>
                {/* Use a simple spinner if JSON is missing, but structure is here for Lottie */}
                <div className="simple-loader"></div>
            </div>
        </div>
    );
};

export default Loader;
