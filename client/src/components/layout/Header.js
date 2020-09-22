import React from 'react';
// redux
import { connect } from 'react-redux';
// components
import { Link, NavLink } from 'react-router-dom';
// statics
import logo from '../../static/img/logo.png';

const Header = ({ auth }) => {
	return (
		<header className="headerMain">
			<div className="headerMain__logo">
				<Link to="/"><img src={logo} alt="legalgram"/></Link>
			</div>

			<nav className="headerMain__nav">
				<ul className="nav">
					<li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
					<li><NavLink to="/search-result" activeClassName="active"><span>Income Tax</span></NavLink></li>
					<li><NavLink to="/search-result" activeClassName="active">Accountancy</NavLink></li>
					<li><NavLink to="/search-result" activeClassName="active">Coporate Law</NavLink></li>
					<li><NavLink to="/search-result" activeClassName="active">GST</NavLink></li>
					<li className="login"><NavLink to="/login" activeClassName="active">Login</NavLink></li>
					<li className="register"><NavLink to="/register" activeClassName="active">Register</NavLink></li>
				</ul>
			</nav>

			<Link to="/add-query" className="headerMain__postQueryBtn">
				<i className="far fa-comment-dots"></i>
				<span>Post Query</span>
			</Link>
		</header>
	)
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps)(Header)
