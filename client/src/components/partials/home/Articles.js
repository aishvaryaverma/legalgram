import React from 'react';
import { Link } from 'react-router-dom';
import firstArticle from '../../../static/img/first-aritcle.jpg';

const Articles = () => {
	return (
		<div className="homeArticles">
			<h2 className="size36 homeArticles__title">Articles</h2>
			<div className="homeArticles__posts">
				<article>
					<img src={firstArticle} alt="articles" />
					<h4>Form for retrospective restoration of membership/COP can be filed till 31st may 2020 says ICAI</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<h4>GST Implications on Gift and Business Promotional Expenditure</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<h4>IFRS 16 vs US GAAP (ASC 842): Bridging the gap for Lease Accounting</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<h4>IFRS 16 vs US GAAP (ASC 842): Bridging the gap for Lease Accounting</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
			</div>
			<Link to="/">View All Articles</Link>
		</div>
	)
}

export default Articles
