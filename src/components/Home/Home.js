import React from 'react';
import Features from '../Features/Features';
import Subscribe from '../Subscribe/Subscribe';
import Header from './Header/Header';
import PopularBlogs from './PopularBlogs/PopularBlogs';
import Reviews from './Reviews/Reviews';
import SpecialOffer from './SpecialOffer/SpecialOffer';

const Home = () => {
    return (
        <>
            <Header />
            <Features />
            <PopularBlogs />
            <SpecialOffer/>
            <Reviews />
            <Subscribe />
        </>
    );
};

export default Home;