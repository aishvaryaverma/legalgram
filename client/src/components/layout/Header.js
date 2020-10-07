import React, { Fragment } from 'react';
// redux
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
// components
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
// statics
import logo from '../../static/img/logo.png';

const Header = ({ user, isAuthenticated, logout }) => {

	const authLinks = isAuth => {
		if(isAuth) {
			return (
				<Dropdown
					text={user?.name}
					direction='right'
					pointing
				>
					<Dropdown.Menu>
						<Dropdown.Item as={Link} to="/my-profile" text='My Profile' />
						<Dropdown.Item as={Link} to="/my-articles" text='My Articles' />
						<Dropdown.Item as={Link} to="/write-article" text='Write Articles' />
						<Dropdown.Divider />
						<Dropdown.Item text='Logout' onClick={logout} />
					</Dropdown.Menu>
				</Dropdown>
			)
		} else {
			return (
				<Fragment>
					<li className="login"><NavLink to="/login" activeClassName="active">Login</NavLink></li>
					<li className="register"><NavLink to="/register" activeClassName="active">Register</NavLink></li>
				</Fragment>
			)
		}
	}
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
					{authLinks(isAuthenticated)}
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
	user: state.auth.user,
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Header)
