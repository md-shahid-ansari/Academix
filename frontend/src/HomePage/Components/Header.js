import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
        <nav className="navbar">
            <div className="logo">Academix</div>
            <ul className="nav-links">
                <li className="search-container">
                <i className="fas fa-search search-icon"></i>
                <input type="text" className="search-input" placeholder="Search..." />
                </li>
                <li><Link to="/student-home">Student</Link></li>
                <li><Link to="/mentor-home">Mentor</Link></li>
                <li><Link to="/admin-home">Company</Link></li>
                <li><Link to="/login-page">Sign In</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
