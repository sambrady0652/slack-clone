import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Main from '../components/Main';
import { useSelector } from 'react-redux'


const PrivateRoute = () => {

  const { needSignIn } = useSelector(state => state.authentication)

  if (needSignIn) {
    return <Redirect to="/signin" />
  }

  return <Route exact path="/" component={Main} />
}

export default PrivateRoute;