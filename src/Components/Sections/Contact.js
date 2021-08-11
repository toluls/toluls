import React, { forwardRef } from "react";
import classes from "./Contact.module.scss";

const Contact = forwardRef((_props, ref) => {
  return (
    <div className={classes.container}>
      <h1 ref={ref}>Contact Me</h1>
      <div className={classes.content}>
        <p>
          Thanks for stopping by! You can reach me via any of the means below.
        </p>

        <p>
          <strong>Email</strong>
          <br />
          hello@toluls.com
        </p>
        
        <p>
          <strong>Phone</strong>
          <br />
          +2348022669841
        </p>

        <div className={classes.icons}>
          <span>GH</span>
          <span>LI</span>
        </div>
      </div>
    </div>
  );
});

export default Contact;
