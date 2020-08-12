import React from 'react';

import ProfilePic from '../../../../static/img/dashboard/profilepic.png';
import RightSidebarIcon1 from '../../../../static/img/dashboard/rightsidebar-icon1.png';
import RightSidebarIcon2 from '../../../../static/img/dashboard/rightsidebar-icon2.png';
import RightSidebarIcon3 from '../../../../static/img/dashboard/rightsidebar-icon3.png';

const LeftSidebar = () => {
	return (
		<div className="dashboardSidebar">
			<div className="dashboardSidebar__top">
				<figure><img src={ProfilePic} alt=""/></figure>
				<h3>Antonio Murray</h3>
			</div>
			<div className="dashboardSidebar__bottom">
				<ul>
					<li><a href="/myprofile"><img src={RightSidebarIcon1} alt="" /><span>My Profile</span></a></li>
					<li><a href="/writearticle"><img src={RightSidebarIcon2} alt="" /><span>Write Article</span></a></li>
					<li><a href="/myarticles"><img src={RightSidebarIcon2} alt="" /><span>My Articles</span></a></li>
					<li className="lastMenu"><a href="/"><img src={RightSidebarIcon3} alt="" /><span>Logout</span></a></li>
				</ul>
			</div>
		</div>
	)
}

export default LeftSidebar
