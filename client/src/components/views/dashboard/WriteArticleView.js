import React from 'react';

import LeftSidebar from './common/LeftSidebar';
import WriteArticleContent from '../../partials/dashboard/WriteArticleContent';

const WriteArticlesView = () => {
	return (
		<div className="dashboardSection">

			<LeftSidebar />

			<WriteArticleContent />

		</div>
	)
}

export default WriteArticlesView
