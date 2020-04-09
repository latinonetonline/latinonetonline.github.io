import React from 'react'

const WebinarPost = (props) => {
    const { webinar } = props;

    return (
        <div className="col-xs-12 col-md-6 col-lg-4" key={webinar.id}>
            <div className="about-item">
                <img className="img-fluid" src={webinar.media} alt="" />
                <div className="about-text">
                    <h3><a href="#">{webinar.title}</a></h3>
                    <div dangerouslySetInnerHTML={{ __html: webinar.excerpt }}></div>
                    <a className="btn btn-common btn-rm" href="#">Leer más</a>
                </div>
            </div>
        </div>
    )

}

export default WebinarPost;