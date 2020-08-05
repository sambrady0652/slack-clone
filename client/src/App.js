import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'

// import PrivateRoute from './utils/PrivateRoute';
import Signin from './components/Signin';
import Main from './components/Main';
import Signup from './components/Signup';
import Home from './components/Home';
import { loadToken } from './store/authentication';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToken());
  }, [])


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            path="/channels/:id"
            component={Main}
          />
          <Route
            path="/users/signin"
            component={Signin}
          />
          <Route
            path="/users/signup"
            component={Signup}
          />
        </Switch>
      </BrowserRouter>
    </>
  )
}



export default App;