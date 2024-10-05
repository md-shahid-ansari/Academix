import React from 'react';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="bubble-background">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
      </div>
      
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <form className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button">Login</button>
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;