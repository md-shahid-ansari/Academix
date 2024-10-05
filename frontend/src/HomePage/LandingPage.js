import React from 'react';
import Navbar from './Components/Navbar'; // Adjust the path if necessary

import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <header className="landing-header">
                <h1>Welcome to Your Learning Portal</h1>
                <p>Your journey to knowledge starts here. Explore projects, challenges, and learning paths.</p>
                <a href="/login-page" className="get-started-btn">Get Started</a>
            </header>

            <section className="features">
                <h2>Features</h2>
                <div className="feature-list">
                    <div className="feature-item">
                        <h3>Projects</h3>
                        <p>Engage in real-world projects and collaborate with peers.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Challenges</h3>
                        <p>Test your skills with exciting challenges from various companies.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Learning Paths</h3>
                        <p>Follow guided learning paths to master new skills.</p>
                    </div>
                </div>
            </section>
            <footer className="landing-footer">
                <p>&copy; 2024 Your Learning Portal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
