import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import '../SlideOutMenu/SlideOutMenu.scss';

function SlideOutMenu({ isOpen, onClose }) {
    const { language, translations } = useContext(LanguageContext);
    const t = translations[language].slideOutMenu;

    return (
        <>
            <div
                className={`slide-menu ${isOpen ? 'open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                <div className="background">
                    <div className="grid"></div>
                </div>
                <nav aria-label="Mobile Navigation">
                    <Link to="/" className='home-link' onClick={onClose} aria-label="Home">
                        <span className='asterisk-symbol' aria-hidden="true">✣</span>
                        <span className="visually-hidden">Home</span>
                    </Link>
                    <Link to="/projects" className='menu-links' onClick={onClose}>{t.projects}</Link>
                    <Link to="/contact" className='menu-links' onClick={onClose}>CONTACT</Link>
                    <LanguageSwitcher onClick={onClose}/>
                </nav>
            </div>
            {isOpen && <div className="overlay" onClick={onClose} aria-hidden="true"></div>}
        </>
    );
}

export default SlideOutMenu;