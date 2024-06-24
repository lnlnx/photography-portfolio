import { navItems } from '@/data/navConfig';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="w-full">
        <div className="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
          <div className="mr-4 md:mr-8">
            <a href="/" className="text-2xl font-signika font-bold">Tingting Chen</a>
          </div>
          <div className="ml-auto flex items-center justify-start md:hidden">
            <button 
              className="tap-highlight-transparent text-black dark:text-white w-5 h-5 relative focus:outline-none" 
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
          <div className={`w-full md:w-auto md:flex-grow md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col duration-300 ease-out md:space-x-5 md:flex-row md:items-center md:ml-auto">
              {navItems.map((item, index) => (
                <li className="group transition duration-300" key={index}>
                  <a 
                    href={item.href} 
                    className={`font-signika text-2xl tap-highlight-transparent`}
                  >
                    {item.name}
                    <span className='hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white'></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;