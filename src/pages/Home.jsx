import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaGem, FaArrowRight } from 'react-icons/fa';
import Button from '../components/Button';
import './Home.css';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg-glow"></div>
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span className="hero-subtitle" variants={itemVariants}>
                        Strategic Advisory & Leadership
                    </motion.span>
                    <motion.h1 variants={itemVariants}>
                        Empowering Growth Through <br />
                        <span className="text-gradient">Courageous Leadership</span>
                    </motion.h1>
                    <motion.p variants={itemVariants}>
                        We help business owners and management teams transform from fearful to courageous,
                        building assets that drive significant valuation and long-term legacy.
                    </motion.p>
                    <motion.div className="hero-btns" variants={itemVariants}>
                        <Button variant="primary">Start Your Journey</Button>
                        <Button variant="outline">Our Philosophy</Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section - Bento Grid */}
            <section className="features-section">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Unlock Your Potential</h2>
                    <p>Comprehensive solutions for every stage of business growth.</p>
                </motion.div>

                <div className="bento-grid">
                    <motion.div
                        className="bento-item large"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bento-content">
                            <div className="icon-wrapper"><FaChartLine /></div>
                            <h3>Strategic Advisory</h3>
                            <p>Expert guidance to navigate complex market landscapes and identify high-value opportunities for sustainable expansion.</p>
                            <a href="/services" className="learn-more">Learn more <FaArrowRight /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bento-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bento-content">
                            <div className="icon-wrapper"><FaUsers /></div>
                            <h3>Leadership Coaching</h3>
                            <p>Empower your team to lead with confidence and clarity.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bento-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bento-content">
                            <div className="icon-wrapper"><FaGem /></div>
                            <h3>Equity Value</h3>
                            <p>Build tangible assets that maximize your business valuation.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
