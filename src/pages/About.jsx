import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaLinkedin } from 'react-icons/fa';
import Button from '../components/Button';
import './About.css';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="about-container">
            <Helmet>
                <title>About Us | LBL Strategic Consultancy</title>
                <meta name="description" content="Bridging the gap between human ambition and AI potential. LBL is a London-based consultancy empowering courageous leadership." />
            </Helmet>
            <div className="about-bg-pattern"></div>

            {/* Hero Section */}
            <section className="about-hero">
                <motion.div
                    className="about-hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants}>
                        Bridging the gap between <br />
                        <span className="text-gradient">human ambition & AI potential</span>
                    </motion.h1>
                    <motion.p variants={itemVariants}>
                        We are a London-based strategic consultancy dedicated to empowering businesses
                        to navigate the AI revolution with confidence, clarity, and courage.
                    </motion.p>
                </motion.div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="section-container">
                    <div className="mission-grid">
                        <div className="mission-content">
                            <span className="section-subtitle">Our Mission</span>
                            <h2>Empowering Growth</h2>
                            <p>
                                At LBL, we believe that the future belongs to those who embrace change.
                                Artificial Intelligence is not just a tool; it is a catalyst for
                                unprecedented growth and efficiency.
                            </p>
                            <p>
                                However, the path to adoption is often clouded by hype and complexity.
                                Our mission is to clear the fog, providing the strategic framework
                                and hands-on guidance needed to turn potential into performance.
                            </p>
                        </div>
                        <div className="mission-quote">
                            <FaQuoteLeft className="quote-icon" />
                            <blockquote>
                                "The future is not an option, it's an obligation. We guide companies
                                on their AI journey with a structured, results-driven approach."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-subtitle">Our Core Values</span>
                        <h2>The LBL Standard</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Courageous Leadership</h3>
                            <p>We challenge the status quo and encourage our clients to make bold, informed decisions.</p>
                        </div>
                        <div className="value-card">
                            <h3>Radical Transparency</h3>
                            <p>We believe in honest, jargon-free advice. We tell you what you need to hear, not just what you want to hear.</p>
                        </div>
                        <div className="value-card">
                            <h3>Human-Centric AI</h3>
                            <p>Technology should elevate human potential, not replace it. We focus on augmentation and empowerment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="cta-content">
                    <h2>Join the vanguard of innovation</h2>
                    <p>Partner with a consultancy that understands the London market and the global AI landscape.</p>
                    <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Work With Us
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default About;
