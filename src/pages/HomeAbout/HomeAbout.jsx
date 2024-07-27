// HomeAbout //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../HomeAbout/HomeAbout.scss';
import Introduction from '../../components/Introduction/Introduction';

function HomeAbout() {
  return (
    <HelmetProvider>
      <div className='home-about-container'>
        <h1 className='menu-section-title'>Home/About</h1>
        <Helmet>
          <title>Home & About | Oleksandr Pryvalov</title>
        </Helmet>
        <Introduction />
      </div>
    </HelmetProvider>
  );
}

export default HomeAbout;