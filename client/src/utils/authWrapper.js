import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import Spinner2 from '../components/partials/common/Spinner2';

// const locationHelper = locationHelperBuilder({});
export const userIsAuthenticated = connectedRouterRedirect({
	// The url to redirect user to if they fail
	// Mean redirect back to not auth component
	redirectPath: '/login',
	// This prevents us from adding the query parameter when we send the user away from the login page
	// allowRedirectBack: false,
	// If selector is true, wrapper will not redirect
	// For example let's check that state contains user data
	authenticatedSelector: state => state.auth.isAuthenticated !== false,
	authenticatingSelector: state => state.auth.authLoading === null,
	// Render this component when the authenticatingSelector returns true
	AuthenticatingComponent: Spinner2,
	// A nice display name for this check
	wrapperDisplayName: 'UserIsAuthenticated'
});

// export const userIsNotAuthenticated = connectedRouterRedirect({
// 	// This sends the user either to the query param route if we have one,
// 	// or to the landing page if none is specified and the user is already logged in
// 	// redirectPath: (state, ownProps) => ownProps.match.path || '/',
// 	redirectPath: (state, ownProps) => {
// 		if(locationHelper.getRedirectQueryParam(ownProps) !== undefined) {
// 			console.log(locationHelper.getRedirectQueryParam(ownProps))
// 			return locationHelper.getRedirectQueryParam(ownProps) || '/'
// 		} else {
// 			console.log(ownProps.location.pathname);
// 			return ownProps.location.pathname
// 		}
// 	},
// 	// This prevents us from adding the query parameter when we send the user away from the login page
// 	allowRedirectBack: true,
// 	 // If selector is true, wrapper will not redirect
// 	 // So if there is no user data, then we show the page
// 	authenticatedSelector: state => state.auth.user !== null,
// 	// A nice display name for this check
// 	wrapperDisplayName: 'UserIsNotAuthenticated'
// });
