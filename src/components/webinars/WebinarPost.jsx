import React from 'react'

const WebinarPost = (props) => {
    const { webinar } = props;

    const formatedExcerpt = () => {
        const excerpt = webinar.excerpt.length > 100 ? webinar.excerpt.substring(0, 97) + '...' : webinar.excerpt
        return (
            <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        )
    }

    return (
        <div className="col-xs-12 col-md-6 col-lg-4" key={webinar.id}>
            <div className="about-item">
                <img className="img-fluid" src={webinar.media} alt="" />
                <div className="about-text">
                    <h3>{webinar.title}</h3>
                    {/* {
                        formatedExcerpt()
                    } */}
                    <a className="btn btn-common btn-rm" target="_blank" href={webinar.link}>Leer más</a>
                </div>
            </div>
        </div >
    )

}

export default WebinarPost;