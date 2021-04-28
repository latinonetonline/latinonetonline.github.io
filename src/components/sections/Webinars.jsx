import React, { useEffect, useState } from 'react'
import WebinarPost from '../webinars/WebinarPost'

const Webinars = () => {

    const [webinars, setWebinars] = useState([]);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/latinonetonline/eventsdb/main/events/PastEvents')
            .then(data => data.json())
            .then(result =>

                setWebinars(result.map(element => {

                    var item = {
                        date: element.startDate,
                        excerpt: element.description,
                        title: element.title,
                        media: element.image,
                        link: element.meetupLink,
                        youtube: element.youtubeLink
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