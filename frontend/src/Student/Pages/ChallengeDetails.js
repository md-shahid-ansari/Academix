import React, { useState } from 'react';
import './ChallengeDetails.css'; // Add your custom styles

const ChallengeDetails = () => {
    const [githubLink, setGithubLink] = useState('');

    // Example challenges data (can be fetched from API in a real scenario)
    const [challenges] = useState([
        {
            id: 1,
            title: "AI Crop Yield Prediction",
            company: {
                name: "AgroTech Solutions",
                logo: "https://via.placeholder.com/100"
            },
            skillsRequired: ["Python", "Machine Learning", "Data Analysis"],
            description: "Develop an AI model to predict crop yields based on historical weather and soil data.",
            deadline: "2024-11-30"
        },
        {
            id: 2,
            title: "Weather Forecasting Model",
            company: {
                name: "ClimateCorp",
                logo: "https://via.placeholder.com/100"
            },
            skillsRequired: ["R", "Data Science", "Forecasting"],
            description: "Build a weather forecasting model using past data to predict rainfall and temperature.",
            deadline: "2024-12-15"
        },
        {
            id: 3,
            title: "Smart Irrigation System",
            company: {
                name: "IrrigateNow",
                logo: "https://via.placeholder.com/100"
            },
            skillsRequired: ["IoT", "C++", "Embedded Systems"],
            description: "Create an IoT-based irrigation system that optimizes water usage based on real-time soil moisture data.",
            deadline: "2024-12-01"
        }
    ]);

    const handleGithubSubmit = (challengeId) => {
        // Logic to handle GitHub URL submission for the specific challenge
        console.log(`GitHub Repo Submitted for Challenge ${challengeId}: `, githubLink);
    };

    return (
        <div className="challenge-details">
            <h1>Challenges</h1>
            {challenges.map(challenge => (
                <div key={challenge.id} className="challenge-detail">
                    <header className="challenge-header">
                        <h2>{challenge.title}</h2>
                        <div className="company-info">
                            <img src={challenge.company.logo} alt={`${challenge.company.name} logo`} />
                            <p>{challenge.company.name}</p>
                        </div>
                    </header>

                    <section className="skills-required">
                        <h3>Skills Required</h3>
                        <ul>
                            {challenge.skillsRequired.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="challenge-description">
                        <h3>Description</h3>
                        <p>{challenge.description}</p>
                    </section>

                    <section className="deadline">
                        <h3>Deadline</h3>
                        <p>{challenge.deadline}</p>
                    </section>

                    <section className="github-section">
                        <h3>Submit GitHub Repository URL</h3>
                        <input 
                            type="url" 
                            placeholder="Enter your GitHub repo link for this challenge" 
                            value={githubLink} 
                            onChange={(e) => setGithubLink(e.target.value)} 
                        />
                        <button onClick={() => handleGithubSubmit(challenge.id)}>
                            Submit GitHub Link
                        </button>
                    </section>
                </div>
            ))}
        </div>
    );
};

export default ChallengeDetails;
