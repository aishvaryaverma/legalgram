import React from 'react';

import LeftSidebar from './common/LeftSidebar';
import MyArticleContent from '../../partials/dashboard/MyArticleContent';

const MyArticlesView = () => {
	return (
		<div className="dashboardSection">

			<LeftSidebar />

			<MyArticleContent />

		</div>
	)
}

export default MyArticlesView
