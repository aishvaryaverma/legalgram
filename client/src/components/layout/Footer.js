import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="footer-top">
                            <h2>Subscribe For <span>The Latest Updates</span></h2>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Enter your Email ID"></input>
                                    <button type="button" className="btn btn-primary">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
