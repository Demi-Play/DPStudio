import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/api/projects/');
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link to={`/projects/${Number(project.id)}`}>{project.name}</Link> {/* Переход к проекту */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
