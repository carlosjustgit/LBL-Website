import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBrain, FaChartLine, FaArrowRight } from 'react-icons/fa';
import Button from '../components/Button';
import './Home.css';

const Home = () => {
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
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-grid-overlay"></div>
                <div className="hero-glow"></div>

                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-badge" variants={itemVariants}>
                        LBL • Strategic Growth Advisors
                    </motion.div>

                    <motion.h1 variants={itemVariants}>
                        Empowering businesses to <br />
                        <span className="text-gradient">lead in the AI era</span>
                    </motion.h1>

                    <motion.p variants={itemVariants}>
                        The future is not an option, it's an obligation. We guide companies on their AI journey
                        with a structured, results-driven approach.
                    </motion.p>

                    <motion.div className="hero-btns" variants={itemVariants}>
                        <Button variant="primary">Start Your Journey</Button>
                        <Button variant="outline">Read Manifesto</Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Manifesto / Value Prop Section */}
            <section className="manifesto-section">
                <div className="section-header">
                    <h2>Making AI work for business</h2>
                    <p>We are not just consultants. We are partners in transformation.</p>
                </div>

                <div className="bento-grid">
                    <motion.div
                        className="bento-item large"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bento-content">
                            <div className="icon-wrapper"><FaRocket /></div>
                            <h3>Strategic AI Roadmaps</h3>
                            <p>Aligning AI initiatives with business goals to ensure every investment drives measurable impact.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bento-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="bento-content">
                            <div className="icon-wrapper"><FaBrain /></div>
                            <h3>Curated AI Solutions</h3>
                            <p>Removing the guesswork from tool selection with tested tech stacks.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bento-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bento-content">
                            <div className="icon-wrapper"><FaChartLine /></div>
                            <h3>Clear ROI Path</h3>
                            <p>Ensuring AI adoption is not just an experiment, but a competitive advantage.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
