import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', type = 'button' }) => {
    return (
        <motion.button
            className={`btn btn-${variant}`}
            onClick={onClick}
            type={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            {children}
        </motion.button>
    );
};

export default Button;
