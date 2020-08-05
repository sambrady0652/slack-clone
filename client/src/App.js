import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import PrivateRoute from './utils/PrivateRoute';
import ProtectedRoute from './utils/ProtectedRoute';
import Signin from './components/Signin';
import Main from './components/Main';
import Signup from './components/Signup';
import Home from './components/Home';
import { loadToken } from './store/authentication';
import { Route53Domains } from 'aws-sdk';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToken());
  }, [])

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/users/signin"
            component={Signin}
          />
          <Route
            path="/users/signup"
            component={Signup}
          />
          <Route
            path="/channels/:id"
            component={Main}
          />
          <PrivateRoute
            exact path="/"
            component={Home}
          />
        </Switch>
      </BrowserRouter>
    </>
  )
}



export default App;