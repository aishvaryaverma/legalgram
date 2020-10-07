import React from 'react';
import Layout from '../layout/Layout';
import LoginView from '../views/auth/LoginView';

const Login = ({ history }) => {
	return (
		<Layout>
			<LoginView history={history} />
		</Layout>
	)
}

export default Login
