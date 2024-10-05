import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import './AdminHome.css';

const AdminHome = () => {
    return (
        <div className="admin-home">
            <AdminSidebar />
            <div className="admin-content">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminHome;
