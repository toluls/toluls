import React from 'react';
import classes from './App.module.scss';
import Header from './Components/Layout/Header';
import Main from './Components/Layout/Main';
import Footer from './Components/Layout/Footer';

const App = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;