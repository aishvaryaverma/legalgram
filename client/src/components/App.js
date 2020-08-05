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
					</Switch>
				</ScrollToTop>
			</Router>
		</Provider>
	);
};

export default App
