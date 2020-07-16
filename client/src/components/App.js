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
					</Switch>
				</ScrollToTop>
			</Router>
		</Provider>
	);
};

export default App
