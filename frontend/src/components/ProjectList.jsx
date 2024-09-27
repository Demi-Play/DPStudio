import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrackList from './TrackList'; // Импортируем компонент TrackList

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/api/projects/');
      if (Array.isArray(response.data)) {
        setProjects(response.data);
      } else {
        console.error('Полученные данные не являются массивом:', response.data);
        setProjects([]); // Устанавливаем пустой массив, если данные некорректны
      }
    } catch (error) {
      console.error('Ошибка при загрузке проектов:', error);
    }
  };

  const createProject = async () => {
    try {
      await axios.post('/api/projects/', {
        name: projectName,
        description: projectDescription,
      });
      fetchProjects();
      setProjectName('');
      setProjectDescription('');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id} onClick={() => setSelectedProjectId(project.id)}>
            {project.name}
          </li>
        ))}
      </ul>
      <h2>Create New Project</h2>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={e => setProjectName(e.target.value)}
      />
      <textarea
        placeholder="Project Description"
        value={projectDescription}
        onChange={e => setProjectDescription(e.target.value)}
      />
      <button onClick={createProject}>Create Project</button>

      {selectedProjectId && <TrackList projectId={selectedProjectId} />} {/* Отображение треков выбранного проекта */}
    </div>
  );
};

export default ProjectList;
