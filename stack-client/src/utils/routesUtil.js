import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  path,
  component: Component,
  needSignin,
  componentProps,
}) => (
    <Route path={path} render={props =>
      needSignin === true ? (
        <Redirect to="/signin" />
      ) : (
          <Component {...props} {...componentProps} />
        )}
    />
  );
