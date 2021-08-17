import React from 'react';
import FAQs from '../FAQs/FAQs';
import TopServices from '../TopServices/TopServices';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';
import GoogleMap from './GoogleMap/GoogleMap';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import PopularBlogs from './PopularBlogs/PopularBlogs';
import Reviews from './Reviews/Reviews';
import SpecialOffer from './SpecialOffer/SpecialOffer';

const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <TopServices />
            <PopularBlogs />
            <SpecialOffer />
            <Reviews />
            <FAQs />
            <Subscribe />
            <GoogleMap />
            <Footer />
        </>
    );
};

export default Home;