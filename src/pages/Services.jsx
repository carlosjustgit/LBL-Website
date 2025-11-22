import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkedAlt, FaLayerGroup, FaRoute, FaCogs } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    const steps = [
        {
            icon: <FaSearch />,
            title: "AI & Innovation Strategy Session",
            desc: "Deep-dive into challenges, objectives, and AI readiness."
        },
        {
            icon: <FaMapMarkedAlt />,
            title: "Process Mapping",
            desc: "Understanding workflows and where AI creates impact."
        },
        {
            icon: <FaLayerGroup />,
            title: "Curated AI Stack",
            desc: "Presenting the best AI tools for your business needs."
        },
        {
            icon: <FaRoute />,
            title: "Adoption Roadmap",
            desc: "Providing a structured plan for implementation."
        },
        {
            icon: <FaCogs />,
            title: "Continuous Advisory",
            desc: "Ensuring AI delivers long-term business value."
        }
    ];

    return (
        <div className="services-container">
            <section className="services-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    AI Adoption as a Service
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    We provide Strategic Growth Advisory through a subscription-based model.
                    Gain access to a dedicated expert without the cost of a full-time hire.
                </motion.p>
            </section>

            <section className="process-section">
                <div className="timeline">
                    {steps.map((step, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-icon">{step.icon}</div>
                            <div className="timeline-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
