import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <a href="/about">How it works</a>
                            <a href="/testimonials">Testimonials</a>
                            <a href="/careers">Careers</a>
                            <a href="/terms">Terms of Service</a>
                        </div>
                        <div className="footer-link-items">
                            <h2>Contact Us</h2>
                            <a href="/contact">Contact</a>
                            <a href="/support">Support</a>
                            <a href="/destinations">Destinations</a>
                            <a href="/sponsorships">Sponsorships</a>
                        </div>
                    </div>
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>Social Media</h2>
                            <a href="/">Instagram</a>
                            <a href="/">Facebook</a>
                            <a href="/">Youtube</a>
                            <a href="/">Twitter</a>
                        </div>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <a href="/" className="social-logo">
                                LBL <i className="fab fa-typo3" />
                            </a>
                        </div>
                        <small className="website-rights">LBL © 2025</small>
                        <div className="social-icons">
                            <a className="social-icon-link facebook" href="/" target="_blank" aria-label="Facebook">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="social-icon-link instagram" href="/" target="_blank" aria-label="Instagram">
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="social-icon-link twitter" href="/" target="_blank" aria-label="Twitter">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="social-icon-link linkedin" href="/" target="_blank" aria-label="LinkedIn">
                                <i className="fab fa-linkedin" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
