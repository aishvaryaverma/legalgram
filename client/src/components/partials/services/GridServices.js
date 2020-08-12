import React from 'react';
import gridServicesImg1 from '../../../static/img/services/gridsection-img1.jpg';
import gridServicesImg2 from '../../../static/img/services/gridsection-img2.jpg';
import gridServicesImg3 from '../../../static/img/services/gridsection-img3.jpg';
import gridServicesImg4 from '../../../static/img/services/gridsection-img4.jpg';
import gridServicesImg5 from '../../../static/img/services/gridsection-img5.jpg';
import gridServicesImg6 from '../../../static/img/services/gridsection-img6.jpg';
import gridServicesImg7 from '../../../static/img/services/gridsection-img7.jpg';
import gridServicesImg8 from '../../../static/img/services/gridsection-img8.jpg';

const GridServices = () => {
	return (
		<div className="gridServices__sercivecards">
			<div className="gridServices__sercivecard">
				<div className="gridServices__sercivecardLeft">
					<figure className="gridServices__sercivecardLeft_img"><img src={gridServicesImg1} alt=""></img></figure>
				</div>
				<div className="gridServices__sercivecardRight">
					<h3>BUSINESS REGISTRATIONS</h3> 
					<ul className="listStyling">
						<li>Private Limited Company</li>
						<li>Limited Liability Partnership</li>
						<li>One Person Company</li>
						<li>Partnership Firm <br />Proprietorship Firm <br />Nidhi Company <br/>Digital Signature <span className="NewTag">New</span></li>
					</ul>
				</div>
			</div>
			<div className="gridServices__sercivecard">
				<div className="gridServices__sercivecardLeft">
					<figure className="gridServices__sercivecardLeft_img"><img src={gridServicesImg2} alt=""></img></figure>
				</div>
				<div className="gridServices__sercivecardRight">
					<h3>FSSAI REGISTRATION <span className="NewTag">New</span></h3>
					<ul className="listStyling">
						<li>FSSAI Registration(Centre & State)</li>
					</ul>
				</div>
			</div>
			<div className="gridServices__sercivecard">
				<div className="gridServices__sercivecardLeft">
					<figure className="gridServices__sercivecardLeft_img"><img src={gridServicesImg3} alt=""></img></figure>
				</div>
				<div className="gridServices__sercivecardRight">
					<h3>TAX FILINGS & REGISTRATIONS</h3>
					<ul className="listStyling">
						<li>Goods & Service Tax Registration <span className="NewTag">New</span></li>
						<li>GST Filings <span className="NewTag">New</span></li>
						<li>GST Advisory <span className="NewTag">New</span></li>
						<li>TDS Return</li>
						<li>Income Tax Return</li>
					</ul>
				</div>
			</div>
			<div className="gridServices__sercivecard">
				<div className="gridServices__sercivecardLeft">
					<figure className="gridServices__sercivecardLeft_img"><img src={gridServicesImg4} alt=""></img></figure>
				</div>
				<div className="gridServices__sercivecardRight">
					<h3>NGO REGISTRATIONS</h3>
					<ul className="listStyling">
						<li>NGO Registration</li>
						<li>Section 8 Company Registration <span className="NewTag">New</span></li>
						<li>Annual Compliances for Section 8 Companies <span className="NewTag">New</span></li>
						<li>Society Registration <span className="NewTag">New</span></li>
						<li>Trust Registration <span className="NewTag">New</span></li>
						<li>FCRA Registration</li>
					</ul>
				</div>
			</div>
			<div className="gridServices__sercivecard">
				<div className="gridServices__sercivecardLeft">
					<figure className="gridServices__sercivecardLeft_img"><img src={gridServicesImg5} alt=""></img></figure>
				</div>
				<div className="gridServices__sercivecardRight">
					<h3>GOVERNMENT REGISTRATIONS</h3>
					<ul className="listStyling">
						<li>Shops & Establishments Registration</li>
						<li>SSI/MSME Registration</li>
						<li>Importer Exporter Code</li>
						<li>ISO Certification</li>
						<li>Trade License</li>
						<li>NRI Legal Advice</li>
					</ul>
				</div>
			</div>
			<div className="gridServices__sercivecard">
				<div className="gridServices__sercivecardLeft">
					<figure className="gridServices__sercivecardLeft_img"><img src={gridServicesImg6} alt=""></img></figure>
				</div>
				<div className="gridServices__sercivecardRight">
					<h3>LABOUR LAW REGISTRATION</h3>
					<ul className="listStyling">
						<li>PF Registration</li>
						<li>ESI Registration</li>
					</ul>
				</div>
			</div>
			<div className="gridServices__sercivecard">
				<div className="gridServices__sercivecardLeft">
					<figure className="gridServices__sercivecardLeft_img"><img src={gridServicesImg7} alt=""></img></figure>
				</div>
				<div className="gridServices__sercivecardRight">
					<h3>TRADEMARK</h3>
					<ul className="listStyling">
						<li>Trademark Registration</li>
						<li>Trademark Objection</li>
						<li>Trademark Assignment</li>
						<li>Trademark Renewal</li>
						<li>Trademark Watch</li>
						<li>Logo Designing & Logo Registration</li>
					</ul>
				</div>
			</div>
			<div className="gridServices__sercivecard">
				<div className="gridServices__sercivecardLeft">
					<figure className="gridServices__sercivecardLeft_img"><img src={gridServicesImg8} alt=""></img></figure>
				</div>
				<div className="gridServices__sercivecardRight">
					<h3>COPYRIGHT & PATENT</h3>
					<ul className="listStyling">
						<li>Copyright Registration</li>
						<li>Patent Search</li>
						<li>Provisional Patent</li>
						<li>Patent</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default GridServices
