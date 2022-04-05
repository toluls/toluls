import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <p className={classes.headerText}>Tolulope<span className={classes.dot}>.</span><span className={classes.name}>Saliu</span></p>
    </header>
  );
}

export default Header;