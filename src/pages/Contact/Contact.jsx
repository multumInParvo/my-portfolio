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
            <Form />
        </HelmetProvider>
    );
}

export default Contact;
