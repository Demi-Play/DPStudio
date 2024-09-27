import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import APIPage from './components/APIPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProjectList />} />
      </Routes>
    </Router>
  );
}

export default App;
