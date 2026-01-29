import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="layout">
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
