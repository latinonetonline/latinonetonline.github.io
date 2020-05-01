import React, { useEffect, useState } from 'react'
import WebinarPost from '../webinars/WebinarPost'

const Webinars = (props) => {

    const { slugs } = props
    const [webinars, setWebinars] = useState([]);

    useEffect(() => {
        if (slugs.length > 0) {
            slugs.forEach(element => {
                fetch(`https://raw.githubusercontent.com/latinonetonline/blogdb/master/article/${element}`)
                    .then(post => post.json()
                        .then(post => {
                            setWebinars(webinars => [...webinars, {
                                id: element.ArticleId,
                                date: post.Date,
                                excerpt: post.Description,
                                title: post.Title,
                                media: post.ImageLink,
                                slug: post.Slug
                            }])
                        }))
            });

        }
    }, [slugs]);

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
                    <a href="/blog" className="btn btn-common wow fadeInUp" data-wow-delay="0.3s">Ver Todos</a>
                </div>
            </div>
        </section>
    )
}

export default Webinars;