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
                            <p>LATINO .NET ONLINE</p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                            <h3>QUICK LINKS</h3>
                            <ul>
                                <li><a href="https://latinonet.online/links#callforspeaker">Call For Speakers</a></li>
                                <li><a href="/live">Live</a></li>
                                <li><a href="https://www.meetup.com/latino-net-online/">Últimos Webinars</a></li>
                                <li><a href="https://latinonet.online/links#feedback">Feedback</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
                            <h3>FOLLOW US ON</h3>
                            <div className="widget">
                            </div>

                            <div className="widget">
                                <ul className="footer-social">
                                    <li><a className="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/LatinoNETOnline"><i
                                        className="lni-twitter-filled"></i></a></li>
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