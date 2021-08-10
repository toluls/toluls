import React from "react";
import classes from "./About.module.scss";

const About = () => {
  return (
    <div className={classes.about}>
      <h1>About</h1>
      <p>
        My name is Tolulope Saliu. I'm a passionate frontend developer with
        focus on web and mobile development. I love coding and enjoy
        transforming ideas and designs into clean, elegant code. For formal
        education, I have a Bachelor of Science in Psychology.
      </p>

      <p>
        I am based in Lagos, Nigeria. Location doesn't hinder my work as I have
        experience working remotely with individuals and teams in various
        countries. Kindly send an email to <strong>hello@toluls.com</strong> if you want to
        reach me.
      </p>

      <p>
        My current stack: HTML5, CSS3, Javascript, SASS, React, Firebase. I have
        also worked with bootstrap and jquery in the past.
      </p>
    </div>
  );
};

export default About;
