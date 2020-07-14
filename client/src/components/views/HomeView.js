import React from 'react';
import Search from './home/Search';
import Articles from './home/Articles';
import NewsUpdates from './home/NewsUpdates';
import TrendingStories from './home/TrendingStories';
import KnowledgeBank from './home/KnowledgeBank';
import AboutInfo from './home/AboutInfo';

const HomeView = () => {
	return (
		<>
			<Search />

			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<Articles />
						</div>
						<div className="col-md-6">
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

			<KnowledgeBank />

			<section className="section">
				<div className="container">
					<AboutInfo />
				</div>
			</section>
		</>
	)
}

export default HomeView
