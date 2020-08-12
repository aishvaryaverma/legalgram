import React from 'react';
import listServicesImg1 from '../../../static/img/services/listsection-img1.jpg';
import listServicesImg2 from '../../../static/img/services/listsection-img2.jpg';
import listServicesImg3 from '../../../static/img/services/listsection-img3.jpg';
import listServicesImg4 from '../../../static/img/services/listsection-img4.jpg';

const ListServices = () => {
	return (
		<div className="listServices__sercivecards">
			<div className="listServices__sercivecard">
				<div className="listServices__sercivecardLeft">
					<figure className="listServices__sercivecardLeft_img"><img src={listServicesImg1} alt=""></img></figure>
				</div>
				<div className="listServices__sercivecardRight">
					<h3>ACCOUNTS &amp; CLOSURE</h3>
					<ul className="listStyling">
						<li>Maintain your Accounts</li>
						<li>Close Your Private Limited Company</li>
						<li>Close Your LLP</li>
						<li>Payroll Service NEW0</li>
					</ul>
				</div>
			</div>
			<div className="listServices__sercivecard">
				<div className="listServices__sercivecardLeft">
					<figure className="listServices__sercivecardLeft_img"><img src={listServicesImg2} alt=""></img></figure>
				</div>
				<div className="listServices__sercivecardRight">
					<h3>CONVERSION</h3>
					<ul className="listStyling">
						<li>Partnership to LLP</li>
						<li>Sole Proprietorship to Private Limited Company</li>
						<li>Private Limited to Public Limited Company</li>
						<li>Private Limited to One Person Company</li>
					</ul>
				</div>
			</div>
			<div className="listServices__sercivecard">
				<div className="listServices__sercivecardLeft">
					<figure className="listServices__sercivecardLeft_img"><img src={listServicesImg3} alt=""></img></figure>
				</div>
				<div className="listServices__sercivecardRight">
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
			</div>
			<div className="listServices__sercivecard">
				<div className="listServices__sercivecardLeft">
					<figure className="listServices__sercivecardLeft_img"><img src={listServicesImg4} alt=""></img></figure>
				</div>
				<div className="listServices__sercivecardRight">
					<h3>SECRETARIAL COMPLIANCES</h3>
					<ul className="listStyling">
						<li>Annual Compliances for PVT</li>
						<li>Annual Filings for LLPs</li>
						<li>Increase in Authorised Capital</li>
						<li>Internal Audit Package for Companies <span className="NewTag">New</span></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ListServices
