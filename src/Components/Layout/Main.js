import React from 'react';
import classes from './Main.module.scss';
import Welcome from '../Sections/Welcome';
import About from '../Sections/About';

const Main = () => {
  return (
    <main className={classes.main}>
      <Welcome />
      <About />
    </main>
  );
}

export default Main;