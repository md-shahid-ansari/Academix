import React, { useState, useEffect } from 'react';
import './ProjectDetails.css'; // Add styling here
import axios from 'axios';
import { IsStudentSessionLive } from '../utils/IsStudentSessionLive';
import { useNavigate } from 'react-router-dom';

const URL = process.env.REACT_APP_BACKEND_URL; // Replace with your actual backend URL

const ProjectDetails = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Start with loading true
    const [projects, setProjects] = useState([]); // State to hold projects
    const [githubLinks, setGithubLinks] = useState({}); // State to hold GitHub links

    // Fetch projects from API
    useEffect(() => {
        const fetchProjects = async () => {
            const { isAuthenticated } = await IsStudentSessionLive();

            if (!isAuthenticated) {
                setError('You are not authenticated. Please log in again.');
                navigate('/student-login');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.post(`${URL}/api/auth/fetch-projects`); // Adjust the endpoint
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setError('Failed to fetch projects. Please try again later.');
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchProjects();
    }, [navigate]);

    // Handle GitHub link submission
    const handleGithubSubmit = async (projectId) => {
        const githubLink = githubLinks[projectId] || ''; // Get the link from state
        if (!githubLink) {
            alert('Please enter a GitHub repository URL.');
            return;
        }
        try {
            await axios.post(`${URL}/api/auth/submit-github/${projectId}`, { githubRepoURL: githubLink });
            alert('GitHub repository link submitted successfully!');
        } catch (error) {
            console.error('Error submitting GitHub link:', error);
            alert('Failed to submit GitHub repository link. Please try again.');
        }
    };

    const handleGithubLinkChange = (projectId, link) => {
        setGithubLinks((prevLinks) => ({
            ...prevLinks,
            [projectId]: link, // Update link for specific project
        }));
    };

    // New function to handle task status change
    const handleTaskStatusChange = async (taskId, newStatus) => {
        try {
            // Assuming you have an API endpoint to update the task status
            await axios.post(`${URL}/api/auth/update-task-status`, { taskId, status: newStatus });
            setProjects((prevProjects) =>
                prevProjects.map((project) => ({
                    ...project,
                    tasks: project.tasks.map((task) =>
                        task.id === taskId ? { ...task, status: newStatus } : task
                    ),
                }))
            );
            alert('Task status updated successfully!');
        } catch (error) {
            console.error('Error updating task status:', error);
            alert('Failed to update task status. Please try again.');
        }
    };

    if (loading) {
        return <div>Loading projects...</div>; // Show loading state
    }

    if (error) {
        return <div className="error-message">{error}</div>; // Show error message
    }

    return (
        <div className="project-list">
            {projects.map((project) => (
                <div key={project._id} className="project-detail">
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
                            value={githubLinks[project._id] || ''} // Controlled input for GitHub link
                            onChange={(e) => handleGithubLinkChange(project._id, e.target.value)} // Update state
                        />
                        <button onClick={() => handleGithubSubmit(project._id)}>Submit GitHub Link</button>
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
