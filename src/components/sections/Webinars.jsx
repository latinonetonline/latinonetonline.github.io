import React, { useEffect, useState } from 'react'
import WebinarPost from '../webinars/WebinarPost'

const Webinars = () => {

    const [webinars, setWebinars] = useState([]);

    useEffect(() => {

        fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffetchrss.com%2Frss%2F6081956527aaa6478149ede3608195d4a43ff1007c099c92.xml')
            .then(data => data.json())
            .then(result =>

                setWebinars(result.items.map(element => {

                    var item = {
                        id: element.guid,
                        date: element.pubDate,
                        excerpt: element.description,
                        title: element.title,
                        media: element.enclosure.link,
                        link: element.link
                    }
                    return item;
                }))
            )
    }, []);

    const getPost = () => {

        if (webinars.length > 0) {
            return (
                <>
                    <WebinarPost webinar={webinars[0]} />
                    <WebinarPost webinar={webinars[1]} />
                    <WebinarPost webinar={webinars[2]} />
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
                            <p className="wow fadeInDown" data-wow-delay="0.2s">Estos fueron nuestros últimos webinars</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        getPost()
                    }
                </div>
                <div className="row justify-content-center wow fadeInUp">
                    <a href="https://www.meetup.com/latino-net-online/" className="btn btn-common wow fadeInUp" data-wow-delay="0.3s" target="_blank">Ver Todos</a>
                </div>
            </div>
        </section>
    )
}

export default Webinars;