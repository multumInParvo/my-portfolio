import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  const outerSpringConfig = { damping: 30, stiffness: 150 };
  const innerSpringConfig = { damping: 20, stiffness: 300 };

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
      outerX.set(ev.clientX - 40);
      outerY.set(ev.clientY - 40);
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
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 80,
          height: 80,
          borderRadius: '50%',
          border: '1px solid #000',
          pointerEvents: 'none',
          zIndex: 9998,
          x: outerX,
          y: outerY,
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#000',
          pointerEvents: 'none',
          zIndex: 9999,
          x: innerX,
          y: innerY,
        }}
      />
    </>
  );
};

export default Cursor;