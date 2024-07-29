// HomeAbout //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../HomeAbout/HomeAbout.scss';
import Introduction from '../../components/Introduction/Introduction';

function HomeAbout() {
  return (
    <HelmetProvider>
              <Helmet>
          <title>Home & About | Oleksandr Pryvalov</title>
        </Helmet>
      <section className='home-about-container'>
        <h1 className='menu-section-title'>Home/About</h1>
        <Introduction />
      </section>
    </HelmetProvider>
  );
}

export default HomeAbout;