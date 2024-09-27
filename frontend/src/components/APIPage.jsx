import React, { useState } from 'react';
import axios from 'axios';

const APIPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/api/register/', {
                username,
                password,
            });
            alert('Registration successful!');
        } catch (error) {
            alert('Registration failed: ' + error.response.data.error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/api/login/', {
                username,
                password,
            });
            alert('Login successful!');
        } catch (error) {
            alert('Login failed: ' + error.response.data.error);
        }
    };

    const handleCreateProject = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/api/projects/', {
                name: projectName,
                description: projectDescription,
            });
            alert('Project created successfully!');
        } catch (error) {
            alert('Project creation failed: ' + error.response.data.error);
        }
    };

    return (
        <div>
            <h1>API Page</h1>

            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>

            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>

            <h2>Create Project</h2>
            <form onSubmit={handleCreateProject}>
                <input
                    type="text"
                    placeholder="Project Name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Project Description"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    required
                />
                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};

export default APIPage;
