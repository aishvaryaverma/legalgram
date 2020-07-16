import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// statics
import logo from '../../static/img/logo.png';

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<Link to="/"><img src={logo} alt="legalgram"/></Link>
			</div>

			<nav className="header__nav">
				<ul className="nav">
					<li>
						<NavLink to="/" activeClassName="active">Services</NavLink>
					</li>
					<li>
						<NavLink to="/" activeClassName="active">
							<span>Income Tax</span>
							<i className="fas fa-caret-down"></i>
						</NavLink>
						<ul className="dropdown-custom">
							<li><NavLink to="/" activeClassName="active">dropdown</NavLink></li>
							<li><NavLink to="/" activeClassName="active">dropdown</NavLink></li>
							<li><NavLink to="/" activeClassName="active">dropdown</NavLink></li>
							<li><NavLink to="/" activeClassName="active">dropdown</NavLink></li>
						</ul>
					</li>
					<li><NavLink to="/" activeClassName="active">Accountancy</NavLink></li>
					<li><NavLink to="/" activeClassName="active">Coporate Law</NavLink></li>
					<li><NavLink to="/" activeClassName="active">GST</NavLink></li>
					<li className="login"><NavLink to="/" activeClassName="active">Login</NavLink></li>
					<li className="register"><NavLink to="/" activeClassName="active">Register</NavLink></li>
				</ul>
			</nav>

			<Link to="/" className="header__postQueryBtn">
				<i className="far fa-comment-dots"></i>
				<span>Post Query</span>
			</Link>
		</header>
	)
}

export default Header
