import React, { forwardRef } from "react";
import classes from "./Projects.module.scss";
import DisplayProject from "../Layout/DisplayProject";
import grandCommerceImg from "../../assets/img/grand-commerce.jpg";
import portfolioImg from "../../assets/img/toluls.jpg";
import lockdownImg from "../../assets/img/lockdown-run.jpg";
import canineLandImg from "../../assets/img/canine-land.jpg";


const grandCommerceDetails = (
  <p>
    This is a fully responsive ecommerce webapp that allows users shop products
    online. State management was done with redux and I also built in a
    notification feature to give users feedback on their actions or if an error
    prevents the app from loading products from the server.
  </p>
);

const portfolioDetails = (
  <p>
    I built this portfolio with react to showcase my works. It is a single page
    app with smooth scrolling between sections when a button is clicked. I also
    added a few keyframe animations to add some 'welcoming effect' once a user
    lands on the page... and yes, it's this very website you are on!
  </p>
);

const lockdownDetails = (
  <p>
    This project consists of a single page app and an HTML5 runner game built in vanilla JavaScript. Both the app and game are coupled, sharing logic to give the user/player a nice, fun experience. Users can view their game details in the app and get bonus codes depending on how well they played the game. 
  </p>
);

const canineLandDetails = (
  <p>
    I built this simple blog while teaching a student the JAMStack and serverless architecture concepts. The canine land blog was built with Gatsby, using Contentful as the headless CMS and deployed to Netlify. It was a good avenue to explain the concepts (and beauty) of GraphQL and using web hooks to trigger production builds on content change.
  </p>
);

const Projects = forwardRef((_props, ref) => {
  return (
    <div className={classes.container}>
      <div className={classes.heading} ref={ref}>
        <h1>Projects</h1>
      </div>
      <div className={classes.content}>
        <DisplayProject
          name="Grand Fashion"
          viewUrl="https://grand.com.ng"
          sourceUrl="https://github.com/toluls/grand-ecommerce"
          stack="React, Redux, React Router, CSS Modules, SASS (SCSS), Firebase"
          details={grandCommerceDetails}
          image={grandCommerceImg}
        />

        <DisplayProject
          name="Tolulope's Portfolio"
          viewUrl="https://toluls.com"
          sourceUrl="https://github.com/toluls/toluls"
          stack="React, CSS Modules, SASS (SCSS)"
          details={portfolioDetails}
          image={portfolioImg}
          right
        />

        <DisplayProject
          name="Lockdown Run"
          viewUrl="https://game.toluls.com"
          sourceUrl="https://github.com/toluls/lockdown-run"
          stack="Vanilla JavaScript, HTML5, CSS3, SASS (SCSS)"
          details={lockdownDetails}
          image={lockdownImg}
        />

        <DisplayProject
          name="Canine Land"
          viewUrl="https://canine-land.toluls.com/"
          stack="React, Gatsby, GraphQL, Headless CMS, Contentful, CSS Modules"
          details={canineLandDetails}
          image={canineLandImg}
          right
        />
      </div>
    </div>
  );
});

export default Projects;
