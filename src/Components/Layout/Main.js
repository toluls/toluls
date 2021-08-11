import React, { useRef } from "react";
import classes from "./Main.module.scss";
import Welcome from "../Sections/Welcome";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";

const Main = () => {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const scrollToContent = (content) => {
    content.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = () => {
    scrollToContent(aboutRef);
  };

  const handleProjectClick = () => {
    scrollToContent(projectsRef);
  };

  const handleContactClick = () => {
    scrollToContent(contactRef);
  };

  return (
    <main className={classes.main}>
      <Welcome
        onAboutClick={handleAboutClick}
        onProjectClick={handleProjectClick}
      />
      <About ref={aboutRef} onContactClick={handleContactClick} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </main>
  );
};

export default Main;
