import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

import Home from '../components/Home';

const PrivateRoute = () => {
  const { needSignIn } = useSelector(state => state.authentication)
  if (needSignIn) {
    return <Redirect to="/users/signin" />
  }
  return <Route exact path="/" component={Home} />
}

export default PrivateRoute;