// Introduction //
import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import '../Introduction/Introduction.scss';

function Introduction() {
    const { language, translations } = useContext(LanguageContext);
    const t = translations[language].introduction;

    return (
        <div className="introduction-container">
            <div className="title-avatar-container">
                <h2 className='introduction-title'>{t.title}</h2>
                <div className='avatar-container'>
                    <img src="/images/avatar.jpeg" alt="Oleksandr Pryvalov" className="avatar" />
                </div>
            </div>
            <div className='introduction-text'>
                <p className='introduction-paragraph'>
                {t.paragraph1}
                </p>
                <p className='introduction-paragraph'>
                {t.paragraph2}
                </p>
                <p className='introduction-paragraph'>
                {t.paragraph3.split('{projects}')[0]}
                <Link to="/projects" className="projects-link">{t.projectsLink}</Link>
                {t.paragraph3.split('{projects}')[1].split('{CV}')[0]}
                <a href="/oleksandr_pryvalov_2024.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">CV</a>
                {t.paragraph3.split('{CV}')[1]}
                </p>
            </div>
        </div>
    );
}

export default Introduction;