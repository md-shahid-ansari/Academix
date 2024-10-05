import React, { useState } from 'react';
import './ProjectDetails.css'; // Add styling here

const ProjectDetails = () => {
    const [githubLink, setGithubLink] = useState('');

    // Array of projects
    const [projects] = useState([
        {
            title: 'AI Farming Solution',
            description: 'A project focused on developing an AI-based solution for predicting the best crops and seasons.',
            mentor: {
                name: 'Dr. Jane Doe',
                profilePicture: 'https://via.placeholder.com/150'
            },
            teamMembers: [
                { name: 'John Smith' },
                { name: 'Alice Johnson' },
                { name: 'Bob Williams' }
            ],
            tasks: [
                { id: 1, title: 'Research on Crop Patterns', dueDate: '2024-10-10', status: 'Not Started' },
                { id: 2, title: 'Develop Weather Prediction Model', dueDate: '2024-11-05', status: 'In Progress' },
                { id: 3, title: 'Integrate AI Model into Web App', dueDate: '2024-12-01', status: 'Not Started' }
            ]
        },
        {
            title: 'Smart Irrigation System',
            description: 'An IoT-based project for building an efficient irrigation system using real-time data.',
            mentor: {
                name: 'Dr. John Doe',
                profilePicture: 'https://via.placeholder.com/150'
            },
            teamMembers: [
                { name: 'Emily Davis' },
                { name: 'Michael Brown' },
                { name: 'Jessica Wilson' }
            ],
            tasks: [
                { id: 4, title: 'Research IoT Sensors', dueDate: '2024-10-15', status: 'Not Started' },
                { id: 5, title: 'Develop Sensor Network', dueDate: '2024-11-10', status: 'In Progress' },
                { id: 6, title: 'Integrate with Web App', dueDate: '2024-12-05', status: 'Not Started' }
            ]
        }
    ]);

    const handleGithubSubmit = (projectId) => {
        // Logic for submitting GitHub repo link
        console.log(`GitHub Repo Submitted for Project ${projectId}: `, githubLink);
    };

    const handleTaskStatusChange = (taskId, newStatus) => {
        // Logic to update the status of a task
        console.log(`Task ${taskId} status changed to ${newStatus}`);
    };

    return (
        <div className="project-list">
            {projects.map((project, projectIndex) => (
                <div key={projectIndex} className="project-detail">
                    <header className="project-header">
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                    </header>

                    <section className="mentor-info">
                        <h2>Assigned Mentor</h2>
                        <div className="mentor-details">
                            <img src={project.mentor.profilePicture} alt={`${project.mentor.name}'s profile`} />
                            <p>{project.mentor.name}</p>
                        </div>
                    </section>

                    <section className="github-section">
                        <h2>GitHub Repository URL</h2>
                        <input 
                            type="url" 
                            placeholder="Enter your GitHub repo link" 
                            value={githubLink} 
                            onChange={(e) => setGithubLink(e.target.value)} 
                        />
                        <button onClick={() => handleGithubSubmit(projectIndex)}>Submit GitHub Link</button>
                    </section>

                    <section className="team-members">
                        <h2>Team Members</h2>
                        <ul>
                            {project.teamMembers.map((member, index) => (
                                <li key={index}>
                                    {member.name}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="tasks">
                        <h2>Tasks</h2>
                        <ul>
                            {project.tasks.map((task) => (
                                <li key={task.id} className="task-item">
                                    <h3>{task.title}</h3>
                                    <p>Due Date: {task.dueDate}</p>
                                    <select 
                                        value={task.status} 
                                        onChange={(e) => handleTaskStatusChange(task.id, e.target.value)}>
                                        <option value="Not Started">Not Started</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="mentor-support">
                        <h2>Need Mentor Support?</h2>
                        <button className="request-help-btn">Request Help</button>
                    </section>
                </div>
            ))}
        </div>
    );
};

export default ProjectDetails;
