import React from 'react';
// router
import { Switch, Route } from 'react-router-dom';
// hoc
import AuthRoute from './AuthRoute';
// components
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import ValidateOTP from '../pages/ValidateOTP';
import Services from '../pages/Services';
import AllQuery from '../pages/AllQuery';
import PostQuery from '../pages/PostQuery';
import SearchResult from '../pages/SearchResult';
import SearchDetails from '../pages/SearchDetails';
import MyArticles from '../pages/MyArticles';
import MyProfile from '../pages/MyProfile';
import WriteArticle from '../pages/WriteArticle';
// not found page
import NotFound from '../pages/NotFound';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/login' component={Login} />
			<Route exact path='/register' component={Register} />
			<Route exact path='/forgot-password' component={ForgotPassword} />
			<Route exact path='/verify-otp' component={ValidateOTP} />
			<Route exact path='/services' component={Services} />
			<Route exact path='/all-query' component={AllQuery} />
			<Route exact path='/add-query' component={PostQuery} />
			<Route exact path='/search-result' component={SearchResult} />
			<Route exact path='/search-details' component={SearchDetails} />
			
			{/* dashboard pages */}
			<AuthRoute exact path='/my-profile' component={MyProfile} />
			<AuthRoute exact path='/my-articles' component={MyArticles} />
			<AuthRoute exact path='/write-article' component={WriteArticle} />
			{/* not found route: only at last always */}
			<Route exact component={NotFound} />
		</Switch>
	)
}

export default Routes
