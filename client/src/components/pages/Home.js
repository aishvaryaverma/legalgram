import React from 'react';
import Layout from '../layout/Layout';

import Search from '../partials/home/Search';
import Articles from '../partials/home/Articles';
import NewsUpdates from '../partials/home/NewsUpdates';
import TrendingStories from '../partials/home/TrendingStories';
import KnowledgeBank from '../partials/home/KnowledgeBank';
import AboutInfo from '../partials/home/AboutInfo';
import Services from '../partials/home/Services';
import OtherStories from '../partials/home/OtherStories';

const Home = () => {
	return (
		<Layout>
			<Search />
			
			<section className="section">
				<div className="container">
					<div className="ui grid">
						<div className="eight wide column">
							<Articles />
						</div>
						<div className="eight wide column">
							<NewsUpdates />
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<TrendingStories />
				</div>
			</section>
			
			<section className="section knowledgeBank">
				<div className="container">
					<KnowledgeBank />
				</div>
			</section>

			<section className="section">
				<div className="container">
					<AboutInfo />
				</div>
			</section>
			
			<section className="section light">
				<div className="container">
					<Services />
				</div>
			</section>

			<section className="section homeStories">
				<div className="container">
					<OtherStories />
				</div>
			</section>
		</Layout>
	);
};

export default Home
