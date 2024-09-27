// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Playlist = ({ projectId }) => {
//   const [tracks, setTracks] = useState([]);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(null);

//   useEffect(() => {
//     fetchTracks();
//   }, [projectId]);

//   const fetchTracks = async () => {
//     try {
//       const response = await axios.get(`/api/projects/${projectId}/tracks/`);
//       setTracks(response.data);
//     } catch (error) {
//       console.error('Error fetching tracks:', error);
//     }
//   };

//   const playTrack = (index) => {
//     const audio = new Audio(tracks[index].audio_file);
//     audio.play();
//     setCurrentTrackIndex(index);
//     setIsPlaying(true);
//   };

//   return (
//     <div>
//       <h2>Playlist</h2>
//       <ul>
//         {tracks.map((track, index) => (
//           <li key={track.id}>
//             {track.name}
//             <button onClick={() => playTrack(index)}>Play</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Playlist;

import React, { useState, useEffect, useRef } from 'react';
import Timeline from './Timeline'; // Таймлайн с тактами и секундами
import Track from './Track';

const Playlist = ({tracks}) => {
  const [zoom, setZoom] = useState(1); // Изначальный масштаб
  const [scrollX, setScrollX] = useState(0); // Горизонтальный скролл
  const [scrollY, setScrollY] = useState(0); // Вертикальный скролл
  const playlistRef = useRef(null); // Для доступа к контейнеру плейлиста

  // Обработчик события прокрутки мыши
  const handleWheel = (e) => {
    if (e.altKey) {
      // Если зажат Alt, управляем зумом
      e.preventDefault(); // Предотвращаем стандартное поведение
      const zoomDirection = e.deltaY > 0 ? 0.9 : 1.1; // Уменьшаем/увеличиваем масштаб
      setZoom((prevZoom) => Math.max(0.5, prevZoom * zoomDirection)); // Минимальный зум — 0.5
    } else if (e.shiftKey) {
      // Если зажат Shift, горизонтальный скролл
      e.preventDefault();
      setScrollX((prevX) => prevX + e.deltaY); // Скролл по X
    } else {
      // Вертикальный скролл (по умолчанию)
      setScrollY((prevY) => prevY + e.deltaY);
    }
  };

  // Подключаем обработчик к контейнеру плейлиста
  useEffect(() => {
    const playlist = playlistRef.current;
    if (playlist) {
      playlist.addEventListener('wheel', handleWheel);
    }

    // Очищаем событие при размонтировании компонента
    return () => {
      if (playlist) {
        playlist.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className='playlist-container'>
      <div className="controls">
      </div>
      <div
        ref={playlistRef} // Привязываем контейнер плейлиста
        style={{
          transform: `translate(${-scrollX}px, ${-scrollY}px)`, // Скроллинг
          zoom: zoom, // Зумирование
        }}
      >
        <Timeline bpm={120} zoom={zoom} /> {/* Передаем zoom в таймлайн */}
        {/* Плейлист с дорожками */}
        {tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;



