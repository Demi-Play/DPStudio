// // App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage'; // Импортируйте новый компонент
// import ProjectList from './components/ProjectList';
// import TrackList from './components/TrackList';
// import { AuthProvider } from './AuthContext';
// import AudioEditor from './components/AudioEditor';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<HomePage />} />
//           <Route exact path="/projects" element={<ProjectList />} />
//           <Route exact path="/projects/:id" element={<AudioEditor />} /> {/* Путь к редактору */}
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
import './App.css'
import React, {useState} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Playlist from './components/Playlist';
import Mixer from './components/Mixer';
import Toolbar from './components/ToolBar';

function App() {
  const [tracks, setTracks] = useState([
    { id: 1, name: 'Track 1', clips: [] },
    { id: 2, name: 'Track 2', clips: [] }
  ]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
      <Toolbar />
      <div className="workspace">
        <Playlist tracks={tracks} />
        <Mixer tracks={tracks} />
      </div>
    </div>
    </DndProvider>
  );
}

export default App;

