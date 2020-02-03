import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
