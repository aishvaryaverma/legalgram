import React from 'react';
// redux
import { connect } from 'react-redux';
// components
import Layout from '../../layout/Layout';
import MyAccountView from '../../views/dashboard/MyAccountView';

const MyProfile = ({ user, userLoading }) => {
	return (
		<Layout footer={false}>
			<MyAccountView
				user={user}
				userLoading={userLoading}
			/>
		</Layout>
	)
}

const mapStateToProps = state => ({
	user: state.auth.user,
	userLoading: state.auth.userLoading
})

export default connect(mapStateToProps)(MyProfile)
