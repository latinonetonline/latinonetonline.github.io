import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [colapseNavbar, setColapseNavbar] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleScroll = () => {
        setColapseNavbar(window.scrollY > 200)
    }

    return (
        <nav className={`navbar navbar-expand-lg fixed-top scrolling-navbar ${colapseNavbar ? "top-nav-collapse" : ""}`}>
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
                        aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                    </button>
                    <a href="index.html" className="navbar-brand"><img src="assets/img/latinonet/Logo Hexagono.png" alt="logo"
                        style={{ width: "10%" }} /></a>
                </div>
                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="navbar-nav mr-auto w-100 justify-content-end">
                        <li className="nav-item active">
                            <a className="nav-link" href="#header-wrap">
                                Home
                  </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#event-slides">
                                Comunidad
                  </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#webinars">
                                Webinars
                  </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#faq">
                                Faq
                  </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#subscribe">
                                Contacto
                  </a>
                        </li>
                    </ul>
                </div>
            </div>
-
            <ul className="mobile-menu">
                <li>
                    <a className="page-scrool" href="#header-wrap">Home</a>
                </li>
                <li>
                    <a className="page-scrool" href="#about">About</a>
                </li>
                <li>
                    <a className="page-scroll" href="#schedules">Schedules</a>
                </li>
                <li>
                    <a className="page-scroll" href="#faq">Faq</a>
                </li>
                <li>
                    <a className="page-scroll" href="#google-map-area">Contact</a>
                </li>
            </ul>

        </nav>

    )
}

export default Navbar;