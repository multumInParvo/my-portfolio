import React, { useEffect, useState, useContext } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';
import './ProjectModal.scss';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { theme } = useTheme();
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language].projectModal;

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

  const imageSrc = project && typeof project.picture === 'object'
    ? (theme === 'light' ? project.picture.light : project.picture.dark)
    : (project ? project.picture : null);

  return (
    <div className={`modal-overlay ${isAnimating ? 'open' : ''}`} onClick={onClose}>
      <div className={`project-modal ${isAnimating ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="background">
          <div className="grid"></div>
        </div>
        <div className="modal-content">
          <button className="close-button" onClick={onClose} aria-label="Close modal">
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          {project && (
            <>

              <h2 className='project-title'>{project.title}</h2>

              {imageSrc && <img className='project-image' src={imageSrc} alt={project.title} />}

              <div className='project-description-container'>
                <h3 className='project-description-title'>{t.about}</h3>
                {project.description && <p className='project-description'>{translations[language].projectDescriptions[project.description]}</p>}
              </div>

              <div className='project-technologies-container'>
                <h3 className='project-technologies-title'>Technologies</h3>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="project-links-container">
                {project.title !== "Sophie Bluel" && (
                  <>
                    <h3 className='project-link-title'>Website</h3>
                    {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer">{project.website}</a>}
                  </>
                )}
                <h3 className='project-link-title'>GitHub</h3>
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