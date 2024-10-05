import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';
import { Link } from 'react-router-dom';

// Custom hook to simulate fetching student dashboard data
const useFetchStudentDashboard = () => {
    const [data, setData] = useState({
        studentName: '',
        projects: [],
        learningPaths: [],
        challenges: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate an API call with a delay
                await new Promise((resolve) => setTimeout(resolve, 1000));
                
                // Mock student dashboard data
                const mockData = {
                    studentName: 'John Doe',
                    projects: [
                        { id: 1, name: 'AI Farming Solution', status: 'In Progress', tasksAssigned: 5 },
                        { id: 2, name: 'Weather Prediction Model', status: 'Completed', tasksAssigned: 3 },
                    ],
                    learningPaths: [
                        { name: 'Data Science Path', progress: 70, nextModule: 'Machine Learning Basics' },
                        { name: 'Web Development Path', progress: 40, nextModule: 'React Fundamentals' },
                    ],
                    challenges: [
                        { id: 1, title: 'Coding Challenge #1', deadline: '2024-10-15' },
                        { id: 2, title: 'Hackathon Participation', deadline: '2024-11-05' },
                    ],
                };
                setData(mockData);
            } catch (err) {
                setError('Failed to fetch student dashboard data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

const StudentDashboard = () => {
    const { data, loading, error } = useFetchStudentDashboard();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="student-dashboard">
            <header className="student-dashboard-header">
                <h1>Welcome {data.studentName}</h1>
                <p>Here are your ongoing projects, learning paths, and challenges.</p>
            </header>
            
            {/* Ongoing Projects */}
            <section className="ongoing-projects">
                <h2>Ongoing Projects</h2>
                {data.projects.length > 0 ? (
                    <ul>
                        {data.projects.map((project, index) => (
                            <li key={index} className="project-card">
                                <h3>
                                    <Link to={`/project/${project.id}`}>{project.name}</Link>
                                </h3>
                                <p>Status: {project.status}</p>
                                <p>Tasks Assigned: {project.tasksAssigned}</p>
                                <button className="submit-github-btn">Submit GitHub Link</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No ongoing projects available at the moment.</p>
                )}
            </section>

            {/* Learning Paths */}
            <section className="learning-paths">
                <h2>Learning Paths</h2>
                {data.learningPaths.length > 0 ? (
                    <ul>
                        {data.learningPaths.map((path, index) => (
                            <li key={index} className="path-card">
                                <h3>{path.name}</h3>
                                <div className="progress-container">
                                    <div className="progress-bar" style={{ width: `${path.progress}%` }}></div>
                                    <span>{path.progress}%</span>
                                </div>
                                <Link to={`/module/${path.nextModule}`}>Next Module: {path.nextModule}</Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No learning paths available at the moment.</p>
                )}
            </section>

            {/* Challenges */}
            <section className="challenges">
                <h2>Challenges</h2>
                {data.challenges.length > 0 ? (
                    <ul>
                        {data.challenges.map((challenge, index) => (
                            <li key={index} className="challenge-card">
                                <h3>
                                    <Link to={`/challenge/${challenge.id}`}>{challenge.title}</Link>
                                </h3>
                                <p>Deadline: {challenge.deadline}</p>
                                <button className="apply-btn">Apply</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No challenges available at the moment.</p>
                )}
            </section>
        </div>
    );
};

// Example Usage
const App = () => {
    return (
        <div className="app">
            <StudentDashboard />
        </div>
    );
};

export default App;
