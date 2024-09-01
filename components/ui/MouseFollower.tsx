"use client"
import React, { useState, useEffect } from 'react';

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full bg-blue-500 mix-blend-difference"
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
};

export default MouseFollower;