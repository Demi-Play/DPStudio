import React, { useState } from 'react';

const BPMControl = ({ setBPM }) => {
  const [bpm, updateBPM] = useState(120);

  const handleBPMChange = (e) => {
    const newBPM = parseInt(e.target.value);
    updateBPM(newBPM);
    setBPM(newBPM); // Вызываем функцию из пропсов для изменения BPM
  };

  return (
    <div className="bpm-control">
      <label>BPM: </label>
      <input
        type="number"
        value={bpm}
        min="40"
        max="300"
        onChange={handleBPMChange}
      />
    </div>
  );
};

export default BPMControl;
