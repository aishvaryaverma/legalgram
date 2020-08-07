import React from 'react';
import Layout from '../layout/Layout';
import MainBanner from '../partials/services/MainBanner';
import ListServices from '../partials/services/ListServices';
import GridServices from '../partials/services/GridServices';

const Services = () => {
	return (
		<Layout>

			<section className="section mainBanner">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-6">
							<MainBanner />
						</div>
					</div>
				</div>
			</section>

			<section className="section listServices">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<ListServices />
						</div>
					</div>
				</div>
			</section>

			<section className="section gridServices">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-10">
							<GridServices />
						</div>
					</div>
				</div>
			</section>

		</Layout>
	)
}

export default Services
