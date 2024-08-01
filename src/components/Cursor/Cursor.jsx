// Cursor.js
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import '../Cursor/Cursor.scss'; 

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  const outerSpringConfig = { damping: 30, stiffness: 200 };
  const innerSpringConfig = { damping: 20, stiffness: 400 };

  const outerX = useSpring(0, outerSpringConfig);
  const outerY = useSpring(0, outerSpringConfig);
  const innerX = useSpring(0, innerSpringConfig);
  const innerY = useSpring(0, innerSpringConfig);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return;

    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
      outerX.set(ev.clientX - 20);
      outerY.set(ev.clientY - 20);
      innerX.set(ev.clientX - 3);
      innerY.set(ev.clientY - 3);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isLargeScreen, outerX, outerY, innerX, innerY]);

  if (!isLargeScreen) return null;

  return (
    <>
      <motion.div
        className="outer-cursor"
        style={{
          x: outerX,
          y: outerY,
        }}
      />
      <motion.div
        className="inner-cursor"
        style={{
          x: innerX,
          y: innerY,
        }}
      />
    </>
  );
};

export default Cursor;