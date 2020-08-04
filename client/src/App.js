import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import PrivateRoute from './utils/routesUtil';
import Signin from './components/Signin';
import Main from './components/Main';
import Signup from './components/Signup';
import Home from './components/Home';
import { loadToken } from './store/authentication';

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
            path="/signin"
            component={Signin}
          />
          <Route
            path="/signup"
            component={Signup}
          />
          <Route
            exact path="/:id"
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