import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PrivateRoute from './utils/routesUtil';
import Signin from './components/Signin';
import Main from './components/Main';
import Signup from './components/Signup';

const App = (props) => {

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
          <PrivateRoute
            exact path="/"
            component={Main}
          />
        </Switch>
      </BrowserRouter>
    </>
  )
}



export default App;