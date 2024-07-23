// About //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../About/About.scss';

function About() {
    return (
        <HelmetProvider>
            <div className='about-container'>
                <h1 className='menu-section-title'>ABOUT</h1>
                <Helmet>
                    <title>ABOUT | Oleksandr Pryvalov</title>
                </Helmet>
            </div>
        </HelmetProvider>
    );
}

export default About;
