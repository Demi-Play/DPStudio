import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import TrackList from './TrackList'; // Импортируем компонент с дорожками
import Mixer from './Mixer'; // Импортируем компонент для микшера

const AudioEditor = () => {
  const { id } = useParams(); // Получаем ID проекта из URL
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(false); // Состояние для отслеживания ошибки

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/api/projects/${id}/tracks/`); // Загружаем треки по ID проекта
        setTracks(response.data);
      } catch (error) {
        console.error('Error fetching tracks:', error);
        setError(true); // Устанавливаем ошибку в состояние
      }
    };

    if (id) {
      fetchTracks(); // Запускаем запрос только если id существует
    } else {
      setError(true); // Устанавливаем ошибку, если id отсутствует
    }
  }, [id]); // Запускаем запрос при изменении ID проекта

  if (error) {
    return <Navigate to="/error" />; // Перенаправляем на страницу ошибки
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <TrackList tracks={tracks} /> {/* Передаем треки в компонент TrackList */}
      </div>
      <div style={{ flex: 1 }}>
        <Mixer tracks={tracks} /> {/* Передаем треки в компонент Mixer */}
      </div>
    </div>
  );
};

export default AudioEditor;
