import React from 'react';
import clockIcon from '../../../static/img/allquery/clock-icon.png';
import RecentlyViewedImg from '../../../static/img/searchresult/recentlyviewed-img1.jpg';

const Sidebar = () => {
	return (
		<div className="searchContent__sidebar">
			<div className="card">
				<h4>Popular Articles</h4>
				<ul className="listStyling">
					<li><a href="#!">Finance</a></li>
					<li><a href="#!">Banking</a></li>
					<li><a href="#!">Income Tax</a></li>
					<li><a href="#!">Accountancy</a></li>
					<li><a href="#!">Corporate Law</a></li>
				</ul>
			</div>
			<div className="card">
				<h4>Recently Viewed</h4>
				<ul>
					<li>
						<figure>
							<a href="#!"><img src={RecentlyViewedImg} alt="" /></a>
						</figure>
						<div>
							<h2><a href="#!">NI being eased 'back to  normality step by step</a></h2>
							<p><a href="#!" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</a></p>
						</div>
					</li>
					<li>
						<figure>
							<a href="#!"><img src={RecentlyViewedImg} alt="" /></a>
						</figure>
						<div>
							<h2><a href="#!">NI being eased 'back to  normality step by step</a></h2>
							<p><a href="#!" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</a></p>
						</div>
					</li>
					<li>
						<figure>
							<a href="#!"><img src={RecentlyViewedImg} alt="" /></a>
						</figure>
						<div>
							<h2><a href="#!">NI being eased 'back to  normality step by step</a></h2>
							<p><a href="#!" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</a></p>
						</div>
					</li>
					<li>
						<figure>
							<a href="#!"><img src={RecentlyViewedImg} alt="" /></a>
						</figure>
						<div>
							<h2><a href="#!">NI being eased 'back to  normality step by step</a></h2>
							<p><a href="#!" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</a></p>
						</div>
					</li>
					<li>
						<figure>
							<a href="#!"><img src={RecentlyViewedImg} alt="" /></a>
						</figure>
						<div>
							<h2><a href="#!">NI being eased 'back to  normality step by step</a></h2>
							<p><a href="#!" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</a></p>
						</div>
					</li>
					<li>
						<figure>
							<a href="#!"><img src={RecentlyViewedImg} alt="" /></a>
						</figure>
						<div>
							<h2><a href="#!">NI being eased 'back to  normality step by step</a></h2>
							<p><a href="#!" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</a></p>
						</div>
					</li>
					<li>
						<figure>
							<a href="#!"><img src={RecentlyViewedImg} alt="" /></a>
						</figure>
						<div>
							<h2><a href="#!">NI being eased 'back to  normality step by step</a></h2>
							<p><a href="#!" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</a></p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar
