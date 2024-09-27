import React from 'react';
import BPMControl from './BPMControl';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button>File</button>
      <button>Edit</button>
      <button>Plugins</button>
      <button>Help</button>
      <BPMControl />
    </div>
  );
};

export default Toolbar;
