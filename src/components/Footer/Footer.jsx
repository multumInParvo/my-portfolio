// Footer
import React from 'react';
import '../Footer/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className='footer'>
            <div className='social-links'>
                <a href="https://github.com/multumInParvo" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FontAwesomeIcon icon={faGithub} className="github-icon" />
                </a>
                <a href="https://www.linkedin.com/in/oleksandr-pryvalov-bb0599298" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
            </div>
        </div>
    );
}

export default Footer; 

