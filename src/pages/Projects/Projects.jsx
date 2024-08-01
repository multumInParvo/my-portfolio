import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import projectsData from '../../data/projects-data.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './Projects.scss';

function Projects() {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language].filter;
  const tp = translations[language].projects;

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
      <Helmet>
        <title>Projects | Oleksandr Pryvalov</title>
      </Helmet>
      <div className='projects'>
        <h1 className='menu-section-title'>{tp.title}</h1>
        <div className="filter-buttons">
          <button
            className={activeFilter === 'all' ? 'active' : ''}
            onClick={() => handleFilterClick('all')}
          >
            {t.all}
          </button>
          <button
            className={activeFilter === 'OpenClassrooms' ? 'active' : ''}
            onClick={() => handleFilterClick('OpenClassrooms')}
          >
            OpenClassrooms
          </button>
          <button
            className={activeFilter === 'tutorials' ? 'active' : ''}
            onClick={() => handleFilterClick('tutorials')}
          >
            {t.tutorials}
          </button>
          <button
            className={activeFilter === 'projects' ? 'active' : ''}
            onClick={() => handleFilterClick('projects')}
          >
            {t.projects}
          </button>
        </div>
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