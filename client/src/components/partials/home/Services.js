import React from 'react';

const Services = () => {
	return (
		<div className="ui grid">
			<div className="row justify-content-center">
				<div className="eight wide column">
					<div className="homeService__heading">
						<h2 className="size45">Services</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
					</div>
				</div>
				<div className="sixteen wide column">
					<div className="homeService__content">
						<div className="homeService__content--box">
							<h3>ACCOUNTS & CLOSURE</h3>
							<ul className="listStyling">
								<li>Maintain your Accounts</li>
								<li>Close Your Private Limited Company</li>
								<li>Close Your LLP</li>
								<li>Payroll Service NEW0</li>
							</ul>
						</div>
						<div className="homeService__content--box">
							<h3>CONVERSION</h3>
							<ul className="listStyling">
								<li>Partnership to LLP</li>
								<li>Sole Proprietorship to Private Limited Company</li>
								<li>Private Limited to Public Limited Company</li>
								<li>Private Limited to One Person Company</li>
							</ul>
						</div>
						<div className="homeService__content--box">
							<h3>CHANGES IN BUSINESS</h3>
							<ul className="listStyling">
								<li>Add a Director</li>
								<li>Remove a Director</li>
								<li>Add a Designated Partner</li>
								<li>Change Objectives of Your Business</li>
								<li>Change Official Address</li>
								<li>Change Company Name</li>
								<li>Change LLP Agreement</li>
							</ul>
						</div>
						<div className="homeService__content--box">
							<h3>SECRETARIAL COMPLIANCES</h3>
							<ul className="listStyling">
								<li>Annual Compliances for PVT</li>
								<li>Annual Filings for LLPs</li>
								<li>Increase in Authorised Capital</li>
								<li>Internal Audit Package for Companies NEW</li>
							</ul>
						</div>
					</div>
					<div className="homeService__button">
						<a href="#!" className="btn btn-primary">View All Services</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
