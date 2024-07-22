import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import projectsData from '../../data/projects-data.json';
import Masonry from 'react-masonry-css';
import '../Projects/Projects.scss';

function Projects() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Projects | Oleksandr Pryvalov</title>
      </Helmet>
      <h1 className="title-works">Projects</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.picture} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.website} target="_blank" rel="noopener noreferrer">Website</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </Masonry>
    </HelmetProvider>
  );
}

export default Projects;
