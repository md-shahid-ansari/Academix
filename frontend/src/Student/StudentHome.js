import React from 'react';
import StudentSidebar from './StudentSidebar';
import { Outlet, Link } from 'react-router-dom';
import './StudentHome.css';



const StudentHome = () => {
  return (
    <div className="student-home">
      <header className="student-home-header">
        <h1>Bridging Gap</h1>
        <div className="profile">
          <Link to="student-profile-settings" className="profile-link">Student Profile</Link>
        </div>
      </header>
      <div className="main-content">
        <StudentSidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentHome;