import React from 'react';
import Layout from '../layout/Layout';
import RegisterView from '../views/auth/RegisterView';

const Register = ({ history }) => {
	return (
		<Layout>
			<RegisterView history={history} />
		</Layout>
	)
}

export default Register
