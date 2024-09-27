// HomePage.jsx

import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { login } = useAuth(); // Получите функцию для входа
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/api/login/', { username, password });
      login(response.data); // Вызовите функцию входа с данными пользователя
      // Перенаправление на страницу проектов
      window.location.href = '/projects'; // или используйте navigate из react-router-dom
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  useEffect(() => {
    if (user) {
      // Если пользователь авторизован, перенаправляем на страницу проектов
      navigate('/projects');
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Welcome to dp-studio</h1>
      <p>Please log in to access your projects.</p>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {/* Здесь можно добавить форму входа */}
    </div>
  );
};

export default HomePage;
