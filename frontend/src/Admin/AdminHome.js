import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import './AdminHome.css';

const AdminHome = () => {
    return (
        <div className="Admin-home">
            <header className="admin-home-header">
                <h1>ACADEMIX</h1>
                <div className="profile">
                    <Link to="admin-profile" className="profile-link">Admin Profile</Link>
                </div>
            </header>
             <div className="admin-main-content">
                <AdminSidebar />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
