import React from 'react';
import FAQs from '../FAQs/FAQs';
import Features from '../Features/Features';
import Subscribe from '../Subscribe/Subscribe';
import Header from './Header/Header';
import PopularBlogs from './PopularBlogs/PopularBlogs';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Header />
            <Features />
            <PopularBlogs />
            <Reviews />
            <FAQs />
            <Subscribe />
        </>
    );
};

export default Home;