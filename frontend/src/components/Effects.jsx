import React, { useState } from 'react';

const Effects = ({ track }) => {
  const [reverb, setReverb] = useState(0);
  const [delay, setDelay] = useState(0);

  return (
    <div>
      <h3>Effects for {track.name}</h3>
      <label>Reverb</label>
      <input
        type="range"
        min="0"
        max="100"
        value={reverb}
        onChange={(e) => setReverb(e.target.value)}
      />
      <label>Delay</label>
      <input
        type="range"
        min="0"
        max="100"
        value={delay}
        onChange={(e) => setDelay(e.target.value)}
      />
    </div>
  );
};

export default Effects;
