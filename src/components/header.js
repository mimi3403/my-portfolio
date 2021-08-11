import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { StyledHeader } from '../styles/styled-components';

import Burger from './burger';
import NavDrawer from './navDrawer';

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  console.log(isSmallScreen);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1065px)');

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  return (
    <StyledHeader>
      <h1>
        {/* <Link to='/'>Mingyu Hong</Link> */}
      </h1>

      {!isSmallScreen ? (
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Me!</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <NavDrawer open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </>
      )}
    </StyledHeader>
  );
};
export default Header;