// RegistrationForm.jsx

import React, { useState } from 'react';
import './LoginForm.css'; // Make sure to create a corresponding CSS file
import logoBache from './logoBache.png';

const RegistrationForm = () => {
  const [accountName, setAccountName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAccountNameChange = (e) => {
    setAccountName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform registration logic or send data to a server
    console.log('Nombre de cuenta:', accountName);
    console.log('Contraseña:', password);
    console.log('Dirección:', address);
    console.log('Correo:', email);
    console.log('Número de teléfono:', phoneNumber);
  };

  return (
    <div className="regist-container">
      <img src={logoBache} alt="logoBache" className="logo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Nombre de cuenta:
          <input
            type="text"
            value={accountName}
            onChange={handleAccountNameChange}
            placeholder="Nombre de cuenta"
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Contraseña"
          />
        </label>
        <br />
        <label>
          Dirección:
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Dirección"
          />
        </label>
        <br />
        <label>
          Correo:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Correo"
          />
        </label>
        <br />
        <label>
          Número de teléfono:
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Número de teléfono"
          />
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>
      <div className="bottom-links">
        <a href="/login">Iniciar Sesión</a>
        <a href="/terms">Términos y Condiciones</a>
      </div>
    </div>
  );
};

export default RegistrationForm;
