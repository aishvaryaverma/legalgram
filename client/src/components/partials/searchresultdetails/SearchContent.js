import React from 'react';
import clockIcon from '../../../static/img/allquery/clock-icon.png';
import SearchContentContentImg from '../../../static/img/searchresult/searchcontent-img.png';
import likeIcon from '../../../static/img/allquery/like-icon.png';
import shareIcon from '../../../static/img/allquery/share-icon.png';

const SearchContent = () => {
	return (
		<>
			<div className="searchContent__heading">
				<h2 className="size30">Analysis of Direct Tax changes introduced by the FM -CCI Talk</h2>
			</div>
			<div className="searchContent__content">
				<div className="searchContent__searchimg">
					<img src={SearchContentContentImg} alt="" />
				</div>
				<div className="searchContent__searchdetails">
					<ul>
						<li><a href="#!" className="publishedBy">Published By: CCI Team</a></li>
						<li><a href="#!" className="comment-time"><img src={clockIcon} alt="" />JANUARY 25, 2020</a></li>
						<li className="space"></li>
						<li><a href="#!" className="comment-likes"><img src={likeIcon} alt="" /> (10)</a></li>
						<li><a href="#!" className="comment-share"><img src={shareIcon} alt="" /></a></li>
					</ul>
					<p>The Finance Minister recently announced various changes to Direct Tax while giving the details of the Economic Package. Various relaxations were given to the taxpayers in the form of extension of the statutory due dates, and reduction in the TDS and TCS rates. After the relaxations were announced by the FM people had several questions about the implications of such changes. We at CAclubindia attempted to help the taxpayers understand the implications of the same. We asked CA(CS) Ujjwal Jindal the answers to various queries that we had received from the taxpayers. Mr. Ujjwal is a first class commerce graduate (B.Com) from Delhi University, an associate Company Secretary (ICSI) and a practicing Chartered Accountant (U J & CO.). He has relevant experience in the field of direct and indirect tax laws, corporate, secretarial and allied laws, capital markets, etc. and is also the Co-founder at UJ LEGAL LLP. Here is what Mr. Ujjwal had to say about the changes introduced by FM in Direct Tax.</p>
					<p className="heading">Ques 1. The TDS/TCS rates have been reduced by 25% for the period 14/05/2020 to 31/03/2021. Please tell us if this relaxation covers all the provisions of TDS. Also, what will be the possible implications of the reduction in TDS rate? </p>
					<p>The Economic Package was focused on creating liquidity. Due to COVID-19 lockdown, the money supply in the entire economy has squeezed. The rotation of money has stopped as the businesses are shut and people are locked at their homes. Thus, there was a pressing need to bring back money into the economy to boost back the entire system.</p>
					<p>The Finance Minister announced a TDS and TCS rate reduction by 25% of the existing rates, to infuse liquidity to the tune of Rs. 50,000 crore.</p>
					<p>The press release to give effect to this reduction came out on 13th May, 2020 (https://pib.gov.in/PressReleseDetailm.aspx?PRID=1623745) which highlighted the reduced rates of TDS and TCS that shall be applicable with effect from 14th May 2020 to 31st March, 2021.</p>
					<p>Let's first analyze the reduction in the TDS rates i.e. Tax Deducted at Source. The TDS rates, on majorly all types of payments have been reduced viz. interest on securities, dividends, payment to contractors, insurance commission, brokerage, rent for immovable property/plant and machinery, transfer of immovable property, fee for technical or professional services, etc. This implies that if the existing rate of TDS, say, on payment of interest by a bank to a deposit holder was 10%; it would now be 25% less i.e. 7.50%.</p>
					<p className="heading">IMPLICATION OF REDUCTION</p>
					<p>A person is required to pay advance tax if his self assessed tax liability is Rs. 10,000 or more. As mentioned above, the incidence of tax on the total income of a person continues to remain the same. The tax deposited by way of TDS and TCS on a person's behalf has been reduced by 25% by the economic package. Therefore, a higher self assessment tax shall now be payable, which implies, that the advance tax provisions may apply in such a case and a person shall be liable to deposit advance tax in quarterly installments. If the provisions of advance tax are ignored, interest and penalty under section 234B and 234C can apply to a person at the time of filing of income tax return for late deposit of taxes. Therefore, all the provisions should be carefully analyzed in order to avail the maximum benefit and avoid any liabilities by way of interest, penalty or alike.</p>
				</div>
			</div>
		</>
	)
}

export default SearchContent
