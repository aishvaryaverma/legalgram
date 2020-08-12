import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../../../static/img/dashboard/profilepic.png";
import RightSidebarIcon1 from "../../../../static/img/dashboard/rightsidebar-icon1.png";
import RightSidebarIcon2 from "../../../../static/img/dashboard/rightsidebar-icon2.png";
import RightSidebarIcon3 from "../../../../static/img/dashboard/rightsidebar-icon3.png";

const LeftSidebar = () => {
    return (
        <div className="dashboardSidebar">
            <div className="dashboardSidebar__top">
                <figure>
                    <img src={ProfilePic} alt="" />
                </figure>
                <h3>Antonio Murray</h3>
            </div>
            <div className="dashboardSidebar__bottom">
                <ul>
                    <li>
                        <Link to="/my-profile">
                            <img src={RightSidebarIcon1} alt="" />
                            <span>My Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/write-article">
                            <img src={RightSidebarIcon2} alt="" />
                            <span>Write Article</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-articles">
                            <img src={RightSidebarIcon2} alt="" />
                            <span>My Articles</span>
                        </Link>
                    </li>
                    <li className="lastMenu">
                        <Link to="/">
                            <img src={RightSidebarIcon3} alt="" />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LeftSidebar;
