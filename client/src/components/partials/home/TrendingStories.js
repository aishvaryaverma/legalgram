import React from 'react';
import td1 from '../../../static/img/img-td-1.jpg';
import td2 from '../../../static/img/img-td-2.jpg';
import td3 from '../../../static/img/img-td-3.jpg';
import td4 from '../../../static/img/img-td-4.jpg';

const TrendingStories = () => {
	return (
		<div className="homeTrendingStories">
			<div className="homeTrendingStories__title">
				<span>Trending stories</span>
			</div>
			<div className="homeTrendingStories__posts">
				<article>
					<img src={td1} alt="trending" />
					<h4>Income Tax Refunds worth Rs 26,242 crore issued since 1st April 2020 says CBDT</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<img src={td2} alt="trending" />
					<h4>One in four US workers claiming jobless benefits</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<img src={td3} alt="trending" />
					<h4>How can the car industry hope to recover?</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
				<article>
					<img src={td4} alt="trending" />
					<h4>Self-employed grant claims top one million</h4>
					<div className="date"><i className="far fa-clock"></i> <span>JANUARY 25, 2020</span></div>
				</article>
			</div>
		</div>
	)
}

export default TrendingStories
