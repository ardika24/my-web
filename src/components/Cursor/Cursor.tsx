import React, { useEffect, useState } from 'react';
import './Cursor.css';

interface Position {
  x: number;
  y: number;
}

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const setMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', setMousePosition);

    return () => {
      window.removeEventListener('mousemove', setMousePosition);
    };
  }, []);

  return (
    <div
      className='custom-cursor'
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
