import React from 'react';
import Layout from '../layout/Layout';
import MainBanner from '../partials/services/MainBanner';
import ListServices from '../partials/services/ListServices';
import GridServices from '../partials/services/GridServices';

const Services = () => {
	return (
		<Layout>
			<section className="section mainBannerServices">
				<div className="container">
					<div className="ui grid">
						<div className="row justify-content-center">
							<div className="eight wide column">
								<MainBanner />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section listServices">
				<div className="container">
					<div className="ui grid">
						<div className="row justify-content-center">
							<div className="twelve wide column">
								<ListServices />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section gridServices">
				<div className="container">
					<div className="ui grid">
						<div className="row justify-content-center">
							<div className="sixteen wide column">
								<GridServices />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Services
