import React, { forwardRef } from "react";
import classes from "./Contact.module.scss";
import linkedinIcon from '../../assets/img/linkedin.png';
import githubIcon from '../../assets/img/github.png';

const Contact = forwardRef((_props, ref) => {
  return (
    <div className={classes.container}>
      <div className={classes.heading} ref={ref}>
        <h1>Contact Me</h1>
      </div>
      <div className={classes.content}>
        <p>
          Thanks for stopping by! You can reach me via any of the means below.
        </p>

        <p>
          <strong>Email</strong>
          <br />
          <a href="mailto:hello@toluls.com" target="_blank" rel="noreferrer">hello@toluls.com</a>
        </p>
        
        <p>
          <strong>Phone</strong>
          <br />
          <a href="tel:+2348022669841" target="_blank" rel="noreferrer">+2348022669841</a>
        </p>
        
        <div className={classes.icons}>
          <a href="https://linkedin.com/in/tolulopeSaliu" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="linkedinIcon icon"/>
          </a>
          
          <a href="https://github.com/toluls" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="githubIcon icon"/>
          </a>
        </div>
      </div>
    </div>
  );
});

export default Contact;
