import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { signIn } from '../store/authentication';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { needSignIn } = useSelector(state => state.authentication)
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  }
  if (!needSignIn) {
    return <Redirect to="/channels/1" />
  }

  return (
    <main className="centered middled">
      <div>
        don't have an account? <NavLink to="/users/signup"> sign up here!</NavLink>
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