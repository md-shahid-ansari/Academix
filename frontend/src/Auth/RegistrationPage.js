import React, { useState } from "react";
import "./RegistrationPage.css" 

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "Student",
    skills: "",
    bio: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send formData to backend
    console.log(formData);
  };

  return (
    <div className="container">
      <h2>Create an Account</h2>
      <p>Join the platform to bridge the gap between academia and industry.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>I am a:</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="Student">Student</option>
            <option value="Mentor">Mentor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {formData.userType === "Student" && (
          <div className="form-group">
            <label>Skills</label>
            <input
              type="text"
              name="skills"
              placeholder="List your skills (comma-separated)"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
        )}

        {formData.userType === "Mentor" && (
          <div className="form-group">
            <label>Short Bio</label>
            <textarea
              name="bio"
              placeholder="Tell us about yourself"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-group">
          <label>Upload Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
