import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Projects.scss';

function Projects() {
  const [paintings, setPaintings] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/paintings.json`)
      .then((response) => response.json())
      .then((data) => setPaintings(data))
      .catch((error) => console.error('Error fetching paintings:', error));
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Projects | Oleksandr Pryvalov</title>
      </Helmet>
      <h1 className='title-works'>Projects</h1>
      <div className="gallery-container">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
        >
          <Masonry gutter="5px">
            {paintings.map((painting, index) => (
              <div key={index} className="image-container">
                <Link
                  to={`/gallery/${index}`}
                  state={{ from: location.pathname }}
                >
                  <LazyLoadImage
                    className='individual-painting'
                    src={painting.picture}
                    alt={painting.description}
                    effect="blur"
                  />
                </Link>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </HelmetProvider>
  );
}

export default Projects;
