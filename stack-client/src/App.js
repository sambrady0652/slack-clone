import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './utils/routesUtil';
import Signin from './components/Signin';
import Main from './components/Main';
import Signup from './components/Signup';
import { useDispatch } from 'react-redux'
import { setToken } from './store/authentication';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("STACK_TOKEN")
    if (token) {
      dispatch(setToken(token))
    }
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