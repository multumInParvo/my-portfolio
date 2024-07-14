// Home //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../Home/Home.scss';
import Introduction from '../../components/Introduction/Introduction';

function Home() {
  return (
    <HelmetProvider>
      <div className='home'>
        <Helmet>
          <title>Oleksandr Pryvalov</title>
        </Helmet>
        <Introduction />
      </div>
    </HelmetProvider>
  );
}

export default Home;