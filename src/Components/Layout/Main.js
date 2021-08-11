import React, { useRef } from 'react';
import classes from './Main.module.scss';
import Welcome from '../Sections/Welcome';
import About from '../Sections/About';
import Projects from '../Sections/Projects';

const Main = () => {
  const aboutRef = useRef();
  const projectsRef = useRef();

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const handleProjectClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className={classes.main}>
      <Welcome onAboutClick={handleAboutClick} onProjectClick={handleProjectClick}/>
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
    </main>
  );
}

export default Main;