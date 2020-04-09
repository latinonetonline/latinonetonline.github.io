import React from 'react'

const Counter = () => {
    return (
        <section className="counter-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="0.3s">
                            <div className="icon"><i className="lni-map"></i></div>
                            <p>5</p>
                            <span>Comunidades Participantes</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="0.6s">
                            <div className="icon"><i className="lni-timer"></i></div>
                            <p>3</p>
                            <span>Webinars</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="0.9s">
                            <div className="icon"><i className="lni-users"></i></div>
                            <p>100+</p>
                            <span>Miembros</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="1.2s">
                            <div className="icon"><i className="lni-coffee-cup"></i></div>
                            <p>5</p>
                            <span>Articulos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter;