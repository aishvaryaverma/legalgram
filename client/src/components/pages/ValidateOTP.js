import React from 'react';
import Layout from '../layout/Layout';
import ValidateOTPView from '../views/auth/ValidateOTPView';

const ValidateOTP = ({ history }) => {
	return (
		<Layout>
			<ValidateOTPView history={history} />
		</Layout>
	)
}

export default ValidateOTP
