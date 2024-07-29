import React, { createContext, useState } from 'react';
import en from '../translations/en.json';
import fr from '../translations/fr.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const translations = { en, fr };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};