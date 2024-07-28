import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import projectsData from '../../data/projects-data.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './Projects.scss';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.filter === activeFilter);

  return (
    <HelmetProvider>
      <div className='projects'>
        <h1 className='menu-section-title'>Projects</h1>
        <div className="filter-buttons">
          <button
            className={activeFilter === 'all' ? 'active' : ''}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button
            className={activeFilter === 'formation' ? 'active' : ''}
            onClick={() => handleFilterClick('formation')}
          >
            Formation
          </button>
          <button
            className={activeFilter === 'tutorials' ? 'active' : ''}
            onClick={() => handleFilterClick('tutorials')}
          >
            Tutorials
          </button>
          <button
            className={activeFilter === 'projects' ? 'active' : ''}
            onClick={() => handleFilterClick('projects')}
          >
            Projects
          </button>
        </div>
        <Helmet>
          <title>Projects | Oleksandr Pryvalov</title>
        </Helmet>
        <div className="projects-container">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1100: 2 }}>
            <Masonry gutter="20px">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onClick={openModal}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </HelmetProvider>
  );
}

export default Projects;