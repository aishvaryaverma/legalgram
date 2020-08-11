import React from 'react';
import Layout from '../layout/Layout';

import Search from '../partials/home/Search';
import SearchContent from '../partials/searchresult/SearchContent';
import Sidebar from '../partials/searchresult/Sidebar';

const SearchResult = () => {
	return (
		<Layout>

			<Search />
			
			<section className="section searchContent">
				<div className="container">
					<div className="ui grid">
						<div className="row">
							<div className="twelve wide column">
								<SearchContent />
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

export default SearchResult
