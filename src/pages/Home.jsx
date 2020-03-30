import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header';
import Countdown from '../components/sections/Countdown';
import About from '../components/sections/About';
import Webinars from '../components/sections/Webinars';
import Counter from '../components/sections/Counter';
import Faq from '../components/sections/Faq';
import Footer from '../components/footer/Footer';
import Whatsapp from '../components/sections/Whatsapp';
import Preloadind from '../components/Preloadind';
import BackToTop from '../components/BackToTop';

const Home = () => {

    const [posts, setPost] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://latinonetonline.conosur.tech/wp-json/wp/v2/posts?per_page=3&categories=3")
            .then(posts => posts.json()
                .then(postsObj => {
                    setPost(postsObj)
                    setLoading(false)
                }))
    }, []);

    return (
        <>
            <Header />
            <Countdown />
            <About />
            <Webinars posts={posts} />
            <Counter />
            <Faq />
            <Whatsapp />
            <Footer />
            <BackToTop />
            <Preloadind show={loading} />
        </>
    )
}

export default Home;