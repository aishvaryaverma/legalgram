import React from 'react';
import mission from '../../../static/img/mission.jpg';
import vision from '../../../static/img/vision.jpg';
import objective from '../../../static/img/objective.jpg';
import values from '../../../static/img/values.jpg';

const AboutInfo = () => {
	return (
		<div className="homeAboutInfo">
			<h2 className="size36 text-center">We Make Legal Easy For You</h2>

			<div className="homeAboutInfo__cards">
				<article>
					<figure><img src={mission} alt="mission"/></figure>
					<div className="content">
						<h4>Mission</h4>
						<p>To be a stimulant in the Growth of People and Organisation by providing continuous accessibility of our expert, interactive platform with various stakeholders and maintaining high ethical & professional standards, thereby making them proud & dignified.</p>
					</div>
				</article>
				<article>
					<figure><img src={vision} alt="vision"/></figure>
					<div className="content">
						<h4>Vision</h4>
						<p>We aim to be the most respected Legal, Financial services provider and Interactive platform that reaches out to the Millions of people around globe. We aspire to live up the expectations of our clients, our people, and the society.</p>
					</div>
				</article>
				<article>
					<figure><img src={objective} alt="Objective"/></figure>
					<div className="content">
						<h4>Objective</h4>
						<p>To not just meet but also exceed client expectation consistently and help them to achieve there real business goals by imbibing Teamwork, Professionalism, Personalised Service & Specialisation.</p>
					</div>
				</article>
				<article>
					<figure><img src={values} alt="values"/></figure>
					<div className="content small-para">
						<h4>Values</h4>

						<h6>INTEGRITY</h6>
						<p>We lead by example in all we do.  We set the highest goals of honesty and ethics.</p>

						<h6>SERVICE</h6>
						<p>Our work is handled timely and efficiently.</p>

						<h6>EXCELLENCE</h6>
						<p>Our work reflects our best efforts, never less.</p>
						
						<h6>TEAMWORK</h6>
						<p>You are our client.  We know that to achieve your business goals, we need to operate as a team. The best results are achieved through this collaboration.</p>
					</div>
				</article>
			</div>
		</div>
	)
}

export default AboutInfo
