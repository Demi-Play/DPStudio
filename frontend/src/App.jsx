// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Импортируйте новый компонент
import ProjectList from './components/ProjectList';
import TrackList from './components/TrackList';
import { AuthProvider } from './AuthContext';
import AudioEditor from './components/AudioEditor';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/projects" element={<ProjectList />} />
          <Route exact path="/projects/:id" element={<AudioEditor />} /> {/* Путь к редактору */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
