import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/Login.css';

const Login = () => {
    const [klinikumId, setKlinikumId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleKlinikumIdChange = (e) => {
        const value = e.target.value;
        // Allow only numeric values
        if (/^\d*$/.test(value)) {
            setKlinikumId(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form refresh

        // Basic validation (you can expand this with API calls)
        if (klinikumId && password) {
            console.log('Login successful! Redirecting...');
            navigate('/patients'); // Redirect to Patients page
        } else {
            alert('Please fill in both Klinikum-ID and password!');
        }
    };

    return (
        <div className="login-page">
            <div className="top-left-logo">
                <img src="/logo.png" alt="ODOS Logo" className="logo" />
            </div>
            <div className="login-box">
                <h1>Login to ODOS</h1>
                <p>Welcome back Doctor</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="klinikumId">Klinikum-ID</label>
                    <input
                        id="klinikumId"
                        type="text"
                        placeholder="Type your Klinikum-ID"
                        value={klinikumId}
                        onChange={handleKlinikumIdChange}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Type your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="forgot-password">
                        <button
                            type="button"
                            className="link-button"
                            onClick={() => console.log('Forgot Password clicked!')}
                        >
                            Forgot Password?
                        </button>
                    </div>
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
