import React, { useState } from 'react';

const Mixer = ({ tracks, updateTrackName, removeTrack, addTrack }) => {
  const [renamingTrack, setRenamingTrack] = useState(null);
  const [newName, setNewName] = useState('');

  const handleRenameSubmit = (trackId) => {
    updateTrackName(trackId, newName);
    setRenamingTrack(null);
  };

  const addNewTrack = () => {
    addTrack()
  }
  return (
    <div className="mixer">
      <h3>Mixer</h3>
      {tracks.map((track) => (
        <div key={track.id} className="mixer-track">
          {renamingTrack === track.id ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={() => handleRenameSubmit(track.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleRenameSubmit(track.id);
                }
              }}
            />
          ) : (
            <label onDoubleClick={() => { setRenamingTrack(track.id); setNewName(track.name); }}>
              {track.name}
            </label>
          )}
          <input type="range" min="0" max="100" defaultValue="80" />
          <button onClick={() => removeTrack(track.id)}>Remove Track</button>
        </div>
        
      ))}
      <div className="controls">
          <button onClick={addNewTrack}>Add Track</button>
        </div>
    </div>
  );
};

export default Mixer;
