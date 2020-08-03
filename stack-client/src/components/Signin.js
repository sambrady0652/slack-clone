import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { baseUrl } from '../config';
import Navbar from './Navbar';

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseUrl}/auth/signin`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const { token } = await response.json();
      props.updateToken(token);
      setToken(token);
    }
  }

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <main className="centered middled">
      <div>
        don't have an account? <NavLink to="/signup"> sign up here!</NavLink>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
        <input type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <button type="submit">sign in</button>
      </form>
    </main>
  );
}

export default Signin;