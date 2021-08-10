import React from 'react';
import tolulope from '../../assets/img/tolulope.jpg';
import classes from './Welcome.module.scss';
import AppButton from '../UI/AppButton';

const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={tolulope} alt="Tolulope Saliu" />
      </div>
      <div className={classes.textContainer}>
        <h1>Hello, <span className={classes.name}>I'm Tolulope</span></h1>
        <p>A creative and passionate front-end developer</p>
        <AppButton text="About Me" />
        <AppButton text="Projects" outline />
      </div>
    </div>
  );
}

export default Welcome;
