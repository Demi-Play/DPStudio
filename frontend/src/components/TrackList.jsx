// TrackList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrackList = ({ projectId }) => {
    const [tracks, setTracks] = useState([]);
    const [trackName, setTrackName] = useState('');
    const [audioFile, setAudioFile] = useState(null);

    useEffect(() => {
        fetchTracks();
    }, [projectId]);

    const fetchTracks = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/api/projects/${projectId}/tracks/`);
            setTracks(response.data);
        } catch (error) {
            console.error('Error fetching tracks:', error);
        }
    };

    const createTrack = async () => {
        const formData = new FormData();
        formData.append('name', trackName);
        formData.append('audio_file', audioFile);
        formData.append('project', projectId); // Добавлено поле project

        try {
            await axios.post(`http://127.0.0.1:8000/api/api/projects/${projectId}/tracks/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fetchTracks();
            setTrackName('');
            setAudioFile(null);
        } catch (error) {
            console.error('Error creating track:', error);
        }
    };

    return (
        <div>
            <div>
                <h2>Track List</h2>
                {tracks.map(track => (
                    <div key={track.id}>
                        <p>{track.name}</p>
                        {/* Здесь можно добавить дополнительные элементы управления для трека */}
                    </div>
                ))}
            </div>
            <h2>Tracks</h2>
            <ul>
                {tracks.map(track => (
                    <li key={track.id}>{track.name}</li>
                ))}
            </ul>
            <h3>Add New Track</h3>
            <input
                type="text"
                placeholder="Track Name"
                value={trackName}
                onChange={e => setTrackName(e.target.value)}
            />
            <input
                type="file"
                onChange={e => setAudioFile(e.target.files[0])}
            />
            <button onClick={createTrack}>Add Track</button>
        </div>
    );
};

export default TrackList;
