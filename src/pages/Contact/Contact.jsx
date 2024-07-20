// Contact //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Form from '../../components/Form/Form';
import '../Contact/Contact.scss';

function Contact() {
    return (
        <HelmetProvider>
            <div className='contact-form-container'>
            <Helmet>
                <title>CONTACT | oleksandr pryvalov</title>
            </Helmet>
            <Form />
            </div>
        </HelmetProvider>
    );
}

export default Contact;
