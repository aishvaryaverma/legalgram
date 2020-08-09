import React from 'react';
import Layout from '../layout/Layout';

import Search from '../partials/home/Search';
import LatestQueries from '../partials/allquery/LatestQueries';
import Sidebar from '../partials/allquery/Sidebar';

const AllQuery = () => {
	return (
		<Layout>

			<Search />

			<section className="section queriessection">
				<div className="container">
					<div className="ui grid">
						<div className="row">
							<div className="twelve wide column">
								<LatestQueries />
							</div>
							<div className="four wide column">
								<Sidebar />
							</div>
						</div>
					</div>
				</div>
			</section>

		</Layout>
	)
}

export default AllQuery
