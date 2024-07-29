// Contact //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Form from '../../components/Form/Form';
import '../Contact/Contact.scss';

function Contact() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Contact | oleksandr pryvalov</title>
            </Helmet>
            <div className='contact-form-container'>
                <h1 className='menu-section-title'>Contact</h1>
                <Form />
            </div>
        </HelmetProvider>
    );
}

export default Contact;
