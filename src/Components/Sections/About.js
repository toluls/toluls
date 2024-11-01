import React, { forwardRef } from "react";
import classes from "./About.module.scss";
import AppButton from "../UI/AppButton";

const About = forwardRef((props, ref) => {
  return (
    <div className={classes.container}>
      <div className={classes.heading} ref={ref}>
        <h1>About Me</h1>
      </div>
      <div className={classes.content}>
        <p>
          My name is Tolulope Saliu. I'm a passionate software engineer with focus on frontend development. I have <strong>about seven years</strong> experience in transforming ideas and designs into clean, elegant code and products using various technologies. For formal education, I have a Bachelor of Science in Psychology.
        </p>

        <p>
          I'm based in Lagos, Nigeria. However, location doesn't hinder my work as I have
          experience working remotely with individuals and teams in various
          countries.
        </p>

        <p>
        <strong>My current stack/focus:</strong> <br />HTML5, CSS3, JavaScript, TypeScript, SASS, React, Redux, NextJS, Gatsby, REST/GraphQL, Firebase, Serverless Architecture, GCP, AWS, SQL, GIT, Headless CMS, amongst others. I have also worked with NodeJS, Express, MongoDB, Webflow, WordPress, Bootstrap, JQuery and JQuery Mobile during the course of my career.
        </p>

        <AppButton text="Contact Me" className={classes.action} onClick={props.onContactClick} />
      </div>
    </div>
  );
});

export default About;
