import React, { useEffect, useState } from 'react'
import WebinarPost from '../webinars/WebinarPost'

const Webinars = () => {

    const [webinars, setWebinars] = useState([]);

    useEffect(() => {

        fetch('https://api.latinonet.online/api/v1/webinars-module/Website/PastWebinars')
            .then(data => data.json())
            .then(result =>

                setWebinars(result.result.map(element => {

                    var item = {
                        date: element.eventDate,
                        excerpt: element.description,
                        title: element.title,
                        media: element.flyer,
                        link: element.meetup,
                        youtube: element.liveStreaming
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
                <div className="row posts">
                    {
                        getPost()
                    }
                </div>
                <div className="row justify-content-center wow fadeInUp">
                    <a href="https://www.meetup.com/latino-net-online/" rel="noopener noreferrer" className="btn btn-common wow fadeInUp" data-wow-delay="0.3s" target="_blank">Ver Todos</a>
                </div>
            </div>
        </section>
    )
}

export default Webinars;