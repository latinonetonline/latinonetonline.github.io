import React from 'react'

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Sobre la comunidad</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Somos una comunidad de desarrolladores .NET de toda
                  Latinoamérica! </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
            <div className="video">
              <img className="img-fluid" src="assets/img/about/about.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
            <p className="intro-desc">Latino .NET Online tiene el objetivo de unir a todas las comunidades .NET de
            Latinoamérica, para esto los miembros de estas comunidades participan de los Webinars que realizamos todos
            los sábados con la meta de brindar otro espacio donde poder seguir aprendiendo en conjunto.
              </p>
            <h2 className="intro-title">Temas vistos</h2>
            <ul className="list-specification">
              <li><i className="lni-check-mark-circle"></i> Temas vinculados con .NET</li>
              <li><i className="lni-check-mark-circle"></i> Diseño y arquitectura de software</li>
              <li><i className="lni-check-mark-circle"></i> Herramientas y consejos para mejorar como desarrolladores</li>
              <li><i className="lni-check-mark-circle"></i> Bases de datos, clouds y otros</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;