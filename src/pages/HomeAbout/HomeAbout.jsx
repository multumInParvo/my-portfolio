// HomeAbout //
import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../HomeAbout/HomeAbout.scss';
import Introduction from '../../components/Introduction/Introduction';

function HomeAbout() {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language].homeAbout;

  return (
    <HelmetProvider>
      <Helmet>
        <title>Home & About | Oleksandr Pryvalov</title>
      </Helmet>
      <section className='home-about-container'>
        <h1 className='menu-section-title'>{t.title}</h1>
        <div className='introduction-wrapper'>
        <Introduction />
        </div>
      </section>
    </HelmetProvider>
  );
}

export default HomeAbout;