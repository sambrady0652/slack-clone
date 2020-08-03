import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Main from '../components/Main';

const PrivateRoute = () => {
  const token = localStorage.getItem("STACK_TOKEN")

  if (!token) {
    return <Redirect to="/signin" />
  }
  return <Route path="/" component={Main} />
}

export default PrivateRoute;