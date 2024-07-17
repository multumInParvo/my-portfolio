import React, { useEffect, useRef } from 'react';
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

                <Link to="/about" className='menu-links' onClick={onClose}>ABOUT</Link>
                <Link to="/projects" className='menu-links' onClick={onClose}>PROJECTS</Link>
                <Link to="/contact" className='menu-links' onClick={onClose}>CONTACT</Link>
            </div>
            {isOpen && <div className="overlay" onClick={onClose}></div>}
        </>
    );
}

export default SlideOutMenu;