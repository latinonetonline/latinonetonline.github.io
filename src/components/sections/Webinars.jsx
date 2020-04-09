import React, { useEffect, useState } from 'react'
import WebinarPost from '../webinars/WebinarPost'

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
                                id: element.id,
                                date: element.date,
                                excerpt: element.excerpt.rendered,
                                title: element.title.rendered,
                                media: featuredmediaObj.source_url,
                                slug: element.slug
                            }])
                        }))
            });

        }
    }, [posts]);

    const getPost = () => {
        let sortWebinars = webinars.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));

        if (webinars.length === 3) {
            return (
                <>
                    <WebinarPost webinar={sortWebinars[2]} />
                    <WebinarPost webinar={sortWebinars[1]} />
                    <WebinarPost webinar={sortWebinars[0]} />
                </>
            )
        }
    }

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
                    {
                        getPost()
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