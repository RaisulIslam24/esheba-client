import React from 'react';
import FAQs from '../FAQs/FAQs';
import TopServices from '../TopServices/TopServices';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';
import GoogleMap from './GoogleMap/GoogleMap';
import Header from './Header/Header';
import PopularBlogs from './PopularBlogs/PopularBlogs';
import Reviews from './Reviews/Reviews';
import SpecialOffer from './SpecialOffer/SpecialOffer';
// import TopProvider from '../TopProvider/TopProvider';
import TopServicePro from '../TopServicePro/TopServicePro';
import TechnicalSupport from '../TechnicalSupport/TechnicalSupport';

const Home = () => {
    return (
        <>
            <Header />
            <TopServices />
            <TopServicePro/>
            <PopularBlogs />
            <SpecialOffer />
            <Reviews />
            <FAQs />
            <TechnicalSupport/>
            <Subscribe />
            <GoogleMap />
            <Footer />
        </>
    );
};

export default Home;