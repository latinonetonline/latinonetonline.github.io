import React, { useEffect, useState } from 'react'

const BackToTop = () => {

    const [show, setShow] = useState(false);
    // const [opacity, setOpacity] = useState(1);
    // const [display, setDisplay] = useState("inline");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    useEffect(() => {
        if (show) {
            let op = 0.1;
            // setDisplay('inline')
            var timer = setInterval(function () {
                if (op >= 1) {
                    clearInterval(timer);
                }
                // setOpacity(op);
                op += op + 0.1;
            }, 100);

        }
        else {
            // setOpacity(0);
            // setDisplay('none')
        }
    }, [show]);

    const handleScroll = () => {
        setShow(window.scrollY > 200)
    }

    return (
        <a href="#header-wrap" className="back-to-top">
            <i className="lni-chevron-up"></i>
        </a>
    )
}

export default BackToTop;