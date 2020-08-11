import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// styles
import '../static/scss/main.scss';
// redux store
import store from '../store';
import { Provider } from 'react-redux';
// HOC
import ScrollToTop from './ScrollToTop';
// actions
// import { loadUser } from './actions/auth';
// components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ValidateOTP from './pages/ValidateOTP';
import Services from './pages/Services';
import AllQuery from './pages/AllQuery';
import PostQuery from './pages/PostQuery';
import SearchResult from './pages/SearchResult';
import SearchDetails from './pages/SearchDetails';

const App = () => {
	useEffect(() => {
		// store.dispatch(loadUser());
	}, []);
	
	return (
		<Provider store={store}>
			<Router>
				<ScrollToTop>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/forgot-password' component={ForgotPassword} />
						<Route exact path='/verify-otp' component={ValidateOTP} />
						<Route exact path='/services' component={Services} />
						<Route exact path='/all-query' component={AllQuery} />
						<Route exact path='/add-query' component={PostQuery} />
						<Route exact path='/search-result' component={SearchResult} />
						<Route exact path='/search-details' component={SearchDetails} />
					</Switch>
				</ScrollToTop>
			</Router>
		</Provider>
	);
};

export default App
