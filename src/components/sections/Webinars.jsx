import React, { useEffect, useState } from 'react'

const Webinars = (props) => {

    const { posts } = props
    const [webinars, setWebinars] = useState([]);

    useEffect(() => {
        if (posts.length > 0) {
            posts.forEach(element => {
                fetch(element._links["wp:featuredmedia"][0].href)
                    .then(featuredmedia => featuredmedia.json()
                        .then(featuredmediaObj => {
                            setWebinars(webinars => [...webinars, {
                                excerpt: element.excerpt.rendered,
                                title: element.title.rendered,
                                media: featuredmediaObj.source_url
                            }])
                        }))
            });

        }
    }, [posts]);


    return (
        <section id="webinars" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-header text-center">
                            <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Ultimos Webinars Transmitidos</h1>
                            <p className="wow fadeInDown" data-wow-delay="0.2s">Resumenes de cada una de nuestras transmisiones</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="about-item">
                            <img className="img-fluid" src="assets/img/webinars/webinar3.jpg" alt="" />
                            <div className="about-text">
                                <h3><a href="#">Dale dinamismo a tu código C#</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                                <a className="btn btn-common btn-rm" href="#">Leer más</a>
                            </div>
                        </div>
                    </div>
                    {
                        webinars.map((webinar, i) => {
                            return (
                                <div className="col-xs-12 col-md-6 col-lg-4" key={i}>
                                    <div className="about-item">
                                        <img className="img-fluid" src={webinar.media} alt="" />
                                        <div className="about-text">
                                            <h3><a href="#">{webinar.title}</a></h3>
                                            <div dangerouslySetInnerHTML={{ __html: webinar.excerpt }}></div>
                                            <a className="btn btn-common btn-rm" href="#">Leer más</a>
                                        </div>
                                    </div>
                                </div>)
                        })

                    }
                </div>
                <div className="row justify-content-center wow fadeInUp">
                    <a href="pricing.html" className="btn btn-common wow fadeInUp" data-wow-delay="0.3s">Ver Todos</a>
                </div>
            </div>
        </section>
    )
}

export default Webinars;