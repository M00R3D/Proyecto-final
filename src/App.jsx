import React, { useState, useEffect } from 'react';
import logoBache from './logoBache.png';
import './App.css';
import Componente from './Componente.jsx';
import SplashScreen from './SplashScreen.jsx';
import LoginForm from './LoginForm';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una carga asíncrona
    const fakeLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    fakeLoading();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <header className="App-header">
          <LoginForm />
        </header>
      )}
    </div>
  );
}

export default App;
