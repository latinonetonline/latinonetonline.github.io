import React from 'react'
import Copyright from './Copyright'

const Footer = (props) => {
    return (
        <>
            <footer className="footer-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
                            <h3><img src="assets/img/latinonet/Logo Hexagono.png" alt="logo" width="120px" /></h3>
                            <p>
                                LATINO .NET ONLINE
          </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                            <h3>QUICK LINKS</h3>
                            <ul>
                                <li><a href="#">Call For Speakers</a></li>
                                <li><a href="#">Live</a></li>
                                <li><a href="#">Últimos Webinars</a></li>
                                <li><a href="#">Feedback</a></li>
                                {/* <li><a href="#">Event Photo Gallery</a></li> */}
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                            <h3>RECENT POSTS</h3>
                            <ul className="image-list">
                                <li>
                                    <figure className="overlay">
                                        <img className="img-fluid" src="assets/img/art/a1.jpg" alt="" />
                                    </figure>
                                    <div className="post-content">
                                        <h6 className="post-title"> <a href="blog-single.html">Lorem ipsm dolor sumit.</a> </h6>
                                        <div className="meta"><span className="date">October 12, 2018</span></div>
                                    </div>
                                </li>
                                <li>
                                    <figure className="overlay">
                                        <img className="img-fluid" src="assets/img/art/a2.jpg" alt="" />
                                    </figure>
                                    <div className="post-content">
                                        <h6 className="post-title"><a href="blog-single.html">Lorem ipsm dolor sumit.</a></h6>
                                        <div className="meta"><span className="date">October 12, 2018</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
                            {/* <h3>SUBSCRIBE US</h3> */}
                            <h3>FOLLOW US ON</h3>
                            <div className="widget">
                                {/* <div className="newsletter-wrapper">
                                <form method="post" id="subscribe-form" name="subscribe-form" className="validate">
                                    <div className="form-group is-empty">
                                        <input type="email" value="" name="Email" className="form-control" id="EMAIL" placeholder="Your email"
                                            required="" />
                                        <button type="submit" name="subscribe" id="subscribes" className="btn btn-common sub-btn"><i
                                            className="lni-pointer"></i></button>
                                        <div className="clearfix"></div>
                                    </div>
                                </form>
                            </div> */}
                            </div>

                            <div className="widget">
                                {/* <h5 className="widget-title">FOLLOW US ON</h5> */}
                                <ul className="footer-social">
                                    {/* <li><a className="facebook" target="_blank" href="#"><i className="lni-facebook-filled"></i></a></li> */}
                                    <li><a className="twitter" target="_blank" href="https://twitter.com/LatinoNETOnline"><i
                                        className="lni-twitter-filled"></i></a></li>
                                    {/* <li><a className="linkedin" target="_blank" href="#"><i className="lni-linkedin-filled"></i></a></li> */}
                                    {/* <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Copyright />
        </>
    )
}

export default Footer;