import React from 'react'
import Header from '../components/header/Header';
import Countdown from '../components/sections/Countdown';
import About from '../components/sections/About';
import Webinars from '../components/sections/Webinars';
import Faq from '../components/sections/Faq';
import Footer from '../components/footer/Footer';
import Groups from '../components/sections/Groups';
import Social from '../components/sections/Social';
import Organizers from '../components/sections/Organizers';
import BackToTop from '../components/BackToTop';

const Home = () => {
    return (
        <>
            <Header />
            <Countdown />
            <About />
            <Webinars />
            {/* <Counter /> */}
            <Faq />
            <Social />
            <Groups />
            <Organizers />
            <Footer />
            <BackToTop />
            {/* <Preloadind show={loading} /> */}
        </>
    )
}

export default Home;