import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ProjectCard.scss';

const ProjectCard = ({ project, onClick }) => {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language].projectCard;

  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <LazyLoadImage
        src={project.picture}
        alt={project.title}
        effect="blur"
        className="project-image"
        width="100%"
        height="auto"
      />
      <div className="project-overlay">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{translations[language].projectDescriptions[project.description]}</p>
        <div className="project-technologies">
          {project.technologies && project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;