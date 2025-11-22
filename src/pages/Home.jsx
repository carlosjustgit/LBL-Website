import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Empowering Growth Through Courageous Leadership</h1>
                    <p>We help business owners and management teams achieve long-term, sustainable growth.</p>
                    <div className="hero-btns">
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-outline">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="feature-card">
                    <h2>Strategic Advisory</h2>
                    <p>Unlock your business potential with our expert guidance.</p>
                </div>
                <div className="feature-card">
                    <h2>Leadership Coaching</h2>
                    <p>Transform from fearful to courageous leaders.</p>
                </div>
                <div className="feature-card">
                    <h2>Equity Value</h2>
                    <p>Build assets that drive significant valuation.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
