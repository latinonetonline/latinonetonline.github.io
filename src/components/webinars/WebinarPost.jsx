import React from 'react'

const WebinarPost = (props) => {
    const { webinar } = props;

    const formatedExcerpt = () => {
        const excerpt = webinar.excerpt.length > 100 ? webinar.excerpt.substring(0, 97).replaceAll("<br>", "").trim() + ' ...' : webinar.excerpt
        return (
            <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        )
    }

    return (
        <div className="col-xs-12 col-md-6 col-lg-4 wow fadeInUp" key={webinar.id}>
            <div className="about-item">
                <a target="_blank" href={webinar.link}><img className="img-fluid" width="800" src={webinar.media} alt={webinar.title} /></a>
                <div className="about-text">
                    <div className="about-title">
                        <h3>
                            <a target="_blank" href={webinar.link}>
                                {webinar.title}
                            </a>
                        </h3>
                    </div>
                    {
                        formatedExcerpt()
                    }
                    <div className="row justify-content-end">
                        <a className="btn-youtube" target="_blank" href={webinar.youtube}>
                            <img src="assets/img/youtube.png" width="45" alt={webinar.title + " Youtube"} />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default WebinarPost;