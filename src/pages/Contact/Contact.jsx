// Contact //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Form from '../../components/Form/Form';
import '../Contact/Contact.scss';

function Contact() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>CONTACT | oleksandr pryvalov</title>
            </Helmet>
            <div className='contact-container'>
                <h1 className='contact-title'>CONTACT</h1>
                <div className='info-container'>
                    <div className='contact-info'>
                        <span className='contact-detail-title'>Ask me anything here or send an email directly to</span>
                        <span className='contact-detail'>oleksandrpryv@gmail.com</span>
                    </div>
                    <Form />
                </div>
            </div>
        </HelmetProvider>
    );
}

export default Contact;
