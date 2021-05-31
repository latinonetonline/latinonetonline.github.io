import React from 'react'
import { Timeline, Follow } from "react-twitter-widgets";
import { FacebookProvider, Page, Like } from "react-facebook";

const Social = () => {
    return (
        <section id="social-networks" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-header text-center">
                            <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Seguinos en nuestras redes sociales</h1>
                            <p className="wow fadeInDown" data-wow-delay="0.2s">Enterate de las últimas novedades de la comunidad</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
                        <FacebookProvider appId="251764472788537">
                            <Like href="http://www.facebook.com/latinonetonline" colorScheme="dark" showFaces share />

                            <Page href="https://www.facebook.com/latinonetonline" tabs="timeline" />
                        </FacebookProvider>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
                        <Follow username="latinonetonline" options={{ lang: "es", size: "large" }} />

                        <Timeline
                            dataSource={{ sourceType: "profile", screenName: "latinonetonline" }}
                            options={{ lang: "es", width: "400", height: "500" }}
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Social;