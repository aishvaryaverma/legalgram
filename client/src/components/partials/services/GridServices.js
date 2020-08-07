import React from 'react';
import gridServicesImg1 from '../../../static/img/services-page/gridsection-img1.jpg';
import gridServicesImg2 from '../../../static/img/services-page/gridsection-img2.jpg';
import gridServicesImg3 from '../../../static/img/services-page/gridsection-img3.jpg';
import gridServicesImg4 from '../../../static/img/services-page/gridsection-img4.jpg';
import gridServicesImg5 from '../../../static/img/services-page/gridsection-img5.jpg';
import gridServicesImg6 from '../../../static/img/services-page/gridsection-img6.jpg';
import gridServicesImg7 from '../../../static/img/services-page/gridsection-img7.jpg';
import gridServicesImg8 from '../../../static/img/services-page/gridsection-img8.jpg';

const GridServices = () => {
	return (
		<div className="gridServices__boxes">
			<div className="gridServices__boxes--box">
				<div className="gridServices__boxes--box-left">
					<figure className="gridServices__boxes--box-left_img"><img src={gridServicesImg1} alt=""></img></figure>
				</div>
				<div className="gridServices__boxes--box-right">
					<h3>BUSINESS REGISTRATIONS</h3>
					<ul className="listStyling">
						<li>Maintain your Accounts</li>
						<li>Close Your Private Limited Company</li>
						<li>Close Your LLP</li>
						<li>Payroll Service NEW0 <span className="NewTag">New</span></li>
					</ul>
				</div>
			</div>
			<div className="gridServices__boxes--box">
				<div className="gridServices__boxes--box-left">
					<figure className="gridServices__boxes--box-left_img"><img src={gridServicesImg2} alt=""></img></figure>
				</div>
				<div className="gridServices__boxes--box-right">
					<h3>FSSAI REGISTRATION <span className="NewTag">New</span></h3>
					<ul className="listStyling">
						<li>Partnership to LLP</li>
						<li>Sole Proprietorship to Private Limited Company</li>
						<li>Private Limited to Public Limited Company</li>
						<li>Private Limited to One Person Company</li>
					</ul>
				</div>
			</div>
			<div className="gridServices__boxes--box">
				<div className="gridServices__boxes--box-left">
					<figure className="gridServices__boxes--box-left_img"><img src={gridServicesImg3} alt=""></img></figure>
				</div>
				<div className="gridServices__boxes--box-right">
					<h3>TAX FILINGS & REGISTRATIONS</h3>
					<ul className="listStyling">
						<li>Add a Director <span className="NewTag">New</span></li>
						<li>Remove a Director <span className="NewTag">New</span></li>
						<li>Add a Designated Partner <span className="NewTag">New</span></li>
						<li>Change Objectives of Your Business</li>
						<li>Change Official Address</li>
						<li>Change Company Name</li>
						<li>Change LLP Agreement</li>
					</ul>
				</div>
			</div>
			<div className="gridServices__boxes--box">
				<div className="gridServices__boxes--box-left">
					<figure className="gridServices__boxes--box-left_img"><img src={gridServicesImg4} alt=""></img></figure>
				</div>
				<div className="gridServices__boxes--box-right">
					<h3>NGO REGISTRATIONS</h3>
					<ul className="listStyling">
						<li>Annual Compliances for PVT <span className="NewTag">New</span></li>
						<li>Annual Filings for LLPs <span className="NewTag">New</span></li>
						<li>Increase in Authorised Capital <span className="NewTag">New</span></li>
						<li>Internal Audit Package for Companies NEW</li>
					</ul>
				</div>
			</div>
			<div className="gridServices__boxes--box">
				<div className="gridServices__boxes--box-left">
					<figure className="gridServices__boxes--box-left_img"><img src={gridServicesImg5} alt=""></img></figure>
				</div>
				<div className="gridServices__boxes--box-right">
					<h3>GOVERNMENT REGISTRATIONS</h3>
					<ul className="listStyling">
						<li>Maintain your Accounts</li>
						<li>Close Your Private Limited Company</li>
						<li>Close Your LLP</li>
						<li>Payroll Service NEW0</li>
					</ul>
				</div>
			</div>
			<div className="gridServices__boxes--box">
				<div className="gridServices__boxes--box-left">
					<figure className="gridServices__boxes--box-left_img"><img src={gridServicesImg6} alt=""></img></figure>
				</div>
				<div className="gridServices__boxes--box-right">
					<h3>LABOUR LAW REGISTRATION</h3>
					<ul className="listStyling">
						<li>Partnership to LLP</li>
						<li>Sole Proprietorship to Private Limited Company</li>
						<li>Private Limited to Public Limited Company</li>
						<li>Private Limited to One Person Company</li>
					</ul>
				</div>
			</div>
			<div className="gridServices__boxes--box">
				<div className="gridServices__boxes--box-left">
					<figure className="gridServices__boxes--box-left_img"><img src={gridServicesImg7} alt=""></img></figure>
				</div>
				<div className="gridServices__boxes--box-right">
					<h3>TRADEMARK</h3>
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
			</div>
			<div className="gridServices__boxes--box">
				<div className="gridServices__boxes--box-left">
					<figure className="gridServices__boxes--box-left_img"><img src={gridServicesImg8} alt=""></img></figure>
				</div>
				<div className="gridServices__boxes--box-right">
					<h3>COPYRIGHT & PATENT</h3>
					<ul className="listStyling">
						<li>Annual Compliances for PVT</li>
						<li>Annual Filings for LLPs</li>
						<li>Increase in Authorised Capital</li>
						<li>Internal Audit Package for Companies NEW</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default GridServices
