// Introduction //
import React from 'react';
import '../Introduction/Introduction.scss';

function Introduction() {
    return (
        <div className="introduction-container">
            <h2 className='introduction-title'>I'm Oleksandr Pryvalov</h2>
            <div className='introduction-text'>
                <p className='introduction-paragraph'>
                    A front-end developer with an interest in coding and art, appreciating minimalism in both fields.
                    I'm looking for projects where I can apply what I've learned and continue to develop my skills.
                </p>
                <p className='introduction-paragraph'>
                    When I'm not coding, I enjoy creating oil paintings.
                    These two interests help me balance logic with creativity.
                </p>
                <p className='introduction-paragraph'>
                    I recently finished my training as a web integrator at OpenClassrooms, equipping me with the fundamentals in front-end development.
                    Take a look at my projects to see what I've worked on so far.
                </p>
            </div>
        </div>
    );
}

export default Introduction;