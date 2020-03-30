import React, { useEffect, useState } from 'react'

const Countdown = () => {

    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    let timer;
    useEffect(() => {
        start()
        return () => clearInterval(timer);
    }, []);


    const start = () => {
        let countDownDate = new Date("Apr 4, 2020 12:00:00").getTime();

        // Update the count down every 1 second
        timer = setInterval(function () {
            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            setCountdown({ days: days, hours: hours, minutes: minutes, seconds: seconds })
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

    return (
        <section className="countdown-timer section-padding">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="heading-count">
                            <h2 className="wow fadeInDown" data-wow-delay="0.2s">Siguiente Webinar comienza en</h2>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row time-countdown justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                            <div id="clock" className="time-count">

    <div className="time-entry days"><span id="countdown-days">{countdown.days}</span> Days</div>
                                <div className="time-entry hours"><span id="countdown-hours">{countdown.hours}</span> Hours</div>
                                <div className="time-entry minutes"><span id="countdown-minutes">{countdown.minutes}</span> Minutes</div>
                                <div className="time-entry seconds"><span id="countdown-seconds">{countdown.seconds}</span> Seconds</div>
                            </div>
                        </div>

                        <div title="Add to Calendar" className="addeventatc rose wow fadeInUp " data-styling="none" data-wow-delay="0.3s">
                            Agregar al Calendario
                <span className="arrow">&nbsp;</span>
                            <span className="start">06/18/2015 09:00 AM</span>
                            <span className="end">06/18/2015 11:00 AM</span>
                            <span className="timezone">Europe/Paris</span>
                            <span className="title">Summary of the event</span>
                            <span className="description">Description of the event</span>
                            <span className="location">Location of the event</span>
                            <span className="organizer">Organizer</span>
                            <span className="organizer_email">Organizer e-mail</span>
                            <span className="all_day_event">false</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Countdown;