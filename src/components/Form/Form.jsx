import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import emailjs from 'emailjs-com';
import './Form.scss';

const Form = () => {
    const { language, translations } = useContext(LanguageContext);
    const t = translations[language].form;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [focusedInput, setFocusedInput] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFocus = (e) => {
        setFocusedInput(e.target.name);
    };

    const handleBlur = () => {
        setFocusedInput(null);
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
        <div className='contact-container'>
            <div className='contact-info'>
                <span className='contact-detail-title'>{t.contactInvitation}</span>
                <span className='contact-detail'>oleksandrpryv@gmail.com</span>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label className='input-label'>{t.name}</label>
                    <input 
                        className='input' 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder={focusedInput === 'name' ? '' : t.namePlaceholder} 
                        required 
                    />
                </div>
                <div className='input-container'>
                    <label className='input-label'>Email</label>
                    <input 
                        className='input' 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder={focusedInput === 'email' ? '' : t.emailPlaceholder} 
                        required 
                    />
                </div>
                <div className='input-container'>
                    <label className='input-label'>Message</label>
                    <textarea 
                        className='textarea' 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder={focusedInput === 'message' ? '' : t.messagePlaceholder} 
                        required
                    ></textarea>
                </div>
                <div className='button-container'>
                    <button type="submit">{t.send}</button>
                </div>
            </form>
        </div>
    );
};

export default Form;