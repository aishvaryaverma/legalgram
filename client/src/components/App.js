import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// styles
import 'react-toastify/dist/ReactToastify.css';
import '../static/scss/main.scss';
// redux store
import store from '../store';
import { Provider } from 'react-redux';
// HOC
import ScrollToTop from './ScrollToTop';
// actions
import { loadUser } from '../actions/auth';
// components
import Home from './pages/Home';
import Routes from './routes/Routes';
import PublicRoute from './routes/PublicRoute';

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	
	return (
		<Provider store={store}>
			<Router>
				<ScrollToTop>
					<Switch>
						<PublicRoute exact path='/' component={Home} />
						<Routes exact component={Routes} />
					</Switch>
				</ScrollToTop>
			</Router>
		</Provider>
	)
}

export default App
