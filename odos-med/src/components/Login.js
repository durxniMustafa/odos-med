import React from 'react';
import '../styles/Login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div className="top-left-logo">
                <img src="/logo.png" alt="ODOS Logo" className="logo" />
            </div>
            <div className="login-box">
                <h1>Login to ODOS</h1>
                <p>Welcome back Doctor</p>
                <form>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Type your Klinikum-ID"
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Type your password"
                        required
                    />
                    <div className="forgot-password">
                        <button
                            className="link-button"
                            onClick={() => console.log("Forgot Password clicked!")}
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
