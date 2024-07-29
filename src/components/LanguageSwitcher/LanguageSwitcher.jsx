import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './LanguageSwitcher.scss';

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button className="language-switcher" onClick={toggleLanguage}>
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}

export default LanguageSwitcher;