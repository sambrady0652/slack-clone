import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

import Main from '../components/Main';

const PrivateRoute = () => {
  const { needSignIn } = useSelector(state => state.authentication)
  if (needSignIn) {
    return <Redirect to="/users/signin" />
  }
  return <Route exact path="/channels/1" component={Main} />
}

export default PrivateRoute;