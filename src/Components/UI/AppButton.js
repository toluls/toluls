import React from "react";
import classes from "./AppButton.module.scss";

const AppButton = (props) => {
  return (
    <button className={`${classes.button} ${props.outline && classes.outline}`}>
      {props.text}
    </button>
  );
};

export default AppButton;
