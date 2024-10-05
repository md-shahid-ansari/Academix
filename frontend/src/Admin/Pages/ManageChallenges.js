import React, { useState } from 'react';
import './ManageChallenges.css';

const ManageChallenges = () => {
    // Example challenges data
    const [challenges, setChallenges] = useState([
        { title: 'Build a Chat Application', company: 'Tech Corp', status: 'Open' },
        { title: 'Develop an E-commerce Site', company: 'Retail Inc', status: 'Closed' },
        { title: 'Create a Mobile App', company: 'App Solutions', status: 'In Progress' },
    ]);

    return (
        <div className="manage-challenges">
            <h2>Manage Challenges</h2>
            {challenges.length > 0 ? (
                <table className="challenge-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Company</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {challenges.map((challenge, index) => (
                            <tr key={index}>
                                <td>{challenge.title}</td>
                                <td>{challenge.company}</td>
                                <td>{challenge.status}</td>
                                <td>
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No challenges available.</p>
            )}
        </div>
    );
};

export default ManageChallenges;
