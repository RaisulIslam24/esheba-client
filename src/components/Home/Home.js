import React from 'react';
import Subscribe from '../Subscribe/Subscribe';
import Header from './Header/Header';
import PopularBlogs from './PopularBlogs/PopularBlogs';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Header />
            <PopularBlogs />
            <Reviews />
            <Subscribe />
        </>
    );
};

export default Home;