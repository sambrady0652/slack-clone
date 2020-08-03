import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { signOut, setToken } from '../store/authentication'
import { Redirect } from 'react-router-dom';

const SignoutButton = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("STACK_TOKEN");

  const handleClick = () => {
    dispatch(signOut());
  }

  return (
    <div id="logout-button-holder">
      <button onClick={handleClick}>sign out</button>
    </div>
  )
}

export default SignoutButton;