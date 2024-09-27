import React from 'react';
import Timeline from './Timeline';

const Playlist = ({ tracks, onContextMenu }) => {
  return (
    <div className="playlist">
      <h3>Playlist</h3>
      <div className="timeline">
        <Timeline bpm={120} />
      </div>
      <div className="playlist-grid">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className="playlist-track"
            onContextMenu={(e) => onContextMenu(e, track)}
            style={{ top: `${index * 40}px`, left: '0' }} // Измените на ваше усмотрение
          >
            <div className="track-grid">Grid for {track.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
