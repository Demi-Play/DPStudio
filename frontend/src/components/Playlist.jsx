import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Playlist = ({ projectId }) => {
  const [tracks, setTracks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);

  useEffect(() => {
    fetchTracks();
  }, [projectId]);

  const fetchTracks = async () => {
    try {
      const response = await axios.get(`/api/projects/${projectId}/tracks/`);
      setTracks(response.data);
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  };

  const playTrack = (index) => {
    const audio = new Audio(tracks[index].audio_file);
    audio.play();
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={track.id}>
            {track.name}
            <button onClick={() => playTrack(index)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
