import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticationService } from '../../services/authentication.service';
import Menu from '../../components/Menu/Menu';

export const AuthCheck = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = authenticationService.getCurrentUser();

      if (currentUser && currentUser.token) {
        // authorised so return component
        return (
          <>
            <Menu {...props} />
            <main className="main container-fluid">
              <Component {...props} />
            </main>
          </>
        );
      }
      // not logged in so redirect to login page with the return url
      return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
    }}
  />
);
