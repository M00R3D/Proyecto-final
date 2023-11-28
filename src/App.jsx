import React, { useState, useEffect } from 'react';
import logoBache from './logoBache.png';
import './App.css';
import Componente from './Componente.jsx';
import SplashScreen from './SplashScreen.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una carga asíncrona
    const fakeLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    };

    fakeLoading();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <header className="App-header">
          <img src={logoBache} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            adfjajklsfhlas
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Componente />
          <Componente />
          <Componente />
        </header>
      )}
    </div>
  );
}

export default App;
