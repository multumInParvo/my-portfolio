import React from 'react';
import './ProjectCard.scss'; 

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.picture} alt={project.title} className="project-image" />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="project-links">
        <a href={project.website} target="_blank" rel="noopener noreferrer">Website</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;
