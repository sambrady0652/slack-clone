import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import PrivateRoute from './utils/PrivateRoute';
import Signin from './components/Signin';
import Main from './components/Main';
import Signup from './components/Signup';
import Home from './components/Home';

const App = () => {

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