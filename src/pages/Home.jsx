import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header';
import Countdown from '../components/sections/Countdown';
import About from '../components/sections/About';
import Webinars from '../components/sections/Webinars';
import Counter from '../components/sections/Counter';
import Faq from '../components/sections/Faq';
import Footer from '../components/footer/Footer';
import Groups from '../components/sections/Groups';
import Preloadind from '../components/Preloadind';
import BackToTop from '../components/BackToTop';

const Home = () => {

    const [page, setPage] = useState({ slugs: [] })
    const [loading, setLoading] = useState(false)

    return (
        <>
            <Header />
            <Countdown />
            <About />
            <Webinars />
            <Counter />
            <Faq />
            <Groups />
            <Footer />
            <BackToTop />
            <Preloadind show={loading} />
        </>
    )
}

export default Home;