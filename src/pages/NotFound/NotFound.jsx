// src/pages/NotFound/NotFound.js
import React from 'react';
import './NotFound.scss';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found">404 - Page Not Found</h1>
      <p className='not-found-text'>The page you are looking for does not exist.</p>
      <a className='back-to-home' href="/">Go back to Home</a>
    </div>
  );
}

export default NotFound;
