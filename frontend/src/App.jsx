import './App.css';
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Playlist from './components/Playlist';
import Mixer from './components/Mixer';
import Toolbar from './components/ToolBar';

function App() {
  const [tracks, setTracks] = useState([
    { id: 1, name: 'Track 1' },
    { id: 2, name: 'Track 2' },
    { id: 3, name: 'Track 3' },
  ]);

  const [contextMenu, setContextMenu] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleRightClick = (e, track) => {
    e.preventDefault();
    setContextMenu({ x: e.pageX, y: e.pageY });
    setSelectedTrack(track);
  };

  const updateTrackName = (trackId, newName) => {
    setTracks((prevTracks) =>
      prevTracks.map((track) =>
        track.id === trackId ? { ...track, name: newName } : track
      )
    );
  };

  const addTrack = () => {
    const newTrackId = tracks.length > 0 ? tracks[tracks.length - 1].id + 1 : 1;
    setTracks([...tracks, { id: newTrackId, name: `Track ${newTrackId}` }]);
  };

  const removeTrack = (trackId) => {
    setTracks((prevTracks) => prevTracks.filter((track) => track.id !== trackId));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <Toolbar />
        <div className="workspace">
          <Playlist tracks={tracks} onContextMenu={handleRightClick} />
          <Mixer tracks={tracks} updateTrackName={updateTrackName} addTrack={addTrack} removeTrack={removeTrack} />
        </div>
        

        {/* Контекстное меню */}
        {contextMenu && (
          <ul
            className="context-menu"
            style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px`, color: 'gray', backgroundColor: '#2E2E2E' }}
          >
            <li
              onClick={() => {
                updateTrackName(selectedTrack.id, 'Renamed Track');
                setContextMenu(null);
              }}
            >
              Rename
            </li>
            <li
              onClick={() => {
                removeTrack(selectedTrack.id);
                setContextMenu(null);
              }}
            >
              Remove Track
            </li>
          </ul>
        )}
      </div>
    </DndProvider>
  );
}

export default App;
