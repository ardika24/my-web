import { useState, useEffect } from 'react';
import { FiActivity, FiMoon, FiSun } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  darkMode: boolean;
}

function MobileNav({ open, setOpen, darkMode }: MobileNavProps) {
  const [menuTextColor, setMenuTextColor] = useState('');

  useEffect(() => {
    setMenuTextColor(darkMode ? 'text-white' : 'text-black');
  }, [darkMode]);

  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white dark:bg-gray-900 transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
    >
      <div className='flex items-center justify-center filter drop-shadow-md bg-white dark:bg-gray-900 h-20'>
        {/* logo container */}
        <a className={`text-xl font-semibold ${menuTextColor}`}>Ardika</a>
      </div>
      <div className='flex flex-col ml-4'>
        <NavLink
          to='/'
          className={`text-xl font-medium my-4 ${menuTextColor}`}
          onClick={() => setOpen(!open)}
        >
          Home
        </NavLink>
        <NavLink
          to='/project'
          className={`text-xl font-medium my-4 ${menuTextColor}`}
          onClick={() => setOpen(!open)}
        >
          Project
        </NavLink>
        <NavLink
          to='/contact'
          className={`text-xl font-normal my-4 ${menuTextColor}`}
          onClick={() => setOpen(!open)}
        >
          Contact
        </NavLink>
      </div>
      
    </div>
  );
}

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [darkModeButton, setDarkModeButton] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/project', label: 'Project' },
    { to: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    setDarkModeButton(darkMode);
  }, [darkMode]);

  return (
    <nav
      className={`flex filter drop-shadow-md bg-whites px-4 py-4 h-20 items-center ${
        darkMode ? 'dark' : ''
      }`}
    >
      <MobileNav open={open} setOpen={setOpen} darkMode={darkMode} />

      <div className='w-3/12 flex items-center space-x-2 animate-bounce'>
        <span className='text-xl font-bold'>Ardika</span>
        <FiActivity className='h-6 w-6' />
      </div>

      <div className='w-9/12 flex justify-end items-center'>
        <div
          className='z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden'
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger Button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>
        <div className='hidden md:flex'>
          {navItems.map((navItem, i) => (
            <NavLink
              key={navItem.to}
              to={navItem.to}
              onClick={() => setActive(i)}
              className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
                i === active ? 'bg-gray-600 text-white' : ''
              }`}
            >
              {navItem.label}
            </NavLink>
          ))}
        </div>
        <div className='ml-4'>
          <button
            className={`w-8 h-8 rounded-full ${
              darkModeButton ? 'bg-gray-800' : 'bg-gray-200'
            } flex items-center justify-center`}
            onClick={() => {
              setDarkModeButton(!darkModeButton);
              toggleDarkMode();
            }}
          >
            {darkMode ? (
              <FiSun size={16} color={darkModeButton ? 'white' : 'black'} />
            ) : (
              <FiMoon size={16} color={darkModeButton ? 'white' : 'black'} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
