import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="footer__top">
                            <h2 className="size36">Subscribe For <span>The Latest Updates</span></h2>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Enter your Email ID"></input>
                                    <button type="button" className="btn btn-primary">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className="footer__middle">
                            <div className="footer__middle--links">
                                <ul>
                                    <li><a href="#!">Articles</a></li>
                                    <li><a href="#!">Forum</a></li>
                                    <li><a href="#!">Career</a></li>
                                    <li><a href="#!">Jobs</a></li>
                                    <li><a href="#!">Video</a></li>
                                    <li><a href="#!">Income Tax</a></li>
                                </ul>
                            </div>
                            <div className="footer__middle--links">
                                <ul>
                                    <li><a href="#!">News</a></li>
                                    <li><a href="#!">Experts</a></li>
                                    <li><a href="#!">Budget</a></li>
                                    <li><a href="#!">Feed</a></li>
                                    <li><a href="#!">Top Members</a></li>
                                    <li><a href="#!">Rewards</a></li>
                                </ul>
                            </div>
                            <div className="footer__middle--links">
                                <ul>
                                    <li><a href="#!">Corporate Law Updates</a></li>
                                    <li><a href="#!">Tax Updates</a></li>
                                    <li><a href="#!">Useful Readings</a></li>
                                    <li><a href="#!">Annual Budget</a></li>
                                    <li><a href="#!">Research Reports</a></li>
                                    <li><a href="#!">Doing Business Guides</a></li>
                                </ul>
                            </div>
                            <div className="footer__middle--links">
                                <ul>
                                    <li><a href="#!">Industries</a></li>
                                    <li><a href="#!">Career</a></li>
                                    <li><a href="#!">Privacy</a></li>
                                    <li><a href="#!">Disclaimer</a></li>
                                    <li><a href="#!">Sitemap</a></li>
                                    <li><a href="#!">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__bottom">
                            <p>How we ensure customer satisfaction?</p>
                            <p>As you enquire for any services, our customer service executive gets intimated and he/she comes in contact with you in a while to give you brief description about the service and provide you with checklist of Documents/Information required to execute the service.</p>
                            <p>Afterward once you make payment a customer relationship manager is assigned to assist you throughout the process.</p>
                            <p>Thereafter, Our Customer relationship manager refer the opted service to relevant Legal Gram expert and do necessary follow ups on your behalf and ensure completion of opted service in time bound manner.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <p>© 2020 Legal Gram Copyright All right Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
