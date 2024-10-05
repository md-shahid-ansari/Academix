import React from 'react';
import { Link } from 'react-router-dom';
import './MentorHome.css';

const MentorSidebar = () => {
    return (
        <div className="mentor-sidebar">
            <nav>
                <ul>
                    <li><Link to="mentor-dashboard">Dashboard</Link></li>
                    <li><Link to="projects">Project Details</Link></li>
                    <li><Link to="challenges">Challenges</Link></li>
                    <li><Link to="mentor-feedback">Feedback Section</Link></li>
                    <li><Link to="mentor-profile-settings">Profile Settings</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default MentorSidebar;
