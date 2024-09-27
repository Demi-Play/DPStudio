import React from 'react';

const Track = ({ track, updateTrackName }) => {
  return (
    <div key={track.id} className="track" onChange={e => updateTrackName(track.id, e.target.value)}>
            {track.name}
        </div>
  );
};

export default Track;
