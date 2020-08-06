import React from 'react';
import OtherStories1 from '../../../static/img/otherstories-img1.jpg';
import OtherStories2 from '../../../static/img/otherstories-img2.jpg';
import OtherStories3 from '../../../static/img/otherstories-img3.jpg';

const Services = () => {
	return (
		<>
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="homeStories__heading">
						<h2 className="size45">Other Stories</h2>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="homeStories__content">
						<div className="homeStories__content--box">
							<div className="homeStories__content--box-left">
								<img src={OtherStories1} alt=""/>
							</div>
							<div className="homeStories__content--box-right">
								<h3>NI being eased 'back to normality step by step</h3>
								<p>The executive is working to ease Northern Ireland "back to normality step by step", Diane Dodds has said.</p>
								<a href="#!" className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
							</div>
						</div>
						<div className="homeStories__content--box">
							<div className="homeStories__content--box-left">
								<img src={OtherStories2} alt="" />
							</div>
							<div className="homeStories__content--box-right">
								<h3>Coronavirus pushes German  economy into recession</h3>
								<p>Germany's economy shrank by 2.2% in the first three months of this year as the coronavirus pandemic pushed it into recession, official figures indicate.</p>
								<a href="#!" className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
							</div>
						</div>
						<div className="homeStories__content--box">
							<div className="homeStories__content--box-left">
								<img src={OtherStories3} alt="" />
							</div>
							<div className="homeStories__content--box-right">
								<h3>WTO head quits early as global downturn looms</h3>
								<p>Roberto Azevedo's surprise departure comes as the WTO faces the impact of the coronavirus pandemic and criticism from US President Donald Trump.</p>
								<a href="#!" className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="homeStories__content">
						<div className="homeStories__content--moreReads">
							<h4>Most Reads</h4>
							<ul className="listStyling">
								<li>Coronavirus: A third of hospital patients develop dangerous blood clots</li>
								<li>Rich List: Inventor Sir James Dyson is UK's richest person</li>
								<li>Coronavirus: Labour's Sir Keir Starmer calls for 'four-nation' approach</li>
								<li>Newspaper headlines: Rich List losers and 'docs at war on schools'</li>
								<li>Coronavirus: Italy takes 'calculated risk' in easing restrictions - PM</li>
								<li>NFL's Deandre Baker and Quinton Dunbar surrender after robbery charge</li>
								<li>Coronavirus pandemic: Tracking the global outbreak</li>
								<li>How coronavirus is driving a revolution in travel</li>
								<li>Polish archbishop refers child sex abuse case to Vatican</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Services
