import React from 'react';
import { Link } from 'react-router-dom';

const NewsUpdates = () => {
	return (
		<div className="homeNewsArticles">
			<h2 className="size36 homeNewsArticles__title">News & Updates</h2>
			<div className="homeNewsArticles__posts">
				<article>
					<h4>ICAI allows completion of MCS and Advanced IT through virtual mode</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<h4>Income Tax Refunds worth Rs 26,242 crore issued since 1st April 2020 says CBDT</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<h4>RBI further extends moratorium on loans by three months</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<h4>ICAI extends the period for commencement of articleship to 31st July 2020</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<h4>CBDT gives clarification on mandatory e-payments u/s 269SU</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<h4>Aatmanirbhar Bharat Sectoral Reforms announced by FM</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<h4>Aatmanirbhar Bharat Sectoral Reforms announced by FM</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
			</div>
			<Link to="/">View All Articles</Link>
		</div>
	)
}

export default NewsUpdates
