import React, { useContext } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import '../SlideOutMenu/SlideOutMenu.scss';

function SlideOutMenu({ isOpen, onClose }) {
    useTheme();
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
                    <Link to="/" className='menu-links' onClick={onClose}>{t.home}</Link>
                    <Link to="/projects" className='menu-links' onClick={onClose}>{t.projects}</Link>
                    <Link to="/contact" className='menu-links' onClick={onClose}>CONTACT</Link>
                    <div className='toggles-wrapper'>
                        <LanguageSwitcher onClick={onClose} />
                        <ThemeToggle onClick={onClose} />
                    </div>
                </nav>
            </div>
            {isOpen && <div className="overlay" onClick={onClose} aria-hidden="true"></div>}
        </>
    );
}

export default SlideOutMenu;