import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

const Countdown = () => {

    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [event, setEvent] = useState({});
    const [ip, setIp] = useState({});
    useEffect(() => {
        let timer;
        const start = (date) => {
            let utc = moment.utc(date)
            let local = utc.local();

            let countDownDate = new Date(local.format()).getTime();

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
        const fetchIp = fetch("https://ipapi.co/json/");
        fetch("https://raw.githubusercontent.com/latinonetonline/eventsdb/master/events/NextEvent")
            .then(json => json.json())
            .then(event => {
                setEvent(event)
                window.EBWidgets.createWidget({
                    // Required
                    widgetType: 'checkout',
                    eventId: event.EventbriteEventId,
                    iframeContainerId: 'eventbrite-widget-container',

                    // Optional
                    iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
                    onOrderComplete: function () {
                        console.log('Order complete!');
                    }  // Method called when an order has successfully completed
                });
                fetchIp.then(json => json.json())
                    .then(ip => {
                        setIp(ip)
                        start(event.Date)
                    })
            })

        return () => clearInterval(timer);
    }, []);

    const subTitle = () => {
        if (event && ip) {
            let local = moment.tz(event.Date, ip.timezone).format("DD/MM/YYYY HH:mm")
            let utc = moment.utc(event.Date).format("DD/MM/YYYY HH:mm")

            return (
                <>
                    <p className="wow fadeInDown" data-wow-delay="0.2s">UTC: {utc}</p>
                    <h6 className="wow fadeInDown" data-wow-delay="0.2s">{ip.timezone}: {local} </h6>
                </>
            )
        }

    }
    return (
        <section className="countdown-timer section-padding">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="heading-count">
                            <h2 className="wow fadeInDown" data-wow-delay="0.2s">Siguiente Webinar comienza en</h2>
                            {subTitle()}
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
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div id="eventbrite-widget-container"></div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Countdown;