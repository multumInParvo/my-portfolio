// Form.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Form.scss';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6krahor', 'template_0luic7k', e.target, '5Ys9iuvvGJuA0qfxT')
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to Send Message');
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='name-container'>
                    <label className='name-label'>Name</label>
                    <input className='name-input' type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className='email-container'>
                    <label className='email-label'>Email</label>
                    <input className='email-input' type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className='message-container'>
                    <label className='message-label'>Message</label>
                    <textarea className='message-textarea' name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className='button-container'>
                    <button type="submit">SEND</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
