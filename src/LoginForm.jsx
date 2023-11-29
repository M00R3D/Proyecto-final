// LoginForm.jsx

import React, { useState } from 'react';
import './LoginForm.css';
import logoBache from './logoBache.png';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación o enviar los datos a un servidor
    console.log('Usuario:', username, 'Contraseña:', password);
  };

  return (
    <div className="login-container">
      <img src={logoBache} alt="logoBache"className="logo"  />
    <form className="login-form" onSubmit={handleSubmit} >
      <label>
        Usuario:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Iniciar Sesión</button>
    </form>
    <div className="bottom-links">
        <a href="/login">Iniciar Sesión</a>
        <a href="/terms">Términos y Condiciones</a>
      </div>
    </div>
    
  );
};

export default LoginForm;
