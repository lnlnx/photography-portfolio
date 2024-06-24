import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="flex w-full overflow-hidden pt-10 pb-1">
      <Navbar />
    </header>
  );
}

export default Header;
