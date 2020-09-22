import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import queryObject from 'query-object';

const PublicRoute = ({
	location,
  	component: Component,
  	auth: { isAuthenticated },
  	...rest
}) => {
	if(isAuthenticated) {
		const query = queryObject.parse(location.search);
		const queryKeys = Object.keys(query).find(key => key === 'redirect');
		if(queryKeys) {
			const path = query[queryKeys];
			return path ? <Redirect to={path} /> : <Redirect to="/" />
		}
	}
	return (
		<Route {...rest} render={props => <Component {...props} />} />
	)
}

const mapStateToProps = state => ({
  	auth: state.auth
});

export default connect(mapStateToProps)(PublicRoute)
