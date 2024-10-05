import React, { useState } from 'react';
import './MentorRequestForm.css';

const MentorRequestForm = ({ projectId, onSubmit }) => {
    const [requestDetails, setRequestDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (requestDetails.trim()) {
            onSubmit({ projectId, requestDetails });
            setRequestDetails('');
        } else {
            alert('Please provide details for your request.');
        }
    };

    return (
        <div className="mentor-request-form">
            <h1>Request Mentor Support</h1>
            <p>Need help with your project? Reach out to your mentor.</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="requestDetails">What do you need help with?</label>
                    <textarea
                        id="requestDetails"
                        value={requestDetails}
                        onChange={(e) => setRequestDetails(e.target.value)}
                        placeholder="Describe the issue or support needed"
                        rows="5"
                    />
                </div>

                <button type="submit" className="submit-btn">Submit Request</button>
            </form>
        </div>
    );
};

export default MentorRequestForm;
