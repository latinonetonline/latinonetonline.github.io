import React from 'react'

const OrganizerBase = props => {

    const { name, twitter, linkedin, email, facebook, website, cssOrganizer } = props;

    return (
        <div className="col-xs-12 col-md-6 col-lg-4 wow fadeInUp">
            <div className="about-item text-center">
                <div className="row justify-content-center hexagon-container">

                    <div className="hexagon hexagon2"><div className="hexagon-in1"><div className={`hexagon-in2 ${cssOrganizer}`}></div></div></div>
                </div>
                <div className="about-text">
                    <div className="about-title organizer-title">
                        <h3>
                            <a target="_blank" rel="noopener noreferrer" href={website}>
                                {name}
                            </a>
                        </h3>
                    </div>

                    <div className="row justify-contents-center">
                        <div className="col-3">

                            <a className="organizer-icon" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${twitter}`}><i
                                className="lni-twitter-filled"></i></a>
                        </div>
                        <div className="col-3">
                            <a className="organizer-icon" target="_blank" rel="noopener noreferrer" href={`mailto:${email}`}><i
                                className="lni-envelope"></i></a>

                        </div>
                        <div className="col-3">
                            <a className="organizer-icon" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/${linkedin}`}><i
                                className="lni-linkedin"></i></a>

                        </div>
                        <div className="col-3">
                            <a className="organizer-icon" target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/${facebook}`}><i
                                className="lni-facebook-filled"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default OrganizerBase