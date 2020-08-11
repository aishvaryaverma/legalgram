import React from 'react';

const Sidebar = () => {
	return (
		<div className="queriessection__sidebar">
			<div className="queriessection__sidebar--box">
				<h4>Hot Topics</h4>
				<ul className="listStyling">
					<li><a href="#!">Finance</a></li>
					<li><a href="#!">Banking</a></li>
					<li><a href="#!">Income Tax</a></li>
					<li><a href="#!">Accountancy</a></li>
					<li><a href="#!">Corporate Law</a></li>
				</ul>
			</div>
			<div className="queriessection__sidebar--box">
				<h4>Most Reads</h4>
				<ul className="listStyling">
					<li><a href="#!">TDS on Salary for F.Y.2020-21</a></li>
					<li><a href="#!">Revised TDS/TCS Rate Chart from 14.05.2020 to 31.03.2021 </a></li>
					<li><a href="#!">TDS Rate Chart for FY 2020-21 10</a></li>
					<li><a href="#!">Reasons Why an Income Tax Notice maybe issued to you!</a></li>
					<li><a href="#!">Key Amendment as per Finance Act 2020 applicable from 01-04-2020</a></li>
					<li><a href="#!">Changes in TDS rates as per Finance Act 2020</a></li>
					<li><a href="#!">Dividends: No longer tax exempt?</a></li>
					<li><a href="#!">Revised TDS and TCS Rates wef 14/05/2020</a></li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar
