import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './utils/routesUtil';
import Signin from './components/Signin';
import Channel from './components/Channel';
import Signup from './components/Signup';

const App = (props) => {
  const [token, setToken] = useState(window.localStorage.getItem('state-stack-token'))
  const [needSignin, setNeedSignin] = useState(!token)

  const updateToken = token => {
    window.localStorage.setItem('state-stack-token', token);
    setNeedSignin(false)
    setToken(token);
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/signin"
            render={() => <Signin updateToken={updateToken} />}
          />
          <Route
            path="/signup"
            render={() => <Signup updateToken={updateToken} />}
          />
          <PrivateRoute
            exact path="/"
            component={Channel}
            needSignin={needSignin}
          />
        </Switch>
      </BrowserRouter>
    </>
  )
}


export default App;