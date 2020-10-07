import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';

const NotFound = () => {
	useEffect(() => {
		document.querySelector('body').classList = '';
		document.querySelector('body').classList.add('pagenotfound');
	}, []);

	return (
		<Layout>
			<div className="all-content-wrapper">
				<section className="notfoundSection clearfix">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<div className="notfoundText">
									<figure><img src="/images/404.png" alt="not found"/></figure>
									<h3>Oops, That page doesn't exist.</h3>
									<Link className="btn btn-secondary" to="/search">View All Assets</Link>
								</div>
							</div>
						</div>
					</div>  
				</section>
			</div>
		</Layout>
	)
}

export default NotFound
