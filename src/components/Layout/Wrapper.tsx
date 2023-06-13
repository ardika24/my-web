import React, { ReactNode, useState, useEffect } from 'react';
import Navbar from './Navbar';

interface LayoutWrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`wrapper ${darkMode ? 'dark' : ''}`}
      style={{ minHeight: `${windowHeight}px` }}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`w-full content ${darkMode ? 'dark' : 'light'} mx-auto`}>
        <div className='max-w-80% md:max-w-80% lg:max-w-90% xl:max-w-1065px px-15 md:px-0 mx-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
