import React from 'react'

const Groups = () => {
    return (
        <div id="subscribe" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-header text-center">
                            <h3 className="section-title wow fadeInUp" data-wow-delay="0.2s">También puedes unirte a nuestros grupos</h3>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
                            <a target="_blank" rel="noopener noreferrer" href="https://go.latinonet.online/discord">
                                <img src="/assets/img/discord.png" width="150px" alt="" />
                            </a>
                        
                    </div>
                    <div className="col-md-4 col-lg-4 col-xs-12 wow fadeInLeft text-center" data-wow-delay="0.3s">
                
                            <a target="_blank" rel="noopener noreferrer" href="https://go.latinonet.online/meetup">
                                <img src="/assets/img/meetup.png" width="180px" alt="" />
                            </a>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xs-12 wow fadeInLeft text-right" data-wow-delay="0.3s">
                
                            <a target="_blank" rel="noopener noreferrer" href="https://go.latinonet.online/whatsapp">
                                <img src="/assets/img/wpp.png" width="140px" alt="" />
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Groups;