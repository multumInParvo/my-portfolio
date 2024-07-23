// Home //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../Home/Home.scss';
import Introduction from '../../components/Introduction/Introduction';

function Home() {
  return (
    <HelmetProvider>
      <div className='home-container'>
      <h1 className='menu-section-title'>i'm oleksandr pryvalov</h1>
        <Helmet>
          <title>Oleksandr Pryvalov</title>
        </Helmet>
        <Introduction />
      </div>
    </HelmetProvider>
  );
}

export default Home;