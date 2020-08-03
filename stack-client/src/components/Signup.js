import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { baseUrl } from '../config';

const Signup = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [token, setToken] = useState("")
  //TODO: ImageUrl on Signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseUrl}/auth/signup`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password, title }),
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
      <div>already have an account? <NavLink to="/signin">sign in here</NavLink> </div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)} />
        <input type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastname(e.target.value)} />
        <input type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
        <input type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <input type="text"
          placeholder="Title (Optional)"
          value={title}
          onChange={e => setTitle(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
    </main>
  );
}

export default Signup;