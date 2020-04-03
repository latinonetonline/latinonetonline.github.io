import React from 'react'

const Faq = () => {
    return (
        <section id="faq" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Preguntas Frecuentes</h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s">Lista de preguntas y respuestas que surgen frecuentemente
                  dentro de la comunidad</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
              <div className="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <div className="header-title" data-toggle="collapse" data-target="#questionOne" aria-expanded="true"
                      aria-controls="collapseOne">
                      <i className="lni-pencil"></i> ¿Quienes pueden dar charlas?
                    </div>
                  </div>
                  <div id="questionOne" className="collapse" aria-labelledby="headingOne" data-parent="#question">
                    <div className="card-body">
                      Todos los miembros pueden dar charlas. Solo tienen que proponerla en el formulario de Call For
                      Speaker.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <div className="header-title" data-toggle="collapse" data-target="#questionTwo" aria-expanded="false"
                      aria-controls="questionTwo">
                      <i className="lni-pencil"></i> ¿Donde se pueden ver los Webinars?
                    </div>
                  </div>
                  <div id="questionTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#question">
                    <div className="card-body">
                      Los webcasts son transmitidos en vivo en la plataforma <a target="_blank"
                        href="https://Mixer.com/LatinoNETOnline">Mixer.com/LatinoNETOnline</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <div className="header-title" data-toggle="collapse" data-target="#questionThree" aria-expanded="false"
                      aria-controls="questionThree">
                      <i className="lni-pencil"></i> ¿Hay que pagar para participar en la comunidad?
                    </div>
                  </div>
                  <div id="questionThree" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                    <div className="card-body">
                      No hay que pagar nada. Esta es una comunidad sin fines de lucro.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <div className="header-title" data-toggle="collapse" data-target="#questionFour" aria-expanded="false"
                      aria-controls="questionFour">
                      <i className="lni-pencil"></i> ¿Quienes pueden escribir un artículo en el Blog Comunitario?
                    </div>
                  </div>
                  <div id="questionFour" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                    <div className="card-body">
                      Primero deberias tener un Blog propio hecho con Wordpress y agregar el link en el siguiente formulario
                      para que podamos agregarlo al Blog.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
              <div className="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne2">
                    <div className="header-title" data-toggle="collapse" data-target="#questionOne2" aria-expanded="true"
                      aria-controls="collapseOne">
                      <i className="lni-pencil"></i> ¿Graban los webcasts?
                    </div>
                  </div>
                  <div id="questionOne2" className="collapse" aria-labelledby="headingOne" data-parent="#question">
                    <div className="card-body">
                      La plataforma de Mixer graba toda la transmisión y la deja disponible para todos durante 14 días. De
                      todas maneras, nosotros la descargamos de Mixer y subimos solamente la charla a <a target="_blank"
                        href="https://www.youtube.com/channel/UCR173iRDyQXcfkRWZ77gtaA">Nuestro canal de Youtube</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo2">
                    <div className="header-title" data-toggle="collapse" data-target="#questionTwo2" aria-expanded="false"
                      aria-controls="questionTwo">
                      <i className="lni-pencil"></i> ¿Cuanto conocimiento se necesita para participar?
                    </div>
                  </div>
                  <div id="questionTwo2" className="collapse" aria-labelledby="headingTwo" data-parent="#question">
                    <div className="card-body">
                      No importa si recien empezas o tenes más de 10 años de experiencia, siempre vas a poder aprender algo
                      nuevo con los webcasts y nosotros vamos a responder todas las preguntas que necesites.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <div className="header-title" data-toggle="collapse" data-target="#questionFive" aria-expanded="false"
                      aria-controls="questionFive">
                      <i className="lni-pencil"></i>¿Dan certificado?
                    </div>
                  </div>
                  <div id="questionFive" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                    <div className="card-body">
                      No, no otorgamos ningun tipo de certificado.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <div className="header-title" data-toggle="collapse" data-target="#questionSix" aria-expanded="false"
                      aria-controls="questionSix">
                      <i className="lni-pencil"></i> ¿Como ayudar a la comunidad?
                    </div>
                  </div>
                  <div id="questionSix" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                    <div className="card-body">
                      Además de proponer temas para dar en los webcasts también nos gustaria que nos sigan en las redes
                      sociales y que compartan nuestro contenido para poder llegar a más publico y seguir expandiendonos.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Faq;