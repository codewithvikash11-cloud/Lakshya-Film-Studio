import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, to, onClick, variant = 'primary', className = '', style, ...props }) => {
    const btnClass = `btn btn-${variant} ${className}`;

    if (to) {
        return (
            <Link to={to} {...props}>
                <motion.button
                    className={btnClass}
                    style={style}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    {children}
                </motion.button>
            </Link>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={btnClass}
            style={style}
            {...props}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.button>
    );
};

export default Button;
