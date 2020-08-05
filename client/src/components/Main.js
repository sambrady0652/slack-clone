import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Channel from './Channel';

const Main = () => {
  //TODO: try and put this in a useEffect?
  const { needSignIn } = useSelector(state => state.authentication)
  if (needSignIn) {
    return <Redirect to="/users/signin" />
  }

  return (
    <>
      <Navbar />
      <Channel />
    </>
  )
}

export default Main;
