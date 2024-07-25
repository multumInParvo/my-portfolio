import React, { useEffect, useState } from 'react';
import './ProjectModal.scss';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setTimeout(() => setIsAnimating(true), 50);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  if (!isRendered) return null;

  return (
    <div className={`modal-overlay ${isAnimating ? 'open' : ''}`} onClick={onClose}>
      <div className={`project-modal ${isAnimating ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>back to projects</button>
          {project && (
            <>
              <h2>{project.title}</h2>
              {project.picture && <img src={project.picture} alt={project.title} />}
              {project.description && <p>{project.description}</p>}
              {project.technologies && project.technologies.length > 0 && (
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
              <div className="project-links">
                <span>Website</span>
                {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer">{project.website}</a>}
                <span>GitHub</span>
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a>}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;