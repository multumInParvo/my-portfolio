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

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); 
  };

  return (
    <HelmetProvider>
      <div className='projects'>
        <h1 className='menu-section-title'>Projects</h1>
        <Helmet>
          <title>Projects | Oleksandr Pryvalov</title>
        </Helmet>
        <div className="projects-container">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 1100: 2 }}>
            <Masonry gutter="20px">
              {projectsData.map((project, index) => (
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