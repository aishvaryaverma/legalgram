import React from 'react';
import { Route, withRouter } from 'react-router-dom';
// utils
import { userIsAuthenticated } from '../../utils/authWrapper';

const AuthRoute = ({
  	component: Component,
  	...rest
}) => <Route {...rest} render={props => <Component {...props} />} />

export default (withRouter(userIsAuthenticated(AuthRoute)))
