import React from 'react';

const Timeline = ({ bpm, zoom }) => {
  const totalBeats = 64; // Предполагаем 64 такта
  const secondsPerBeat = 60 / bpm; // Считаем секунды на один такт

  // Создаем метки тактов и секунд
  const timelineMarks = Array.from({ length: totalBeats }, (_, i) => {
    const timeInSeconds = (i + 1) * secondsPerBeat;
    return (
      <div key={i} className="timeline-mark" style={{ width: `${100 * zoom}px` }}>
        <div>{i % 2 === 0 ? `Beat ${i + 1}` : ''}</div>
        <div>{timeInSeconds.toFixed(1)}s</div>
      </div>
    );
  });

  return <div className="timeline">{timelineMarks}</div>;
};

export default Timeline;
