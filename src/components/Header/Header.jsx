import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlideOutMenu from '../SlideOutMenu/SlideOutMenu';
import '../Header/Header.scss';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            <Link to="/" className='asterisk-symbol'>✣</Link>
            <div className="menu">
                <Link to="/about" className='menu-links'>ABOUT</Link>
                <Link to="/projects" className='menu-links'>PROJECTS</Link>
                <Link to="/contact" className='menu-links'>CONTACT</Link>
            </div>
            <button
                className={`menu-icon ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
            <SlideOutMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </nav>
    );
}

export default Header;