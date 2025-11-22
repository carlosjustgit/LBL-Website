import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page-container">
            <div className="contact-bg-pattern"></div>

            <section className="contact-hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="contact-hero-content"
                >
                    <h1>Get in Touch</h1>
                    <p>Ready to start your AI journey? We're here to help you navigate the future.</p>
                </motion.div>
            </section>

            <section className="contact-content-section">
                <div className="section-container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-details">
                            <div className="detail-card">
                                <FaEnvelope className="detail-icon" />
                                <h3>Email Us</h3>
                                <p>hello@lbl-consulting.com</p>
                            </div>
                            <div className="detail-card">
                                <FaMapMarkerAlt className="detail-icon" />
                                <h3>Visit Us</h3>
                                <p>London, United Kingdom</p>
                            </div>
                            <div className="detail-card">
                                <FaLinkedin className="detail-icon" />
                                <h3>Connect</h3>
                                <p>Follow us on LinkedIn</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <form className="main-contact-form">
                                <h3>Send us a message</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" placeholder="Jane" />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="jane@company.com" />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <select>
                                        <option>General Inquiry</option>
                                        <option>Strategy Consultation</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea rows="5" placeholder="How can we help you?"></textarea>
                                </div>
                                <Button variant="primary" style={{ width: '100%' }}>Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
