import React from 'react';
import Layout from '../layout/Layout';

import MainBanner from '../partials/postquery/MainBanner';
import AboutQueriesHeading from '../partials/postquery/AboutQueriesHeading';
import AboutQueriesContent from '../partials/postquery/AboutQueriesContent';

const PostQuery = () => {
	return (
		<Layout>
			<section className="section mainBannerQuery">
				<div className="container">
					<div className="ui grid">
						<div className="row">
							<div className="twelve wide column">
								<MainBanner />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section aboutQueries">
				<div className="container">
					<div className="ui grid">
						<div className="row justify-content-center">
							<div className="eight wide column">
								<AboutQueriesHeading />
							</div>
							<div className="fourteen wide column">
								<AboutQueriesContent />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default PostQuery
