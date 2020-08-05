import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

import Main from '../components/Main';

const ProtectedRoute = () => {
  const { needSignIn } = useSelector(state => state.authentication)

  //TODO:Check if user has JOINED channel

  if (needSignIn) {
    return <Redirect to="/users/signin" />
  }
  return <Route path="channels/:id" component={Main} />
}

export default ProtectedRoute;