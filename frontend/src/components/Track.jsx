import React from 'react';

const Track = ({ track }) => {
  return (
    <div className="track">
      <h4>{track.name}</h4>
      {/* В дальнейшем здесь будут аудиоклипы */}
    </div>
  );
};

export default Track;
