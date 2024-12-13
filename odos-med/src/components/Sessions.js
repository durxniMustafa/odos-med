import React from 'react';

const Sessions = () => {
    const sessions = [
        { id: 1, title: 'Session 1', date: '2024-12-10' },
        // Add more sessions...
    ];

    return (
        <div className="sessions-container">
            <h1>Sessions</h1>
            <ul>
                {sessions.map(session => (
                    <li key={session.id}>
                        <h3>{session.title}</h3>
                        <p>Date: {session.date}</p>
                        <button>View Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sessions;
