import React from 'react'
import { useDispatch } from 'react-redux';

import { signOut } from '../store/authentication'

const SignoutButton = () => {
  const dispatch = useDispatch();

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