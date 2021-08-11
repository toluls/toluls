import React from "react";
import classes from "./DisplayProject.module.scss";

const DisplayProject = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.content}>
        <div
          className={`${classes.imageContainer} ${
            props.right && classes.right
          }`}
        >
          <img src={props.image} alt={`${props.name} project`} />
        </div>
        <div className={classes.details}>
          {props.details}
          <p className={classes.stack}>
            <strong>Stack/Focus: </strong>
            <br />
            {props.stack}
          </p>
          <div className={classes.actions}>
            <a
              href={props.viewUrl}
              target="_blank"
              rel="noreferrer"
              className={classes.action}
            >
              View
            </a>
            <a
              href={props.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className={`${classes.action} ${classes.source}`}
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProject;
