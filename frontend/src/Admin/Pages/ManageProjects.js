import React, { useState, useEffect } from 'react';
import './ManageProjects.css';
import { IsCompanySessionLive } from '../utils/IsCompanySessionLive';
import { useNavigate } from 'react-router-dom';

const ManageProjects = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [companyData, setCompanyData] = useState([]);
    const [projects, setProjects] = useState([]); // To store projects
    const [editProjectId, setEditProjectId] = useState(null); // For editing a project
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [assignedStudents, setAssignedStudents] = useState([]);
    const [assignedMentor, setAssignedMentor] = useState('');
    const [githubRepoURL, setGithubRepoURL] = useState('');
    const [taskList, setTaskList] = useState([{ title: '', status: 'not started' }]); // Initial task

    useEffect(() => {
        let isMounted = true;
        const authenticate = async () => {
            const { isAuthenticated, companyData } = await IsCompanySessionLive();

            if (!isMounted) return;

            if (!isAuthenticated) {
                setError('You are not authenticated. Please log in again.');
                navigate('/company-login');
                setLoading(false);
                return;
            }
            setCompanyData(companyData);
            // Load existing projects (You might want to fetch this from your API)
            setProjects([]); // Replace with fetched data
            setLoading(false);
        }
        authenticate();
    }, [navigate]);

    const handleAddTask = () => {
        setTaskList([...taskList, { title: '', status: 'not started' }]);
    };

    const handleTaskChange = (index, field, value) => {
        const newTasks = [...taskList];
        newTasks[index][field] = value;
        setTaskList(newTasks);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit project data to the server here
        if (editProjectId) {
            // Update project logic
            const updatedProjects = projects.map(project => 
                project.id === editProjectId 
                ? { id: editProjectId, title: projectTitle, description: projectDescription, assignedStudents, assignedMentor, githubRepoURL, taskList }
                : project
            );
            setProjects(updatedProjects);
        } else {
            // Add new project logic
            const newProject = {
                id: projects.length + 1, // Or use a more appropriate ID generation logic
                title: projectTitle,
                description: projectDescription,
                assignedStudents,
                assignedMentor,
                githubRepoURL,
                taskList
            };
            setProjects([...projects, newProject]);
        }

        // Reset form
        setEditProjectId(null);
        setProjectTitle('');
        setProjectDescription('');
        setAssignedStudents([]);
        setAssignedMentor('');
        setGithubRepoURL('');
        setTaskList([{ title: '', status: 'not started' }]); // Reset tasks
    };

    const handleEdit = (project) => {
        setEditProjectId(project.id);
        setProjectTitle(project.title);
        setProjectDescription(project.description);
        setAssignedStudents(project.assignedStudents);
        setAssignedMentor(project.assignedMentor);
        setGithubRepoURL(project.githubRepoURL);
        setTaskList(project.taskList);
    };

    const handleDelete = (id) => {
        setProjects(projects.filter(project => project.id !== id));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="manage-projects">
            <h2>Manage Projects</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Project Title</label>
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Project Description</label>
                    <textarea
                        placeholder="Project Description"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Assigned Mentor ID</label>
                    <input
                        type="text"
                        placeholder="Assigned Mentor ID"
                        value={assignedMentor}
                        onChange={(e) => setAssignedMentor(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>GitHub Repo URL</label>
                    <input
                        type="text"
                        placeholder="GitHub Repo URL"
                        value={githubRepoURL}
                        onChange={(e) => setGithubRepoURL(e.target.value)}
                    />
                </div>
                <h3>Tasks</h3>
                {taskList.map((task, index) => (
                    <div key={index} className="task-group">
                        <div className="form-group">
                            <label>Task Title</label>
                            <input
                                type="text"
                                placeholder="Task Title"
                                value={task.title}
                                onChange={(e) => handleTaskChange(index, 'title', e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <select
                                value={task.status}
                                onChange={(e) => handleTaskChange(index, 'status', e.target.value)}
                            >
                                <option value="not started">Not Started</option>
                                <option value="in progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    </div>
                ))}
                <button type="button" onClick={handleAddTask}>Add Task</button>
                <button type="submit">{editProjectId ? 'Update Project' : 'Create Project'}</button>
            </form>

            {projects.length > 0 ? (
                <table className="challenge-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td>{project.title}</td>
                                <td>{project.description}</td>
                                <td>{project.taskList.length ? project.taskList.map(task => task.status).join(', ') : 'No tasks'}</td>
                                <td>
                                    <button className="edit-btn" onClick={() => handleEdit(project)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDelete(project.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No projects available.</p>
            )}
        </div>
    );
};

export default ManageProjects;
