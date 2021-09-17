import React, { forwardRef } from "react";
import classes from "./About.module.scss";
import AppButton from "../UI/AppButton";

const About = forwardRef((props, ref) => {
  return (
    <div className={classes.container}>
      <h1 ref={ref}>About Me</h1>
      <div className={classes.content}>
        <p>
          My name is Tolulope Saliu. I'm a passionate frontend developer with
          focus on React and JAMStack tech. I have <strong>over four years</strong> experience in transforming ideas and designs into clean, elegant code and products. For formal education, I have a Bachelor of Science in Psychology.
        </p>

        <p>
          I'm based in Lagos, Nigeria. However, location doesn't hinder my work as I have
          experience working remotely with individuals and teams in various
          countries.
        </p>

        <p>
        <strong>My current stack/focus:</strong> <br />JAMStack, HTML5, CSS3, JavaScript, TypeScript, SASS, React, Redux, NextJS, Gatsby, GraphQL, React Native, Firebase, amongst others. I have also worked with NodeJS, Express, MongoDB, WordPress, bootstrap, JQuery and JQuery Mobile during the course of my career.
        </p>

        <AppButton text="Contact Me" className={classes.action} onClick={props.onContactClick} />
      </div>
    </div>
  );
});

export default About;
