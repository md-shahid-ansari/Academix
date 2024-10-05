import React from 'react';
import './LeaderboardPage.css';

const LeaderboardPage = ({ leaderboardData }) => {
    return (
        <div className="leaderboard-page">
            <h1>Leaderboard</h1>
            <p>See the top performers across challenges and learning paths.</p>

            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Student Name</th>
                        <th>Points</th>
                        <th>Challenges Completed</th>
                        <th>Badges Earned</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((student, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td> {/* Ranks the students */}
                            <td>{student.name}</td>
                            <td>{student.points}</td>
                            <td>{student.challengesCompleted}</td>
                            <td>{student.badgesEarned}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderboardPage;
