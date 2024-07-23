import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import projectsData from '../../data/projects-data.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import '../Projects/Projects.scss';

function Projects() {
  return (
    <HelmetProvider>
      <div className='projects-title-container'>
        <h1 className='menu-section-title'>PROJECTS</h1>
        <Helmet>
          <title>Projects | Oleksandr Pryvalov</title>
        </Helmet>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Projects;
