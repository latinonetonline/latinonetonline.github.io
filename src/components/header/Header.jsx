import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header id="header-wrap">

            <Navbar />
            <div id="main-slide" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="assets/img/latinonet/fondo.jpg" alt="First slide" />
                        <div className="carousel-caption d-md-block">
                            <img id="logo" src="assets/img/latinonet/Logo Hexagono.png" alt="Logo" />
                            <p className="fadeInUp wow" data-wow-delay=".6s">Somos una comunidad de desarrolladores .NET de toda
                  Latinoamérica!</p>
                            <h1 className="wow fadeInDown heading" data-wow-delay=".4s">Latino .NET Online</h1>
                            {/* <a href="#about" className="fadeInRight wow btn btn-border btn-lg" data-wow-delay=".6s">Explore More</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )

}

export default Header;