import React from 'react';
import { Link } from 'react-router-dom';
import '../SlideOutMenu/SlideOutMenu.scss';

function SlideOutMenu({ isOpen, onClose }) {
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
                    <Link to="/projects" className='menu-links' onClick={onClose}>PROJECTS</Link>
                    <Link to="/contact" className='menu-links' onClick={onClose}>CONTACT</Link>
                </nav>
            </div>
            {isOpen && <div className="overlay" onClick={onClose} aria-hidden="true"></div>}
        </>
    );
}

export default SlideOutMenu;