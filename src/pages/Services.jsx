import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkedAlt, FaLayerGroup, FaRoute, FaCogs, FaRocket, FaCheckCircle } from 'react-icons/fa';
import Button from '../components/Button';
import './Services.css';

const Services = () => {
    const steps = [
        {
            id: 1,
            icon: <FaSearch />,
            title: "Discovery & Strategy",
            desc: "We begin by deep-diving into your business challenges, identifying high-impact opportunities where AI can drive immediate value."
        },
        {
            id: 2,
            icon: <FaMapMarkedAlt />,
            title: "Process Mapping",
            desc: "Our experts map your existing workflows to pinpoint inefficiencies and bottlenecks that are ripe for intelligent automation."
        },
        {
            id: 3,
            icon: <FaLayerGroup />,
            title: "Tool Selection",
            desc: "We navigate the complex AI landscape to select the perfect, pre-vetted tools that integrate seamlessly with your tech stack."
        },
        {
            id: 4,
            icon: <FaRoute />,
            title: "Roadmap Development",
            desc: "You receive a clear, phased implementation roadmap with defined KPIs and projected ROI for every initiative."
        },
        {
            id: 5,
            icon: <FaRocket />,
            title: "Implementation & Training",
            desc: "We don't just advise; we assist with implementation and provide comprehensive training to upskill your workforce."
        },
        {
            id: 6,
            icon: <FaCogs />,
            title: "Continuous Optimisation",
            desc: "AI evolves fast. We provide ongoing advisory to ensure your systems remain cutting-edge and continue to deliver value."
        }
    ];

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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="services-container">
            <div className="services-bg-pattern"></div>

            {/* Hero Section */}
            <section className="services-hero">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-badge" variants={itemVariants}>
                        Methodology
                    </motion.div>
                    <motion.h1 variants={itemVariants}>
                        The LBL <span className="text-gradient">Adoption Framework</span>
                    </motion.h1>
                    <motion.p variants={itemVariants}>
                        A structured, risk-mitigated approach to integrating Artificial Intelligence into your business operations.
                        We move beyond hype to deliver measurable operational efficiency.
                    </motion.p>
                </motion.div>
            </section>

            {/* Process Timeline */}
            <section className="process-section">
                <div className="timeline">
                    {steps.map((step, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="timeline-marker">
                                <div className="timeline-icon">{step.icon}</div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="timeline-content">
                                <span className="step-number">0{step.id}</span>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="cta-content">
                    <h2>Ready to transform your business?</h2>
                    <p>Book a consultation to discuss how our framework can be applied to your specific challenges.</p>
                    <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Start Your Journey
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Services;
