import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import Button from './Button';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme Toggle Logic
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="LBL Logo" className="nav-logo-img" />
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item mobile-only">
                        <Button variant="primary" onClick={() => { closeMobileMenu(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Get Started</Button>
                    </li>
                </ul>

                <div className="nav-actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>
                    <div className="desktop-only">
                        <Button variant="primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get Started</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
