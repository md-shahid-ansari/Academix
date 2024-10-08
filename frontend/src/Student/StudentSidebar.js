import React from 'react';
import { Link } from 'react-router-dom';
import './StudentHome.css';

const StudentSidebar = () => {
  return (
    <div className="student-sidebar">
      <nav>
        <ul>
          <li><Link to="student-dashboard">Dashboard</Link></li>
          <li><Link to="project-details">Project Details</Link></li>
          <li><Link to="challenge-details">Challenge Details</Link></li>
          <li><Link to="learning-path">Learning Path</Link></li>
        </ul>
      </nav>
      <div className="logout-btn"><button>Logout</button></div>
    </div>
  );
};

export default StudentSidebar;
