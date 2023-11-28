// src/components/SplashScreen.js
import React from 'react';
import './SplashScreen.css';
import logoBache from './logoBache.png';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logoBache} className="App-logo" alt="logo" />
      <h1>Mi Aplicación React</h1>
      <p>Cargando...</p>
    </div>
  );
};

export default SplashScreen;
