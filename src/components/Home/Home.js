import React from 'react';
import Features from '../Features/Features';
import Subscribe from '../Subscribe/Subscribe';
import Header from './Header/Header';
import PopularBlogs from './PopularBlogs/PopularBlogs';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Header />
            <PopularBlogs />
            <Features />
            <Reviews />
            <Subscribe />
        </>
    );
};

export default Home;