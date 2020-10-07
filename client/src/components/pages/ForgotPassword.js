import React from 'react';
import Layout from '../layout/Layout';
import ForgotPasswordView from '../views/auth/ForgotPasswordView';

const ForgotPassword = ({ history }) => {
	return (
		<Layout>
			<ForgotPasswordView history={history} />
		</Layout>
	)
}

export default ForgotPassword
