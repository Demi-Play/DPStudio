import React from 'react';
import Timeline from './Timeline';

const Playlist = ({ tracks, onContextMenu }) => {
  return (
    <div className="playlist">
      <h3>Playlist</h3>
      <div className="playlist-grid">
        <Timeline bpm={120} />
        {tracks.map((track) => (
          <div
            key={track.id}
            className="playlist-track"
            onContextMenu={(e) => onContextMenu(e, track)}
          >
            {/* Здесь может быть сетка или waveform, а названия убраны */}
            <div className="track-grid">Grid for {track.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
