import React from 'react';

const Mixer = ({ tracks }) => {
    const handleVolumeChange = (e, track) => {
        const volume = e.target.value;
        track.audio.volume = volume / 100;
      };

  return (
    <div>
      <h2>Mixer</h2>
      {tracks.map(track => (
        <div key={track.id}>
          <label>{track.name}</label>
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e) => handleVolumeChange(track.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Mixer;
