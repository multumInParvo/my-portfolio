import React, { useState, useRef, useEffect } from 'react';
import '../Header/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const slideMenuRef = useRef(null);
    const overlayRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (
            (overlayRef.current && !overlayRef.current.contains(event.target)) &&
            (!slideMenuRef.current || !slideMenuRef.current.contains(event.target))
        ) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav>
            <Link to="/" className='asterisk-symbol'>
            ✣
            </Link>
            <div className="menu">
                <Link to="/about" className='menu-links'>ABOUT</Link>
                <Link to="/projects" className='menu-links'>PROJECTS</Link>
                <Link to="/contact" className='menu-links'>CONTACT</Link>
            </div>
            <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`slide-menu ${menuOpen ? 'open' : ''}`} ref={slideMenuRef}>
                <Link to="/about" className='menu-links' onClick={toggleMenu}>ABOUT</Link>
                <Link to="/projects" className='menu-links' onClick={toggleMenu}>PROJECTS</Link>
                <Link to="/contact" className='menu-links' onClick={toggleMenu}>CONTACT</Link>
            </div>
            <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={toggleMenu} ></div>
        </nav>
    );
}

export default Header;
