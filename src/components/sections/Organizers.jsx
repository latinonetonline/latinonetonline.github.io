import React from 'react'
import JorgeLevy from '../organizers/JorgeLevy'
import LautaroCarro from '../organizers/LautaroCarro'
import PastorCortes from '../organizers/PastorCortes'

const Organizers = () => {
    return (
        <section id="organizers" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-header text-center">
                            <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Organizadores</h1>
                            <p className="wow fadeInDown" data-wow-delay="0.2s">Para cualquier consulta o inquietud estamos a su disposición</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <JorgeLevy />
                    <LautaroCarro />
                    <PastorCortes />

                </div>
            </div>
        </section>
    )
}

export default Organizers;