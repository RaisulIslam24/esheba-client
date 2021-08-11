import React, { useContext } from 'react';
import { userContext } from '../../App';
import FAQs from '../FAQs/FAQs';
import Features from '../Features/Features';
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
            <Features />
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