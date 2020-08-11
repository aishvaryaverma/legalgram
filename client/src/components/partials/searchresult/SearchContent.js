import React from 'react';
import { Link } from 'react-router-dom';
import clockIcon from '../../../static/img/allquery/clock-icon.png';
import SearchContentContentImg from '../../../static/img/searchresult/searchcontent-img.png';

const SearchContent = () => {
	return (
		<>
			<div className="searchContent__heading">
				<h5>Search Result</h5>
				<h2 className="size45">Income Tax</h2>
			</div>
			<div className="searchContent__content">
				<div className="searchContent__content--img">
					<img src={SearchContentContentImg} alt=""/>
				</div>
				<div className="searchContent__content--boxes">
					<div className="searchContent__content--boxes-box">
						<h2><Link to="/search-details">CBDT defers new registration procedure of trusts and charitable Institutions to October</Link></h2>
						<p><Link to="/search-details" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</Link></p>
					</div>
					<div className="searchContent__content--boxes-box">
						<h2><Link to="/search-details">CBDT dAnalysis of Direct Tax changes introduced by the FM -CCI Talk</Link></h2>
						<p><Link to="/search-details" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</Link></p>
					</div>
					<div className="searchContent__content--boxes-box">
						<h2><Link to="/search-details">Permissible mode in which charitable trust / institution can deposit its receipt</Link></h2>
						<p><Link to="/search-details" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</Link></p>
					</div>
					<div className="searchContent__content--boxes-box">
						<h2><Link to="/search-details">Draft Format of Engagement letter & Management representation on Tax Audit</Link></h2>
						<p><Link to="/search-details" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</Link></p>
					</div>
					<div className="searchContent__content--boxes-box">
						<h2><Link to="/search-details">CBDT defers new registration procedure of trusts and charitable Institutions to October</Link></h2>
						<p><Link to="/search-details" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</Link></p>
					</div>
					<div className="searchContent__content--boxes-box">
						<h2><Link to="/search-details">CBDT dAnalysis of Direct Tax changes introduced by the FM -CCI Talk</Link></h2>
						<p><Link to="/search-details" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</Link></p>
					</div>
					<div className="searchContent__content--boxes-box">
						<h2><Link to="/search-details">Analysis of Direct Tax changes introduced by the FM-CCI Talk</Link></h2>
						<p><Link to="/search-details" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</Link></p>
					</div>
				</div>
				<div className="searchContent__content--viewmore">
					<a href="#!"><span>Load More</span> <i class="fas fa-sync-alt"></i></a>
				</div>
			</div>
		</>
	)
}

export default SearchContent
