import React from 'react';

import LeftSidebar from './common/LeftSidebar';
import ProfileContent from '../../partials/dashboard/ProfileContent';

const MyProfileView = () => {
	return (
		<div className="dashboardSection">
			
			<LeftSidebar />

			<ProfileContent />

		</div>
	)
}

export default MyProfileView
