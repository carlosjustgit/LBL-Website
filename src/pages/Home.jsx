import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBrain, FaChartLine, FaArrowRight, FaExclamationTriangle, FaLightbulb, FaHandshake, FaCheckCircle } from 'react-icons/fa';
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

            {/* The Reality Gap Section */}
            <section className="reality-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-subtitle">The Challenge</span>
                        <h2>The Reality Gap</h2>
                        <p>90% of firms invest in AI, yet only 6% capture meaningful value.</p>
                    </div>

                    <div className="stats-grid">
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>5,800</h3>
                            <p>AI Companies active in the UK</p>
                        </motion.div>
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3>500+</h3>
                            <p>Consulting Firms claiming expertise</p>
                        </motion.div>
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3>1000s</h3>
                            <p>Apps & Tools promising transformation</p>
                        </motion.div>
                    </div>

                    <div className="reality-message">
                        <FaExclamationTriangle className="warning-icon" />
                        <p><strong>Result:</strong> Confusion, noise, and FOMO dominate the landscape, making strategic decisions increasingly difficult.</p>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="approach-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-subtitle">Our Solution</span>
                        <h2>Partnership Mindset</h2>
                        <p>We’re in this transformation journey together with our clients—not as distant advisers.</p>
                    </div>

                    <div className="approach-grid">
                        <div className="approach-item">
                            <div className="approach-icon"><FaHandshake /></div>
                            <h3>Transparency & Trust</h3>
                            <p>Open communication and honest assessment of challenges and opportunities.</p>
                        </div>
                        <div className="approach-item">
                            <div className="approach-icon"><FaLightbulb /></div>
                            <h3>Balanced Perspective</h3>
                            <p>Both objectivity and subjectivity are required for successful transformation.</p>
                        </div>
                        <div className="approach-item">
                            <div className="approach-icon"><FaCheckCircle /></div>
                            <h3>Adoption Focus</h3>
                            <p>Positive mindset and demonstrable outcomes drive genuine adoption.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="case-studies-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-subtitle">Success Stories</span>
                        <h2>Real-World Impact</h2>
                    </div>

                    <div className="case-study-card">
                        <div className="case-study-content">
                            <h3>JBS International</h3>
                            <p className="case-study-role">Advanced Analytics & Reporting</p>
                            <p>From mapping processes with Figma Jam to seeing an AI agent analyse and report in real time. We applied advanced analytics for one of the world’s largest food producers.</p>
                            <div className="case-study-tags">
                                <span>Data Analysis</span>
                                <span>Real-time Reporting</span>
                                <span>Process Mapping</span>
                            </div>
                        </div>
                        <div className="case-study-visual jbs-visual">
                            {/* Placeholder for JBS visual */}
                            <div className="visual-placeholder">JBS Case Study</div>
                        </div>
                    </div>

                    <div className="case-study-card reverse">
                        <div className="case-study-content">
                            <h3>Witfy.social</h3>
                            <p className="case-study-role">AI-Powered Productivity Platform</p>
                            <p>Witfy helps businesses transform knowledge into tailored posts and images, boosting efficiency, saving time, and ensuring content truly reflects each brand’s voice.</p>
                            <div className="case-study-tags">
                                <span>Social Media</span>
                                <span>Content Generation</span>
                                <span>Brand Voice</span>
                            </div>
                        </div>
                        <div className="case-study-visual witfy-visual">
                            {/* Placeholder for Witfy visual */}
                            <div className="visual-placeholder">Witfy Platform</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="section-container">
                    <div className="about-content">
                        <h2>About LBL</h2>
                        <p>Founded in London, 2022, we are strategic growth advisers focused on Strategic AI Innovation (ROI). We support B2B companies ranging from SME to Enterprise across sectors like Financial Services, Manufacturing, and Professional Services.</p>
                        <Button variant="outline">Meet the Team</Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to lead your industry?</h2>
                    <p>Join our strategic AI clinic or have an informal chat over coffee about your AI journey.</p>
                    <Button variant="primary">Get in Touch</Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
