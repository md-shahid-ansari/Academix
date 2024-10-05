import React, { useState } from 'react';
import './SubmissionPage.css';

const SubmissionPage = ({ projectOrChallengeId }) => {
    const [githubUrl, setGithubUrl] = useState('');
    const [documentationUrl, setDocumentationUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle submission
        console.log('GitHub Repo URL:', githubUrl);
        console.log('Documentation URL (optional):', documentationUrl);
    };

    return (
        <div className="submission-page">
            <h1>Submit Your Work</h1>
            <p>Submit your project or challenge solution by providing your GitHub repo link.</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="githubUrl">GitHub Repository URL</label>
                    <input
                        type="url"
                        id="githubUrl"
                        placeholder="Enter your GitHub repo link"
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="documentationUrl">Documentation URL (Optional)</label>
                    <input
                        type="url"
                        id="documentationUrl"
                        placeholder="Link to documentation (e.g., GitHub Pages)"
                        value={documentationUrl}
                        onChange={(e) => setDocumentationUrl(e.target.value)}
                    />
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default SubmissionPage;
