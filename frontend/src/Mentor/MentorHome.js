import React from 'react';
import MentorSidebar from './MentorSidebar';
import { Outlet } from 'react-router-dom';
import './MentorHome.css';

const MentorHome = () => {
    return (
        <div className="mentor-home">
            <MentorSidebar />
            <div className="mentor-main-content">
                <Outlet />
            </div>
        </div>
    );
};

export default MentorHome;
