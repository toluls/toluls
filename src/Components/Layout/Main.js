import React, { useRef } from 'react';
import classes from './Main.module.scss';
import Welcome from '../Sections/Welcome';
import About from '../Sections/About';

const Main = () => {
  const aboutRef = useRef();

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className={classes.main}>
      <Welcome onClick={handleAboutClick} />
      <About ref={aboutRef} />
    </main>
  );
}

export default Main;