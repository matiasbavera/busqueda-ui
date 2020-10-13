import React from 'react';
import './App.css';
import { Busqueda } from './busqueda/Busqueda';
import Header from './Header';

function App() {
  return (
    <div className="App">
     
      <Header/>
      <Busqueda/>
    </div>
  );
}

export default App;
