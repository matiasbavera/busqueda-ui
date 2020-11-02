import { makeStyles } from '@material-ui/core';
import React from 'react';
import './App.css';
import { Busqueda } from './busqueda/Busqueda';
import Header from './Header';

function App() {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Header/>
      <Busqueda/>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center',
  },
}));

export default App;
