import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import SlideOutMenu from '../SlideOutMenu/SlideOutMenu';
import '../Header/Header.scss';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header>
            <nav aria-label="Main Navigation">
                <Link to="/" className='home-link' aria-label="Home">
                    <span className='asterisk-symbol' aria-hidden="true">✣</span>
                    <span className="visually-hidden">Home</span>
                </Link>
                <div className="menu">
                <LanguageSwitcher />
                    <Link to="/projects" className='menu-links'>PROJECTS</Link>
                    <Link to="/contact" className='menu-links'>CONTACT</Link>
                </div>
                <button
                    className={`menu-icon ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-expanded={menuOpen}
                    aria-label="Toggle menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </nav>
            <SlideOutMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </header>
    );
}

export default Header;